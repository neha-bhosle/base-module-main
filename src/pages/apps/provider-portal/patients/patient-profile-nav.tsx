import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TranslateIcon from '@mui/icons-material/Translate';
import { Avatar, Box, Chip, Grid, IconButton, Paper, Typography } from '@mui/material';
import { PatientNavCardLabels } from '../../../../constants/formConst';

interface PatientData {
  clinician: string;
  contactNumber: string;
  dob: string;
  emailId: string;
  memberSince: string;
  mrn: string;
  patientName: string;
  paymentMethod: string;
  status: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  language: string;
  balance: string;
  lastVisit: string;
  alertNote: string;
  notes: string;
}

interface PatientProfileNavProps {
  patientData: PatientData;
}

const PatientProfileNav = ({ patientData }: PatientProfileNavProps) => (
  <Paper sx={{ borderRadius: 2, p: 2, borderBottomLeftRadius: "0" , borderBottomRightRadius: "0" }}>
    <Grid container alignItems="center" spacing={2}>
      {/* Profile Section */}
      <Grid item>
        <Avatar
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740"
          sx={{ width: "78px", height: "78px" }}
        />
      </Grid>
      <Grid item xs>
        <Box display="flex" alignItems="center" gap={"8px"}>
          <Typography variant="bodySemiBold3">{patientData.patientName}</Typography>
          <Chip label={patientData.gender} variant="outlined" sx={{ color: "#5925DC", backgroundColor: "#F4F3FF"}} size="small" />
        </Box>

        <Box display="flex" flexDirection="row" gap="24px" mt={1}  color="#595F63">
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <CalendarTodayIcon sx={{ width: "16px", height: "16px"}} />
              <Typography variant="bodyMedium5" >
                {patientData.dob} ({patientData.age})
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <TranslateIcon sx={{ width: "16px", height: "16px"}} />
              <Typography variant="bodyMedium5">
                {patientData.language}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <LocalPhoneOutlinedIcon sx={{ width: "16px", height: "16px",}} />
              <Typography variant="bodyMedium5">
                {patientData.phone}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <MailOutlineIcon sx={{ width: "16px", height: "16px",}} />
              <Typography variant="bodyMedium5">
                {patientData.emailId}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <LocationOnIcon sx={{ width: "16px", height: "16px",}} />
              <Typography variant="bodyMedium5">
                {patientData.address}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={"8px"}>
              <AttachMoneyIcon sx={{ width: "16px", height: "16px" }} />
              <Typography variant="bodyMedium5">
              {PatientNavCardLabels.PATIENT_BALANCE}: {patientData.balance}
              </Typography>
            </Box>
      </Box>
    </Box>
      </Grid>
      {/* Right Cards */}
      <Grid item>
        <Box display="flex" flexDirection="row" gap={2}>
          {/* Primary Clinician */}
          <Paper sx={{
            width: "140px",
            height: "82px",
            borderRadius: "4px",
            border: "1px solid #BDDAFF",
            padding: "8px",
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: '#f5f8ff',
          }}>
            <Box display="flex" flexDirection="column" >
              <Typography variant="bodyMedium6">{PatientNavCardLabels.PRIMARY_CLINICIAN}</Typography>
              <Typography variant="bodyRegular6" sx={{color:" #74797B"}}>{patientData.clinician}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" >
              <Typography variant="bodyMedium6">{PatientNavCardLabels.LAST_VISIT_DATE_AND_TIME}</Typography>
              <Typography variant="bodyRegular6" sx={{color:" #74797B"}}>{patientData.lastVisit}</Typography>
            </Box>    
          </Paper>
          {/* Alert Note */}
          <Paper sx={{
            width: "145px",
            height: "82px",
            borderRadius: "4px",
            border: "1px solid #FFB6BC",
            padding: "8px",
            paddingBottom: "16px",
            display: 'flex',
            flexDirection: 'column',
            gap:"1px",
            background: '#fff5f5',
          }}>
            <Typography variant="bodyMedium6" >{PatientNavCardLabels.ALERT_NOTE}</Typography>
            <Typography variant="bodyRegular6" sx={{ color:" #74797B"}}>{patientData.alertNote}</Typography>
          </Paper>
          {/* Notes */}
          <Paper sx={{
            width: "145px",
            height: "82px",
            borderRadius: "4px",
            border: "1px solid #FFE8B1",
            padding: "8px",
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: '#fffbe5',
            position: 'relative',
          }}>
            <Typography variant="bodyMedium6" >{PatientNavCardLabels.NOTES}</Typography>
            <Typography variant="bodyRegular6" sx={{ color:" #74797B"}}>{patientData.notes}</Typography>
            <IconButton size="small" sx={{ position: 'absolute', top: 4, right: 4 }}>
              <EditOutlinedIcon fontSize="small" sx={{width:"12px", height:"12px"}} />
            </IconButton>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

export default PatientProfileNav;