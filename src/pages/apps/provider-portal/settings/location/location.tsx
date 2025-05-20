import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrawerBS from "../../../../../common-components/drawer-bs/custom-drawer";
import { locationTableHeaders } from "../../../../../common-components/headers/all-headers";
import CustomisedTable from "../../../../../common-components/table/table";
import { ViewMode } from "../../../../../constants/formConst";
import { getAllLocationDetails } from "../../../../../redux/auth/profile/get-location-details";
import { editLocationStatus } from "../../../../../redux/auth/profile/edit-location-status-reduxer";
import type { AppDispatch } from "../../../../../redux/store";
import { RootState } from "../../../../../redux/store";
import AddLocationDialog from "./add-location-dialog";
import { LocationPayload } from "src/models/all-const";
import { apiStatus } from "../../../../../models/apiStatus";
import { loaderAction } from "../../../../../redux/auth/loaderReducer";
import { snackbarAction } from "../../../../../redux/auth/snackbarReducer";

// Define interfaces for location data
interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipcode: string;
}

interface LocationData {
  locationName: string;
  contactNumber: string;
  emailId: string;
  groupNpiNumber: string;
  fax?: string;
  address?: Address;
  status: string;
  uuid: string;
}

interface LocationResponse {
  content: LocationData[];
  totalPages: number;
  totalElements: number;
}

interface TableLocationData {
  locationName: string;
  contactNumber: string;
  email: string;
  groupNPI: string;
  fax: string;
  address: string;
  status: string;
  uuid: string;
  action: Array<{ label: string; route: string }>;
}

const Location = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [pageDisplaySize, setPageDisplaySize] = useState("10");
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [, setTotalElements] = useState<number>(0);

  const [locationDataTable, setLocationDataTable] = useState<
    TableLocationData[] | undefined
  >(undefined);

  const [selectedLocation, setSelectedLocation] =
    useState<TableLocationData | null>(null);

  const { data: getAllLocationDetailData, status: getAllLocationStatus } =
    useSelector((state: RootState) => state.GetAllLocationDetailsReducer) as {
      data: LocationResponse | null;
      status: string;
    };

  const [drawerOpenType, setDrawerOpenType] = useState<ViewMode>();
  const [openAddLocationDrawer, setOpenAddLocationDrawer] = useState(false);

  // Handle loader based on get all location details API status
  useEffect(() => {
    switch (getAllLocationStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        break;
    }
  }, [getAllLocationStatus, dispatch]);

  const handlePagechange = (value: number) => {
    const newPage = value - 1;
    setPage(newPage);
    dispatch(
      getAllLocationDetails({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: newPage,
        searchString: "",
      } as LocationPayload)
    );
  };

  const handlePageSizeChange = (size: number) => {
    const newSize = size.toString();
    setPageDisplaySize(newSize);
    setPage(0);
    dispatch(
      getAllLocationDetails({
        xTenant: "default",
        size: size,
        page: 0,
        searchString: "",
      } as LocationPayload)
    );
  };

  const handleOpenDrawer = (rowData: TableLocationData, type: ViewMode) => {
    setDrawerOpenType(type);
    setSelectedLocation(rowData);
    setOpenAddLocationDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenAddLocationDrawer(false);
    setSelectedLocation(null);
  };

  const handleSwitch = async (flag: boolean, uuid: string) => {
    try {
      await dispatch(editLocationStatus({ locationId: uuid, flag })).unwrap();
      dispatch(
        getAllLocationDetails({
          xTenant: "default",
          size: parseInt(pageDisplaySize),
          page: page,
          searchString: "",
        } as LocationPayload)
      );
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: "success",
          message: `Location status ${flag ? "activated" : "deactivated"} successfully`,
        })
      );
    } catch (error) {
      console.error("Failed to update location status:", error);
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: "error",
          message: "Failed to update location status",
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      getAllLocationDetails({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: page,
        searchString: "",
      } as LocationPayload)
    );
  }, [dispatch, pageDisplaySize, page]);

  useEffect(() => {
    if (getAllLocationDetailData) {
      const {
        content,
        totalPages: total,
        totalElements: elements,
      } = getAllLocationDetailData;
      setTotalPages(total);
      setTotalElements(elements);

      const modifiedLocationData = content.map((location: LocationData) => {
        const address = location?.address;
        const addressStr = address
          ? `${address.line1}${address.line2 ? `, ${address.line2}` : ""}, ${address.city}, ${address.state}, ${address.zipcode}`
          : "No address available";

        return {
          locationName: location?.locationName,
          contactNumber: location?.contactNumber,
          email: location?.emailId,
          groupNPI: location?.groupNpiNumber,
          fax: location?.fax || "",
          address: addressStr,
          status: location?.status,
          uuid: location?.uuid,
          action: [
            { label: "Edit", route: "" },
            { label: "Delete", route: "" },
          ],
        };
      });
      setLocationDataTable(modifiedLocationData);
    }
  }, [getAllLocationDetailData]);

  return (
    <Grid>
      <Grid>
        <CustomisedTable
          headCells={locationTableHeaders}
          tableData={locationDataTable}
          showCPTAndICDPagination
          setPage={handlePagechange}
          pageSize={totalPages}
          setPageDisplaySize={handlePageSizeChange}
          pageDisplaySize={pageDisplaySize}
          page={page + 1}
          setHeight="65vh"
          handleOpenDrawer={(e) => handleOpenDrawer(e, ViewMode.EDIT)}
          handleSwitch={handleSwitch}
        />
      </Grid>

      <DrawerBS
        anchor={"right"}
        open={openAddLocationDrawer}
        onClose={handleCloseDrawer}
        title={
          drawerOpenType === ViewMode.EDIT ? "Edit Location" : "Add Location"
        }
      >
        <AddLocationDialog
          handleClose={handleCloseDrawer}
          isEdit={drawerOpenType === ViewMode.EDIT}
          selectedLocation={selectedLocation}
        />
      </DrawerBS>
    </Grid>
  );
};

export default Location;
