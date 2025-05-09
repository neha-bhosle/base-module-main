import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import {
  locationTableHeaders
} from "../../../../../common-components/headers/all-headers";
import { locationTableData } from "../../../../../common-components/mock-data/all-mock-data";
import CustomisedTable from "../../../../../common-components/table/table";

const Location = () => {
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

  useEffect(() => {
    setLocationDataTable(locationTableData);
  }, []);

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
