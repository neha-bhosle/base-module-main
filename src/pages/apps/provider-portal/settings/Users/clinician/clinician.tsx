import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CustomisedTable from "../../../../../../common-components/table/table";
import { clinicianTableHeaders } from "../../../../../../common-components/headers/all-headers";
import { clinicianMockData } from "../../../../../../common-components/mock-data/all-mock-data";

const Clinician = () => {
  const [tableData, setTableData] = useState(clinicianMockData);
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleAction = (id: string) => {
    setTableData(tableData.filter((item) => item.name !== id));
  };

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <CustomisedTable
          headCells={clinicianTableHeaders}
          tableData={tableData}
          page={page}
          setPage={handlePageChange}
          showCPTAndICDPagination
          handleDelete={handleAction}
          setHeight="auto"
          removeRadius={false}
        />
      </Box>
    </Grid>
  );
};

export default Clinician;
