import {
  Button,
  FormControl,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";

export default function Multiple() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Data Saved Successfully || Name : ${firstName} ${lastName} Email : ${email} DOB :${number} ${message}`
    );
  };
  return (
    <>
      <FormControl>
        <Stack spacing={2} direction="row">
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="First Name"
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
            label="Last Name"
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
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Phone Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <TextareaAutosize
          minRows={3}
          type="message"
          variant="outlined"
          color="transparent"
          label="write here"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button color="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </>
  );
}
