import { Box } from "@mui/material";
import { useState } from "react";
import CustomisedTable from "../../../../../common-components/table/table";
import { contactTableHeaders } from "../../../../../common-components/headers/all-headers";
import { contactMockData } from "../../../../../common-components/mock-data/all-mock-data";

const Contact = () => {
  const [tableData] = useState(contactMockData);
  const [page, setPage] = useState(0);

  const handleAction = (
    selectedItem: { label: string; route: string },
    rowData: any
  ) => {
    console.log(`Action ${selectedItem.label} on ${rowData.name}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <CustomisedTable
          headCells={contactTableHeaders}
          tableData={tableData}
          page={page}
          pageSize={1}
          setPage={handlePageChange}
          handleDelete={handleAction}
          setHeight="auto"
          removeRadius={false}
          showCPTAndICDPagination
        />
      </Box>
    </>
  );
};

export default Contact;
