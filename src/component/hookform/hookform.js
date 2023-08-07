import {
    Button,
    FormControl,
    Stack,
    TextField,
   
  } from "@mui/material";
  import { useState } from "react";
import { useForm } from "react-hook-form";
  
const HookFroms=()=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
  


    const {register,handleSubmit,watch,formState:{error}} = useForm()
  
    const handle = (e) => {
      e.preventDefault();
      alert(
        `Data Saved Successfully || Name : ${firstName} ${lastName} Email : ${email} DOB :${number} `
      );
    };
    return (
      <>
      <Stack style={{justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
        <FormControl >
          <Stack spacing={2} direction="row">
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              {...register("FirstName")}
              label="FirstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="LastName"
              {...register("LastName")}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
           {...register("Email")}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="PhoneNumber"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            {...register("PhoneNumber")}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
  
  
          <Button color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
        </Stack>
      </>
    );
  }
  export default HookFroms