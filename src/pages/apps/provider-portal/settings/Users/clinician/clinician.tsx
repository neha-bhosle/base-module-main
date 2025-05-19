import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomisedTable from "../../../../../../common-components/table/table";
import { clinicianTableHeaders } from "../../../../../../common-components/headers/all-headers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { getAllClinicians } from "../../../../../../redux/auth/profile/get-all-clinicians";
import DrawerBS from "../../../../../../common-components/drawer-bs/custom-drawer";
import { ViewMode } from "../../../../../../constants/formConst";
import AddClinicianDialog from "./add-clinician-dialog";
import { editClinicianStatus } from "../../../../../../redux/auth/profile/edit-clinician-status";
import { ClinicianPayload } from "../../../../../../models/all-const";
const Clinician = () => {
  const [pageDisplaySize, setPageDisplaySize] = useState("10");
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [, setTotalElements] = useState<number>(0);
  const [selectedClinician, setSelectedClinician] = useState(null);
  const [drawerOpenType, setDrawerOpenType] = useState<ViewMode>();
  const [openAddClinicianDrawer, setOpenAddClinicianDrawer] = useState(false);
  const [tableData, setTableData] = useState();

  const dispatch = useDispatch<AppDispatch>();

  const { data: getAllCliniciansData }: any = useSelector(
    (state: RootState) => state.GetAllCliniciansReducer
  );

  const handlePageChange = (value: number) => {
    const newPage = value - 1;
    setPage(newPage);
    dispatch(
      getAllClinicians({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: newPage,
        searchString: "",
      } as ClinicianPayload)
    );
  };

  const handlePageSizeChange = (size: number) => {
    const newSize = size.toString();
    setPageDisplaySize(newSize);
    setPage(0);
    dispatch(
      getAllClinicians({
        xTenant: "default",
        size: size,
        page: 0,
        searchString: "",
      } as ClinicianPayload)
    );
  };

  const handleOpenDrawer = (rowData: any, type: ViewMode) => {
    setDrawerOpenType(type);
    setSelectedClinician(rowData);
    console.log("rowData", rowData);
    setOpenAddClinicianDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenAddClinicianDrawer(false);
    setSelectedClinician(null);
  };

  const handleSwitch = async (flag: boolean, uuid: string) => {
    try {
      await dispatch(editClinicianStatus({ clinicianId: uuid, flag })).unwrap();
      // Refresh the clinician list after status change
      dispatch(
        getAllClinicians({
          xTenant: "default",
          size: parseInt(pageDisplaySize),
          page: page,
          searchString: "",
        } as ClinicianPayload)
      );
    } catch (error) {
      console.error("Failed to update clinician status:", error);
    }
  };

  useEffect(() => {
    dispatch(
      getAllClinicians({
        xTenant: "default",
        size: 10,
        page: 0,
        searchString: "",
      } as ClinicianPayload)
    );
  }, [dispatch]);

  useEffect(() => {
    if (getAllCliniciansData) {
      const {
        content,
        totalPages: total,
        totalElements: elements,
      } = getAllCliniciansData;
      setTotalPages(total);
      setTotalElements(elements);

      const modifiedCliniciansData = content?.map((clinician: any) => {
        console.log("clinician?.languagesSpoken", clinician);
        const mappedData = {
          uuid: clinician?.uuid,
          firstName: clinician?.firstName,
          lastName: clinician?.lastName,
          name: clinician?.firstName + " " + clinician?.lastName,
          emailId: clinician?.emailId,
          email: clinician?.emailId,
          contactNumber: clinician?.contactNumber,
          contact: clinician?.contactNumber,
          npiNumber: clinician?.npiNumber || null,
          npinumber: clinician?.npiNumber,
          languagesSpoken:
            clinician?.languagesSpoken &&
            Array.isArray(clinician?.languagesSpoken)
              ? clinician?.languagesSpoken.join(", ")
              : "",
          locationUuids:
            clinician?.locationUuids && Array.isArray(clinician?.locationUuids)
              ? clinician?.locationUuids.join(", ")
              : "",
          worklocation:
            clinician?.locationNames && Array.isArray(clinician?.locationNames)
              ? clinician?.locationNames.join(", ")
              : "",
          supervisingClinician: clinician?.supervisorClinicianName || null,
          role: clinician?.role || "",
          status: clinician?.status,
          action: [
            { label: "Edit", route: "" },
            { label: "Delete", route: "" },
          ],
        };
        return mappedData;
      });
      setTableData(modifiedCliniciansData);
    }
  }, [getAllCliniciansData]);

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <CustomisedTable
          headCells={clinicianTableHeaders}
          tableData={tableData}
          showCPTAndICDPagination
          setPage={handlePageChange}
          pageSize={totalPages}
          setPageDisplaySize={handlePageSizeChange}
          pageDisplaySize={pageDisplaySize}
          page={page + 1}
          setHeight="65vh"
          handleOpenDrawer={(e) => handleOpenDrawer(e, ViewMode.EDIT)}
          handleSwitch={handleSwitch}
        />
      </Box>

      <DrawerBS
        anchor={"right"}
        open={openAddClinicianDrawer}
        onClose={handleCloseDrawer}
        title={
          drawerOpenType === ViewMode.EDIT ? "Edit Clinician" : "Add Clinician"
        }
      >
        <AddClinicianDialog
          handleClose={handleCloseDrawer}
          isEdit={drawerOpenType === ViewMode.EDIT}
          selectedClinician={selectedClinician}
        />
      </DrawerBS>
    </Grid>
  );
};

export default Clinician;
