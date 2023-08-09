
import {
  Button,
  
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";



const FieldArray = () => {
    
  const {
    register,
    control,
    handleSubmit,
    // reset,
    // trigger,
    // setError,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  // const [category,setCategory] = useState("")
  const handleClick = (data) => console.log(data);

  const handleChange = (event) => console.log(event.target.value);

  return (
    <Stack style={{ justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit(handleClick)}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <InputLabel id="demo-simple-select-label">User Data</InputLabel>
              <TextField
                {...register(`test.${index}.firstName`, {
                  required: "Firstname is required",
                })}
                style={{ marginRight: "10px" }}
              />

              {errors.test && errors.test[index] && (
                <p>{errors.test[index].firstName?.message}</p>
              )}

              <Controller
                render={({ field }) => <TextField {...field} />}
                name={`test.${index}.lastName`}
                control={control}
                rules={{
                  required: true,
                }}
              />

              {errors.test && errors.test[index] && <p>Lastname is required</p>}

              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="brand"
                onChange={handleSubmit(handleChange)}
                {...register("select", { required: "please select any brand" })}
                fullWidth
              >
                <MenuItem value={"Apple"}>Apple</MenuItem>
                <MenuItem value={"Samsung"}>Samsung</MenuItem>
                <MenuItem value={"Realme"}>Realme</MenuItem>
              </Select>
              {errors.select && <p>{errors?.select?.message}</p>}

              <InputLabel id="demo-simple-select-label">
                Brand Category || Apple
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="brand"
                onChange={handleSubmit(handleChange)}
                {...register("selectcategoryapple", {
                  disabled: watch("select") !== "Apple",
                  required: "please select  brand category : Apple",
                })}
                fullWidth
                // disabled
              >
                <MenuItem value={"Tablet"}>Tablet</MenuItem>
                <MenuItem value={"Laptop"}>Laptop</MenuItem>
                <MenuItem value={"Phone"}>Phone</MenuItem>
              </Select>
              {errors.selectcategoryapple && (
                <p>{errors.selectcategoryapple.message}</p>
              )}

              <InputLabel id="demo-simple-select-label">
                Brand Category || Samsung
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="brand"
                onChange={handleSubmit(handleChange)}
                {...register("selectcategorySamsung", {
                  required: "please select  brand category :Samsung",
                  disabled: watch("select") !== "Samsung",
                })}
                fullWidth
              >
                <MenuItem value={"Tablet"}>Tablet</MenuItem>
                <MenuItem value={"Laptop"}>Laptop</MenuItem>
                <MenuItem value={"Phone"}>Phone</MenuItem>
              </Select>
              {errors.selectcategorySamsung && (
                <p>{errors.selectcategorySamsung.message}</p>
              )}
              <InputLabel id="demo-simple-select-label">
                Brand Category || Realme
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="brand"
                onChange={handleSubmit(handleChange)}
                {...register("selectcategoryRealme", {
                  required: "please select  brand category : Realme",
                  disabled: watch("select") !== "Realme",
                })}
                fullWidth
              >
                <MenuItem value={"Tablet"}>Tablet</MenuItem>
                <MenuItem value={"Laptop"}>Laptop</MenuItem>
                <MenuItem value={"Phone"}>Phone</MenuItem>
              </Select>
              {errors.selectcategoryRealme && (
                <p>{errors.selectcategoryRealme.message}</p>
              )}

              
             

              <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ marginLeft: "10px", marginTop: "10px" }}
                onClick={() => remove(index)}
                fullWidth
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          onClick={() => append({ firstName: "", lastName: "" })}
        >
          append
        </Button>

        <Button type="Submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Stack>
  );
};
export default FieldArray;
