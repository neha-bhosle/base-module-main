import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CustomisedTable from "../../../../../../common-components/table/table";
import { staffTableHeaders } from "../../../../../../common-components/headers/all-headers";
import { staffMockData } from "../../../../../../common-components/mock-data/all-mock-data";

const Staff = () => {
  const [tableData, setTableData] = useState(staffMockData);
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
          headCells={staffTableHeaders}
          tableData={tableData}
          page={page}
          pageSize={10}
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

export default Staff;
