// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
//u can use any because data can be in any format

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Avatar,
  Box,
  Checkbox,
  Grid,
  Pagination,
  PaginationItem,
  Switch,
  TableBody,
  Tooltip,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ViewMode } from "src/models/apiStatus";
// import {
//   getBackgroundByType,
//   getColorByType,
//   statusLabels,
// } from "src/models/chip";
// import { PaginationOptions } from "src/models/pagination-options";
import { AppointmentSettingType } from "src/models/providerGroup";
import { commonComponentConstant } from "../../constants/common-component";
import ActionButton from "../action-button/action-button";
import Chip from "../chip/chip";
import { chipStyle } from "../chip/widgets/chipStyles";
import CustomSelect from "../custom-select/customSelect";
import {
  backArrow,
  fordwardArrow,
  paginationButton,
  tableBodyStyles,
  tableBorder,
  tableHeadStyles,
} from "./widgets/tablestyles";
import { PaginationOptions } from "src/models/pagination-options";

interface EnhancedTableProps {
  rowCount: number;
  headCells: unknown[];
}

interface CustomisedTableProps {
  headCells: unknown[];
  page?: number;
  tableData: unknown;
  noRecordsMsg?: string;
  pageSize?: number;
  setPage?: (value: number) => void;
  selectedCheckBoxVal?: string[];
  showPagination?: boolean;
  showCPTAndICDPagination?: boolean;
  config?: { showAll: boolean; elementNumber: number };
  handleOpenDrawer?: (rowData: any) => void;
  handleCheckBoxSelect?: (uuid: string) => void;
  handleView?: (rowData: any) => void;
  handleViewClinicalNotes?: (rowData: any) => void;
  handleCompleteConsent?: (rowData: any) => void;
  handleCompleteDocument?: (rowData: any) => void;
  handleDelete?: (rowData: any, type: ViewMode) => void;
  handleNavigate?: (rowData: any) => void;
  handleReschedule?: (rowData: any) => void;
  handleCancel?: (rowData: any) => void;
  handleCheckIn?: (rowData: any) => void;
  rowClick?: boolean;
  handleOpenIntake?: (rowData: any) => void;
  handleVirtualConsultationNavigate?: (rowData: any) => void;
  handleNoShow?: (rowData: any) => void;
  handleOpenInvite?: (rowData: any) => void;
  handleOpenReviewer?: (rowData: any) => void;
  handleSendPaymentLink?: (rowData: any) => void;
  handleApptUpdate?: (rowData: any) => void;
  removeRadius?: boolean;
  setPageDisplaySize?: (page: number) => void;
  handleSwitch?: (val: boolean, uuid: string) => void;
  handleEditAppointmentType?: (rowData: AppointmentSettingType) => void;
  handleEditService?: (rowData: any) => void;
  setHeight?: string;
  pageDisplaySize?: number | string;
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { headCells } = props;

