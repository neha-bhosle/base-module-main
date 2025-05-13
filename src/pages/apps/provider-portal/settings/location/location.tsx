import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { locationTableHeaders } from "../../../../../common-components/headers/all-headers";
import { locationTableData } from "../../../../../common-components/mock-data/all-mock-data";
import CustomisedTable from "../../../../../common-components/table/table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { getAllLocationDetails } from "../../../../../redux/auth/profile/get-location-details";
import type { AppDispatch } from "../../../../../redux/store";

const Location = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [locationDataTable, setLocationDataTable] = useState<
    | Array<{
        locationName: string;
        contactNumber: string;
        email: string;
        groupNPI: string;
        fax: string;
        address: string;
        status: string;
        action: Array<{ label: string; route: string }>;
      }>
    | undefined
  >(undefined);

  const {
    data: getAllLocationDetailData,
    status: getAllLocationDetailStatus,
    error: getAllLocationDetailError,
  }: any = useSelector(
    (state: RootState) => state.GetAllLocationDetailsReducer
  );

  console.log("getAllLocationDetailData", getAllLocationDetailData);

  useEffect(() => {
    // Fetch location details when component mounts
    dispatch(
      getAllLocationDetails({
        xTenant: "default",
        size: 10,
        page: 0,
        searchString: "",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (getAllLocationDetailData) {
      const modifiedLocationData = getAllLocationDetailData.content.map(
        (location: any) => {
          const address = location?.physicalAddress || location?.address;
          const addressStr = address
            ? `${address.line1}${address.line2 ? `, ${address.line2}` : ""}, ${address.city}, ${address.state}, ${address.zipcode}`
            : "No address available";

          return {
            locationName: location?.locationName || location?.name,
            contactNumber: location?.contactNumber || location?.phone,
            email: location?.emailId || location?.email,
            groupNPI: location?.groupNpiNumber || location?.npi,
            fax: location?.fax,
            address: addressStr,
            status: location?.active ? "active" : "inactive",
            action: [
              { label: "Edit", route: "edit" },
              { label: "Delete", route: "delete" },
            ],
          };
        }
      );
      setLocationDataTable(modifiedLocationData);
    } else {
      setLocationDataTable(locationTableData); // Fallback to mock data if API data is not available
    }
  }, [getAllLocationDetailData]);

  return (
    <Grid>
      <Grid>
        <CustomisedTable
          headCells={locationTableHeaders}
          tableData={locationDataTable}
          showCPTAndICDPagination
          setHeight="65vh"
        />
      </Grid>
    </Grid>
  );
};

export default Location;
