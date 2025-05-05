import { Box } from "@mui/material";
import { useState } from "react";
import CustomisedTable from "../../../../../common-components/table/table";
import { rolesTableHeaders } from "../../../../../common-components/headers/all-headers";
import { rolesMockData } from "../../../../../common-components/mock-data/all-mock-data";

const Roles = () => {
  const [tableData] = useState(rolesMockData);

  return (
    <Box sx={{ width: "100%" }}>
      <CustomisedTable
        headCells={rolesTableHeaders}
        tableData={tableData}
        setHeight="auto"
        removeRadius={false}
      />
    </Box>
  );
};

export default Roles;