  return (
    <TableHead>
      <TableRow
        sx={{
          background: "#E9E9E9",
        }}
      >
        {headCells &&
          headCells?.map((headCell) => (
            <TableCell
              padding={headCell?.disablePadding ? "none" : "normal"}
              sx={{
                ...tableHeadStyles,
                padding: headCell?.paddingDashboard ? "8px 16px" : "10px 18px",
                textTransform: "none",
                position: "sticky",
                top: 0,
                zIndex: 1,
                background: "#E9E9E9",
              }}
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
            >
              <Typography variant="bodyMedium4"> {headCell.label}</Typography>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};

function CustomisedTable(props: CustomisedTableProps) {
  const {
    headCells,
    noRecordsMsg,
    tableData,
    pageSize,
    setPage,
    showPagination,
    showCPTAndICDPagination,
    handleOpenDrawer,
    handleViewClinicalNotes,
    handleView,
    handleDelete,
    handleNavigate,
    handleReschedule,
    handleCancel,
    handleCheckIn,
    handleVirtualConsultationNavigate,
    handleNoShow,
    removeRadius,
    handleSwitch,
    selectedCheckBoxVal,
    handleCheckBoxSelect,
    handleEditAppointmentType,
    handleEditService,
    setPageDisplaySize,
    setHeight,
    pageDisplaySize,
    page,
  } = props;
  const { NO_RECORDS_FOUND, NEXT, PREV } = commonComponentConstant;

  const handleChange = (event: object, value: number) => {
    setPage && setPage(value || 0);
  };

  const handleItemSelection = (
    selectedItem: {
      label: ViewMode;
      route: string;
      disabled?: boolean;
    },
    rowData: any
  ) => {
    if (
      selectedItem.label === ViewMode.EDIT ||
      selectedItem.label === ViewMode.OPEN_CHART
    ) {
      const selectedRow = rowData;
      if (selectedRow && handleOpenDrawer) {
        handleOpenDrawer(selectedRow);
      }
    } else if (selectedItem.label === ViewMode.VIEW) {
      const selectedRow = rowData;
      if (selectedRow && handleView) {
        handleView(selectedRow);
      }
    } else if (
      selectedItem.label === ViewMode.DELETE ||
      selectedItem.label === ViewMode.RESTORE
    ) {
      const selectedRow = rowData;
      if (selectedRow && handleDelete) {
        handleDelete(selectedRow, selectedItem.label);
      }
    } else if (selectedItem.label === ViewMode.RESCHEDULE) {
      handleReschedule && handleReschedule(rowData);
    } else if (selectedItem.label === ViewMode.CANCEL) {
      handleCancel && handleCancel(rowData);
    } else if (
      selectedItem.label === ViewMode.CONNECT_TO_VIDEO ||
      selectedItem.label === ViewMode.VIEW_NOTE
    ) {
      handleCheckIn && handleCheckIn(rowData);
    } else if (selectedItem.label === ViewMode.NO_SHOW) {
      handleNoShow && handleNoShow(rowData);
    } else if (
      selectedItem.label === ViewMode.CLOSER_NOTE ||
      selectedItem.label === ViewMode.CONSULT_NOTE
    ) {
      handleVirtualConsultationNavigate &&
        handleVirtualConsultationNavigate(rowData);
    } else if (selectedItem.label === "Edit Visit Type") {
      handleEditAppointmentType(rowData);
    } else if (selectedItem.label === "Edit Service") {
      handleEditService(rowData);
    } else if (
      selectedItem.label === ViewMode.VIEW_CLOSER_NOTE ||
      selectedItem.label === ViewMode.VIEW_CONSULT_NOTE
    ) {
      handleViewClinicalNotes && handleViewClinicalNotes(rowData);
    }
  };

  const handleRowClick = (index: any) => {
    if (handleNavigate) {
      handleNavigate(tableData[index]);
    }
  };

  const handleSwitchChange = (val: boolean, uuid: string) => {
    if (handleSwitch) {
      handleSwitch(!val, uuid);
    } else {
      console.error("handleSwitch is undefined");
    }
  };

  return (
    <Box width={"100%"}>
      <TableContainer
        sx={{
          ...tableBorder,
          borderRadius: !removeRadius ? "var(--1, 8px)" : "none",
          maxHeight: setHeight,
          overflowY: "scroll",
        }}
      >
        <Table sx={{ minWidth: "100%" }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            rowCount={tableData?.length ?? 0}
            headCells={headCells}
          />
          <TableBody>
            {tableData?.length > 0 &&
              tableData?.map((row: unknown, index: number) => {
                return (
                  <TableRow
                    onClick={() => handleRowClick(index)}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    sx={{
                      opacity: row.archive ? "50%" : "100%",
                      background: "white",
                    }}
                  >
                    {headCells.map((cell: unknown, index: number) =>
                      cell.type === "action" ? (
                        <TableCell
                          sx={tableBodyStyles}
                          align="right"
                          key={index}
                        >
                          <ActionButton
                            list={row[cell.id]}
                            onItemSelected={(item) =>
                              handleItemSelection(item, row)
                            }
                          />
                        </TableCell>
                      ) : cell.type === "radio" ? (
                        <TableCell sx={tableBodyStyles} key={index}>
                          <Switch
                            checked={row[cell.id]}
                            onChange={() =>
                              handleSwitchChange(row[cell.id], row?.uuid)
                            }
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        </TableCell>
                      ) : cell.type === "chip" ? (
                        <TableCell sx={tableBodyStyles} key={index}>
                          {row[cell.id] === "CANCELLED" ? (
                            <Tooltip title={row["cancelReason"]}>
                              <Box
                                sx={{
                                  ...chipStyle,
                                  background: getBackgroundByType(row[cell.id]),
                                  cursor: "pointer",
                                }}
                                color={getColorByType(row[cell.id])}
                              >
                                <Typography variant="bodyRegular4">
                                  {statusLabels[row[cell.id]]}
                                </Typography>
                              </Box>
                            </Tooltip>
                          ) : (
                            <Chip type={row[cell.id]} />
                          )}
                        </TableCell>
                      ) : cell.type === "avatar" ? (
                        <TableCell sx={tableBodyStyles} key={index}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Avatar
                              src={row.avatar}
                              sx={{ width: "35px", height: "35px" }}
                            />
                            <Typography
                              sx={{
                                ...tableBodyStyles,
                                color: "rgb(72, 108, 177)",
                                cursor: "pointer",
                              }}
                              onClick={() => handleView(row)}
                            >
                              {row[cell.id]}
                            </Typography>
                          </Box>
                        </TableCell>
                      ) : cell.type === "link" ? (
                        <TableCell sx={tableBodyStyles} key={index}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <a href={row[cell.id]} target="_blank">
                              {row[cell.id]}
                            </a>
                          </Box>
                        </TableCell>
                      ) : cell.type === "checkbox" ? (
                        <TableCell sx={tableBodyStyles} key={index}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Checkbox
                              checked={selectedCheckBoxVal?.includes(
                                row["uuid"]
                              )}
                              onClick={() =>
                                handleCheckBoxSelect(row["uuid"] || "")
                              }
                              sx={{
                                "& .MuiSvgIcon-root": { fontSize: 20 },
                                padding: "0px",
                              }}
                            />
                            <Typography
                              sx={{
                                ...tableBodyStyles,
                                color: "rgb(72, 108, 177)",
                                cursor: "pointer",
                                padding: "8px 0px",
                              }}
                              onClick={() => handleView(row)}
                            >
                              {row[cell.id]}
                            </Typography>
                          </Box>
                        </TableCell>
                      ) : cell.id === "hospitalName" &&
                        row[cell.id]?.length > 9 ? (
                        <TableCell
                          sx={tableBodyStyles}
                          align="left"
                          key={index}
                        >
                          {`${row[cell.id]?.substring(0, 9)}...`}
                        </TableCell>
                      ) : cell.id === "visitNote" &&
                        row[cell.id]?.length > 36 ? (
                        <TableCell
                          sx={tableBodyStyles}
                          align="left"
                          key={index}
                        >
                          {`${row[cell.id]?.substring(0, 36)}...`}
                        </TableCell>
                      ) : cell.id === "location" &&
                        row[cell.id]?.length > 15 ? (
                        <TableCell
                          sx={tableBodyStyles}
                          align="left"
                          key={index}
                        >
                          {`${row[cell.id]?.substring(0, 15)}...`}
                        </TableCell>
                      ) : cell.id === "providerSignature" ? (
                        <TableCell
                          sx={{
                            ...tableBodyStyles,
                            color: "#145DA0",
                            textDecoration: "underline",
                          }}
                          align="left"
                          key={index}
                        >
                          {row[cell.id] || "-"}
                        </TableCell>
                      ) : cell.id === "checkIn" ? (
                        <TableCell
                          sx={{ ...tableBodyStyles, color: "#145DA0" }}
                          align="left"
                          key={index}
                        >
                          {row[cell.id]}
                        </TableCell>
                      ) : cell.type === "bullet" ? (
                        <TableCell
                          sx={{ ...tableBodyStyles }}
                          align="left"
                          key={index}
                        >
                          <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              marginBottom: "0",
                              paddingLeft: "20px",
                            }}
                          >
                            {row[cell.id].map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </TableCell>
                      ) : (
                        <TableCell
                          sx={tableBodyStyles}
                          align="left"
                          key={index}
                        >
                          {row[cell.id] || "-"}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {(tableData?.length === 0 || !tableData) && (
        <Box display={"flex"} justifyContent={"center"} padding={2}>
          <Typography variant="inputTitleSemiBold" sx={{ color: "#565656" }}>
            {noRecordsMsg || NO_RECORDS_FOUND}
          </Typography>
        </Box>
      )}
      {showPagination && (
        <Grid container justifyContent={"center"} mt={2}>
          <Pagination
            count={pageSize}
            shape="rounded"
            color="primary"
            sx={paginationButton}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                components={{
                  previous: () => (
                    <>
                      <ArrowBackIcon sx={backArrow} />
                      {PREV}
                    </>
                  ),
                  next: () => (
                    <>
                      {NEXT}
                      <ArrowForwardIcon sx={fordwardArrow} />
                    </>
                  ),
                }}
              />
            )}
            onChange={handleChange}
          />
        </Grid>
      )}
      {showCPTAndICDPagination && (
        <Grid container justifyContent="center" alignItems="center" mt={2}>
          <Grid item>
            <Pagination
              count={pageSize}
              page={page + 1}
              shape="rounded"
              color="primary"
              sx={paginationButton}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  components={{
                    previous: () => (
                      <>
                        <ArrowBackIcon sx={backArrow} />
                        {PREV}
                      </>
                    ),
                    next: () => (
                      <>
                        {NEXT}
                        <ArrowForwardIcon sx={fordwardArrow} />
                      </>
                    ),
                  }}
                />
              )}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" width="auto" ml={2}>
              <CustomSelect
                placeholder="Size"
                value={pageDisplaySize}
                items={PaginationOptions}
                onChange={(e) => setPageDisplaySize(e.target.value)}
              />
              <Typography
                sx={{ ...tableHeadStyles, ml: 1, whiteSpace: "nowrap" }}
              >
                {commonComponentConstant.PER_PAGE}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default CustomisedTable;
