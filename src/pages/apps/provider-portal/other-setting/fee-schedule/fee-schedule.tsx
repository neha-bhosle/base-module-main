import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { feeScheduleTableHeaders } from "../../../../../common-components/headers/all-headers";
import { feeScheduleMockData } from "../../../../../common-components/mock-data/all-mock-data";
import CustomisedTable from "../../../../../common-components/table/table";

const FeeSchedule = () => {
  const [tableData, setTableData] = useState(feeScheduleMockData);
  const [page, setPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleAction = (id: string) => {
    setTableData(tableData.filter((item) => item.procedureCode !== id));
  };

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>

        <CustomisedTable
          headCells={feeScheduleTableHeaders}
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

export default FeeSchedule;
