// import React from 'react';
// import {
//   Grid,
//   IconButton,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import { Controller, useForm } from 'react-hook-form';
// import DeleteIcon from '@mui/icons-material/Delete';

// const FieldError = ({ error }) => (
//   <Typography variant="body2" color="error">
//     {error || ''}
//   </Typography>
// );

// const RuleInputField = ({ field, fieldState, label, disabled }) => (
//   <>
//     <TextField
//       {...field}
//       label={label}
//       variant="outlined"
//       fullWidth
//       disabled={disabled}
//     />
//     {fieldState?.invalid && <FieldError error={fieldState.error?.message} />}
//   </>
// );

// const RuleInputs = ({
//   fields,
//   remove,
//   control,
//   commonErrorMessage,
//   userType,
 
// }) => {
//     const {watch} =useForm()
//   return (
//     <Grid item xs={12}>
//       <Typography variant="h6" gutterBottom>
//         Rules
//       </Typography>
//       {fields.map((field, index) => (
//         <Grid container spacing={1} key={field.id}>
//           <Grid item xs={2}>
//             <Controller
//               name={`rules.${index}.isAdmin`}
//               control={control}
//               defaultValue={field.isAdmin}
//               render={({ field }) => (
//                 <Select {...field} variant="outlined">
//                   <MenuItem value="admin">Admin</MenuItem>
//                   <MenuItem value="non-admin">Non Admin</MenuItem>
//                 </Select>
//               )}
//             />
//           </Grid>
//           <Grid item xs={5}>
//             <Controller
//               name={`rules.${index}.name`}
//               control={control}
//               defaultValue={field.name}
//               rules={{ required: 'Name is required' , disabled: watch("rules[index].isAdmin") !== "Admin",}}
//               render={({ field, fieldState }) => (
//                 <RuleInputField
//                   field={field}
//                   fieldState={fieldState}
//                   label="Name"
                  
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={5}>
//             <Controller
//               name={`rules.${index}.description`}
//               control={control}
//               defaultValue={field.description}
//               rules={{ required: 'Description is required', disabled: watch("field") === "Non-Admin" }}
//               render={({ field, fieldState }) => (
//                 <RuleInputField
//                   field={field}
//                   fieldState={fieldState}
//                   label="Description"
//                 //   disabled={field.value === 'non-admin'}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={2}>
//             <IconButton onClick={() => remove(index)} color="secondary">
//               <DeleteIcon />
//             </IconButton>
//           </Grid>
//         </Grid>
//       ))}
//       {fields.length === 0 && (
//         <Typography color="error">{commonErrorMessage}</Typography>
//       )}
//     </Grid>
//   );
// };

// export default RuleInputs;
 






// // import React from "react";

// // import {
// //   Grid,
// //   IconButton,
// //   Typography,
// //   TextField,
// //   Select,
// //   MenuItem,
// // } from "@mui/material";

// // import { Controller, Control } from "react-hook-form";

// // import DeleteIcon from "@mui/icons-material/Delete";

// // interface RuleInputsProps {
// //   fields: {
// //     id: string,

// //     name: string,

// //     description: string,

// //     isAdmin: boolean,
// //   }[];

// //   remove: (index: number) => void;

// //   control: Control<any>;

// //   commonErrorMessage: string;

// //   userType: "admin" | "non-admin";
// // }

// // const FieldError: React.FC<{ error?: string }> = ({ error }) => (
// //   <Typography variant="body2" color="error">
// //     {error || ""}
// //   </Typography>
// // );

// // const RuleInputField: React.FC<{
// //   field: any,

// //   fieldState: any,

// //   label: string,

// //   disabled: boolean,
// // }> = ({ field, fieldState, label, disabled }) => (
// //   <>
// //     <TextField
// //       {...field}
// //       label={label}
// //       variant="outlined"
// //       fullWidth
// //       disabled={disabled}
// //     />

// //     {fieldState?.invalid && <FieldError error={fieldState.error?.message} />}
// //   </>
// // );

// // const RuleInputs: React.FC<RuleInputsProps> = ({
// //   fields,

// //   remove,

// //   control,

// //   commonErrorMessage,

// //   userType,
// // }) => {
// //   return (
// //     <Grid item xs={12}>
// //       <Typography variant="h6" gutterBottom>
// //         Rules
// //       </Typography>

// //       {fields.map((field, index) => (
// //         <Grid container spacing={1} key={field.id}>
// //           <Grid item xs={2}>
// //             <Controller
// //               name={`rules.${index}.isAdmin`}
// //               control={control}
// //               defaultValue={field.isAdmin}
// //               render={({ field }) => (
// //                 <Select {...field} variant="outlined">
// //                   <MenuItem value="admin">Admin</MenuItem>

// //                   <MenuItem value="non-admin">Non Admin</MenuItem>
// //                 </Select>
// //               )}
// //             />
// //           </Grid>

// //           <Grid item xs={5}>
// //             <Controller
// //               name={`rules.${index}.name`}
// //               control={control}
// //               defaultValue={field.name}
// //               rules={{ required: "Name is required" }}
// //               render={({ field, fieldState }) => (
// //                 <RuleInputField
// //                   field={field}
// //                   fieldState={fieldState}
// //                   label="Name"
// //                   disabled={field.value === "non-admin"}
// //                 />
// //               )}
// //             />
// //           </Grid>

// //           <Grid item xs={5}>
// //             <Controller
// //               name={`rules.${index}.description`}
// //               control={control}
// //               defaultValue={field.description}
// //               rules={{ required: "Description is required" }}
// //               render={({ field, fieldState }) => (
// //                 <RuleInputField
// //                   field={field}
// //                   fieldState={fieldState}
// //                   label="Description"
// //                   disabled={field.value === "non-admin"}
// //                 />
// //               )}
// //             />
// //           </Grid>

// //           <Grid item xs={2}>
// //             <IconButton onClick={() => remove(index)} color="secondary">
// //               <DeleteIcon />
// //             </IconButton>
// //           </Grid>
// //         </Grid>
// //       ))}

// //       {fields.length === 0 && (
// //         <Typography color="error">{commonErrorMessage}</Typography>
// //       )}
// //     </Grid>
// //   );
// // };

// // export default RuleInputs;
