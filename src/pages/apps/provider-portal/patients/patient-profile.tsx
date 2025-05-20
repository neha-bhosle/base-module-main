import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import PatientProfileNav from './patient-profile-nav';
import PatientProfileOutlet from './patient-profile-outlet';

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
  email: string;
  balance: string;
  lastVisit: string;
  alertNote: string;
  notes: string;
}

const PatientProfile = () => {
  const { mrn } = useParams<{ mrn: string }>();
  
  // Mock data - replace this with actual API call to fetch patient data
  const patientData: PatientData = {
    clinician: "Theresa Webb",
    contactNumber: "(603) 555-0123",
    dob: "1/31/14",
    emailId: "tg03@example.com",
    memberSince: "6/21/19",
    mrn: mrn || "AS2456",
    patientName: "Robert Fox",
    paymentMethod: "Self Pay",
    status: "NEW",
    gender: "Male",
    age: "43yrs",
    phone: "(307) 555-0133",
    address: "8642 Yule Street, Arvada CO 80007",
    language: "English",
    email: "robertfox@example.com",
    balance: "$200",
    lastVisit: "2019-03-19, 12:35 PM",
    alertNote: "Carefully monitor the patient for chest pain and if increased then there will be...",
    notes: "Check your feet and wound area every day for any signs of...More"
  };

  return (
    <Box
    >
      <Grid>
        <PatientProfileNav patientData={patientData} />
        <PatientProfileOutlet />
      </Grid>
    </Box>
  );
};

export default PatientProfile;
