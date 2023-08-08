// import {
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Stack,
//   TextField,
// } from "@mui/material";

// import { useForm } from "react-hook-form";

// const HookForms = () => {
//   const {
//     register,

//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <>
//       <Stack
//         style={{
//           justifyContent: "center",

//           alignItems: "center",

//           marginTop: "20px",
//         }}
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             id="outlined-basic"
//             label="FirstName"
//             variant="outlined"
//             {...register("firstName", {
//               required: true,
//               maxLength: 25,
//               minLength: 2,
//             })}
//             fullWidth
//             style={{ marginBottom: "20px" }}
//           />

//           {errors.firstName?.type === "required" && (
//             <p>First name is required</p>
//           )}

//           <TextField
//             id="outlined-basic"
//             label="LastName"
//             variant="outlined"
//             {...register("LastName", {
//               required: true,
//               maxLength: 15,
//               minLength: 2,
//             })}
//             fullWidth
//             style={{ marginBottom: "20px" }}
//           />

//           {errors.LastName?.type === "required" && <p>Last name is required</p>}

//           <TextField
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             {...register("Email")}
//             fullWidth
//             style={{ marginBottom: "20px" }}
//           />

//           {errors.Email?.type === "required" && <p>email is required</p>}

//           <TextField
//             id="outlined-basic"
//             label="PhoneNumber"
//             variant="outlined"
//             {...register("PhoneNumber", {
//               maxLength: 10,
//               required: true,
//               minLength: 10,
//             })}
//             fullWidth
//             style={{ marginBottom: "20px" }}
//           />

// {errors.PhoneNumber?.type === "required" && <p>phone number is required</p>}

// {errors.PhoneNumber?.type === "maxLength" && ( <small>The username should have at least 5 characters</small>)}

//           <FormLabel component="legend">Gender</FormLabel>

//           <RadioGroup aria-label="gender" name="gender1">
//             <FormControlLabel
//               control={<Radio />}
//               label="Female"
//               {...register("Female")}
//             />

//             <FormControlLabel
//               control={<Radio />}
//               label="Male"
//               {...register("Male")}
//             />

//             <FormControlLabel
//               control={<Radio />}
//               label="Other"
//               {...register("Other")}
//             />
//           </RadioGroup>

//           <input type="submit" />
//         </form>
//       </Stack>
//     </>
//   );
// };

// export default HookForms;

import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Button,
  FormGroup,
  Checkbox,
  FormControl,
  Snackbar,
  IconButton,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import "../../App.css";
import { useState } from "react";
// import Typography from "@mui/material";
const HookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const onSubmit = (data) => (
    setFName(data.firstName),
    setLName(data.lastName),
    setEmail(data.email),
    setPhone(data.phoneNumber),
    setFile(data.file)
  );

  const handleClick = (value) => {
    setOpen(true);
    console.log(value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Stack
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            {...register("firstName", { required: true, maxLength: 10 })}
            fullWidth
            style={{ marginBottom: "20px" }}
          />

          {errors.firstName && <p>Please check the First Name</p>}

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            {...register("lastName", {
              required: true,
              minLength: 2,
            })}
            fullWidth
            style={{ marginBottom: "20px" }}
          />

          {errors.lastName && <p>Last name is required</p>}

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                message: "Invalid email address",
              },
            })}
            fullWidth
            style={{ marginBottom: "20px" }}
          />

          {errors.email && <p>{errors.email.message}</p>}

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            {...register("phoneNumber", {
              required: "Phone number is required",

              minLength: {
                value: 10,
                message: "Phone number must be at least 10 characters",
              },

              maxLength: {
                value: 10,
                message: "Phone number cannot exceed 10 characters",
              },
            })}
            fullWidth
            style={{ marginBottom: "20px" }}
          />

          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Please submit your consent"
              {...register("checkbox", { required: true })}
            />
            {errors.checkbox && (
              <p>Please check this box if you want to proceed</p>
            )}
            {/* <FormControlLabel
              required
              control={<Checkbox />}
              label="Required"
            />
             */}
          </FormGroup>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            
          </FormControl>

          <TextField
            name="upload-photo"
            type="file"
            {...register("file", { required: "This is required.", max: 5 })}
          />
          {errors.file && <p>Please upload documents</p>}

          {/* <ErrorMessage
            errors={errors}
            name="file"
            render={({ message }) => <p className="redColor">{message}</p>}
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
        <Stack>
          <h2>{fname}</h2>
          <h2>{lname}</h2>
          <h2>{email}</h2>
          <h2>{phone}</h2>
          <CardMedia
        component="img"
        alt="not found"
        // height="140"
        image={file}
      />
          <div>
            <Button onClick={handleSubmit(handleClick)}>Submit Data</Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Data Save Successfully"
              action={action}
              color="secondary"
            />
          </div>
        </Stack>
      </Stack>
    </>
  );
};

export default HookForms;
