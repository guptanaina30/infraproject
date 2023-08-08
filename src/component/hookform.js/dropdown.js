// import { InputLabel, MenuItem, Select, Stack } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";
// import React, { useState } from "react";

// const FieldArray = () => {
//   // ... (existing code)
//   const {
//     register,
//     control,
//     handleSubmit,

//     trigger,

//     formState: { errors },
//   } = useForm({
//     // defaultValues: {}; you can populate the fields by this attribute
//   });
//   const [selectedBrand, setSelectedBrand] = useState("");

//   const handleChange = (event) => {
//     setSelectedBrand(event.target.value);
//     trigger("select");
//   };
//   {
//     selectedBrand === "Apple" && (
//       <Controller
//         render={({ field, index }) => (
//           <Select {...field} label="Category" fullWidth>
//             <MenuItem value={"Tablet"}>Tablet</MenuItem>
//             <MenuItem value={"Phone"}>Phone</MenuItem>
//             <MenuItem value={"Laptop"}>Laptop</MenuItem>
//           </Select>
//         )}
//         name={`test.${index}.category`}
//         control={control}
//         rules={{
//           required: "Please select a category",
//         }}
//       />
//     );
//   }
//   {
//     errors.test && errors.test[index] && (
//       <p>{errors.test[index].category?.message}</p>
//     );
//   }

//   {
//     selectedBrand === "Apple" && {
//       required: "Please select a category",
//     };
//   }

//   return (
//     <Stack style={{ justifyContent: "center", alignItems: "center" }}>
//       <form onSubmit={handleSubmit(handleClick)}>
//         {/* ... (other fields) */}

//         <InputLabel id="demo-simple-select-label">Brand</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           label="Brand"
//           onChange={handleChange}
//           {...register("select", { required: "Please select a brand" })}
//           fullWidth
//         >
//           <MenuItem value={"Apple"}>Apple</MenuItem>
//           <MenuItem value={"Samsung"}>Samsung</MenuItem>
//           <MenuItem value={"Realme"}>Realme</MenuItem>
//         </Select>
//         {errors.select && <p>{errors.select.message}</p>}

//         {selectedBrand === "Apple" && (
//           <Controller
//             render={({ field }) => (
//               <Select {...field} label="Category" fullWidth>
//                 <MenuItem value={"Tablet"}>Tablet</MenuItem>
//                 <MenuItem value={"Phone"}>Phone</MenuItem>
//                 <MenuItem value={"Laptop"}>Laptop</MenuItem>
//               </Select>
//             )}
//             name={`test.${index}.category`}
//             control={control}
//             rules={{
//               required: "Please select a category",
//             }}
//           />
//         )}
//         {errors.test && errors.test[index] && (
//           <p>{errors.test[index].category?.message}</p>
//         )}

//         {/* ... (other fields and buttons) */}
//       </form>
//     </Stack>
//   );
// };

// export default FieldArray;
