import { Box } from "@mui/material";
import { useState } from "react";
import CustomisedTable from "../../../../../common-components/table/table";
import { rolesTableHeaders } from "../../../../../common-components/headers/all-headers";
import { rolesMockData } from "../../../../../common-components/mock-data/all-mock-data";

const Roles = () => {
  const [tableData] = useState(
    rolesMockData.map((row) => ({
      ...row,
      style: {
        "& td": {
          padding: "9px 16px",
        },
        ...(Object.keys(row).length === 1 && {
          backgroundColor: "#F4F4F4",
          "& td": {
            fontWeight: 500,
            padding: "9px 16px",
          },
          "& td:not(:first-of-type)": {
            visibility: "hidden",
            backgroundColor: "blue",
          },
        }),
      },
    }))
  );

  return (
    <Box sx={{ width: "100%" }}>
      <CustomisedTable
        headCells={rolesTableHeaders}
        tableData={tableData}
        setHeight="75vh"
        removeRadius={false}
        showCPTAndICDPagination
      />
    </Box>
  );
};

export default Roles;
