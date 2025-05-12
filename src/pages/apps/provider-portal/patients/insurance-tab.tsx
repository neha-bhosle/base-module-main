// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   Box,
//   FormControlLabel,
//   Grid,
//   Radio,
//   RadioGroup,
//   Typography,
// } from "@mui/material";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { AddPatientInsuranceSchema } from "./add-patients-schema";
// import { InsuranceForm } from "./insurance-form";

// export interface FormData {
//   paymentMethod: string;
//   insuranceName?: string;
//   memberId?: string;
//   groupId?: string;
//   patientRelationship?: string;
//   firstName?: string;
//   lastName?: string;
//   dateOfBirth?: string;
// }

// const InsuranceTab = () => {
//   const [showSecondaryInsurance, setShowSecondaryInsurance] = useState(false);
//   const [, setUploadedFrontFiles] = useState<FilesMetaData[]>([]);

//   const {
//     control,
//     watch,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<FormData>({
//     defaultValues: {
//       paymentMethod: "",      insuranceName: "",
//       memberId: "",
//       groupId: "",
//       patientRelationship: "",
//       firstName: "",
//       lastName: "",
//       dateOfBirth: "",
//     } as FormData,
//     resolver: yupResolver<FormData>(AddPatientInsuranceSchema),
//   });

//   const paymentMethod = watch("paymentMethod");

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   return (
    
//   );
// };

// export default InsuranceTab;
