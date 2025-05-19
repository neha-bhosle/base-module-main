import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomisedTable from "../../../../../common-components/table/table";
import { contactTableHeaders } from "../../../../../common-components/headers/all-headers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { getAllContacts } from "../../../../../redux/auth/profile/get-all-contacts-reducer";
import DrawerBS from "../../../../../common-components/drawer-bs/custom-drawer";
import AddContactsDialog from "./add-contacts-dialog";
import { ViewMode } from "../../../../../constants/formConst";
import { capitalizeFirstLetter } from "../../../../../common-components/utils/stringUtils";
import { ContactPayload } from "src/models/all-const";

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [pageDisplaySize, setPageDisplaySize] = useState("10");
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [, setTotalElements] = useState<number>(0);
  const [tableData, setTableData] = useState<
    | Array<{
        name: string;
        contacttype: string;
        email: string;
        address: string;
        contact: string;
        fax: string;
        originalContact: any;
        action: Array<{ label: string; route: string }>;
      }>
    | undefined
  >(undefined);

  const [openContactDrawer, setOpenContactDrawer] = useState(false);
  const [drawerOpenType, setDrawerOpenType] = useState<ViewMode>();
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const { data: getAllContactsData }: any = useSelector(
    (state: RootState) => state.GetAllContactsReducer
  );

  const handleCloseDrawer = () => {
    setOpenContactDrawer(false);
    setSelectedContact(null);
  };

  const handlePageChange = (value: number) => {
    const newPage = value - 1;
    setPage(newPage);
    dispatch(
      getAllContacts({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: newPage,
        searchString: "",
      } as ContactPayload)
    );
  };

  const handlePageSizeChange = (size: number) => {
    const newSize = size.toString();
    setPageDisplaySize(newSize);
    setPage(0);
    dispatch(
      getAllContacts({
        xTenant: "default",
        size: size,
        page: 0,
        searchString: "",
      } as ContactPayload)
    );
  };

  const handleOpenDrawer = (rowData: any, type: ViewMode) => {
    setDrawerOpenType(type);
    setSelectedContact(rowData);
    setOpenContactDrawer(true);
  };

  useEffect(() => {
    dispatch(
      getAllContacts({
        xTenant: "default",
        size: parseInt(pageDisplaySize),
        page: page,
        searchString: "",
      } as ContactPayload)
    );
  }, [dispatch]);

  useEffect(() => {
    if (getAllContactsData) {
      const {
        content,
        totalPages: total,
        totalElements: elements,
      } = getAllContactsData;
      setTotalPages(total);
      setTotalElements(elements);

      const modifiedContactsData = content?.map((contact: any) => {
        const address = contact?.address;
        const addressStr = address
          ? `${address.line1}${address.line2 ? `, ${address.line2}` : ""}, ${address.city}, ${address.state}, ${address.zipcode}`
          : "No address available";

        // Handle work location array
        const workLocation = Array.isArray(contact?.workLocation)
          ? contact.workLocation.join(", ")
          : contact?.workLocation || "";

        return {
          name: contact?.name,
          contacttype: capitalizeFirstLetter(contact?.contactType),
          email: contact?.emailId,
          address: addressStr,
          contact: contact?.contactNumber,
          fax: contact?.faxNumber,
          uuid: contact?.uuid,
          workLocation: workLocation,
          originalContact: contact,
          action: [
            { label: "Edit", route: "" },
            { label: "Delete", route: "" },
          ],
        };
      });
      setTableData(modifiedContactsData);
    }
  }, [getAllContactsData]);

  return (
    <>
      <Grid>
        <Box sx={{ width: "100%" }}>
          <CustomisedTable
            headCells={contactTableHeaders}
            tableData={tableData}
            showCPTAndICDPagination
            setPage={handlePageChange}
            pageSize={totalPages}
            setPageDisplaySize={handlePageSizeChange}
            pageDisplaySize={pageDisplaySize}
            page={page + 1}
            setHeight="65vh"
            handleOpenDrawer={(e) => handleOpenDrawer(e, ViewMode.EDIT)}
          />
        </Box>
        <DrawerBS
          anchor={"right"}
          open={openContactDrawer}
          onClose={handleCloseDrawer}
          title={
            drawerOpenType === ViewMode.EDIT ? "Edit Contact" : "Add Contact"
          }
        >
          <AddContactsDialog
            handleClose={handleCloseDrawer}
            isEdit={drawerOpenType === ViewMode.EDIT}
            selectedContact={selectedContact}
          />
        </DrawerBS>
      </Grid>
    </>
  );
};

export default Contact;
