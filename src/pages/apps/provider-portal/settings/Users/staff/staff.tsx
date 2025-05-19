import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrawerBS from "../../../../../../common-components/drawer-bs/custom-drawer";
import { staffTableHeaders } from "../../../../../../common-components/headers/all-headers";
import CustomisedTable from "../../../../../../common-components/table/table";
import { capitalizeFirstLetter } from "../../../../../../common-components/utils/stringUtils";
import { ViewMode } from "../../../../../../constants/formConst";
import { StaffList } from "../../../../../../models/providerGroup";
import { editStaffStatus } from "../../../../../../redux/auth/profile/edit-staff-status-reducer";
import { getAllStaff } from "../../../../../../redux/auth/profile/get-all-staff-reducer";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import AddStaffDialog from "./add-staff-dialog";
import { apiStatus } from "../../../../../../models/apiStatus";
import { loaderAction } from "../../../../../../redux/auth/loaderReducer";
import { snackbarAction } from "../../../../../../redux/auth/snackbarReducer";

const Staff = () => {
  const [tableData, setTableData] = useState<StaffList>([]);
  const [pageDisplaySize, setPageDisplaySize] = useState("10");
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  // const [totalElements, setTotalElements] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const { data: getAllStaffData, status: getAllStaffStatus } = useSelector(
    (state: RootState) => state.GetAllStaffReducer
  );

  const [openAddStaffDrawer, setOpenAddStaffDrawer] = useState(false);
  const [drawerOpenType, setDrawerOpenType] = useState<ViewMode>();
  const [selectedStaff, setSelectedStaff] = useState<
    | {
        name: string;
        email: string;
        contact: string;
        role: string;
        status: boolean;
        uuid: string;
        action: { label: string; route: string }[];
      }
    | undefined
  >(undefined);

  const handleOpenDrawer = (rowData: any, type: ViewMode) => {
    setDrawerOpenType(type);
    setSelectedStaff(rowData);
    setOpenAddStaffDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenAddStaffDrawer(false);
    setSelectedStaff(undefined);
  };

  const handlePagechange = (value: number) => {
    const newPage = value - 1;
    setPage(newPage);
    dispatch(
      getAllStaff({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: newPage,
        searchString: "",
      })
    );
  };

  const handlePageSizeChange = (size: number) => {
    const newSize = size.toString();
    setPageDisplaySize(newSize);
    setPage(0);
    dispatch(
      getAllStaff({
        xTenant: "default",
        size: size,
        page: 0,
        searchString: "",
      })
    );
  };

  const handleAction = (id: string) => {
    setTableData(tableData.filter((item) => item.name !== id));
  };

  const handleSwitch = async (flag: boolean, uuid: string) => {
    try {
      await dispatch(editStaffStatus({ staffId: uuid, flag })).unwrap();
      // Refresh the staff list after status change
      dispatch(
        getAllStaff({
          xTenant: "default",
          size: parseInt(pageDisplaySize),
          page: page,
          searchString: "",
        })
      );
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: "success",
          message: `Staff status ${flag ? "activated" : "deactivated"} successfully`,
        })
      );
    } catch (error) {
      console.error("Failed to update staff status:", error);
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: "error",
          message: "Failed to update staff status",
        })
      );
    }
  };

  useEffect(() => {
    switch (getAllStaffStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        break;
    }
  }, [getAllStaffStatus, dispatch]);

  useEffect(() => {
    dispatch(
      getAllStaff({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: page,
        searchString: "",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (getAllStaffData) {
      const {
        content,
        totalPages: total,
        // totalElements: elements,
      } = getAllStaffData;
      setTotalPages(total);
      // setTotalElements(elements);

      const modifiedStaffData = content.map((staff) => {
        return {
          name: staff?.firstName + " " + staff?.lastName,
          email: staff?.emailId,
          contact: staff?.contactNumber,
          role: capitalizeFirstLetter(staff?.role || ""),
          status: staff?.status,
          uuid: staff?.uuid,
          action: [
            { label: "Edit", route: "" },
            { label: "Delete", route: "" },
          ],
        };
      });
      setTableData(modifiedStaffData as unknown as StaffList);
    }
  }, [getAllStaffData]);

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <CustomisedTable
          headCells={staffTableHeaders}
          tableData={tableData}
          showCPTAndICDPagination
          setPage={handlePagechange}
          pageSize={totalPages}
          setPageDisplaySize={handlePageSizeChange}
          pageDisplaySize={pageDisplaySize}
          page={page + 1}
          setHeight="auto"
          handleDelete={handleAction}
          handleOpenDrawer={(e) => handleOpenDrawer(e, ViewMode.EDIT)}
          handleSwitch={handleSwitch}
        />
      </Box>
      <DrawerBS
        anchor={"right"}
        open={openAddStaffDrawer}
        onClose={handleCloseDrawer}
        title={drawerOpenType === ViewMode.EDIT ? "Edit Staff" : "Add Staff"}
      >
        <AddStaffDialog
          handleClose={handleCloseDrawer}
          isEdit={drawerOpenType === ViewMode.EDIT}
          selectedStaff={selectedStaff}
        />
      </DrawerBS>
    </Grid>
  );
};

export default Staff;
