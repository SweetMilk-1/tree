import * as React from "react";

import TextField from "@mui/material/TextField";

import "./item-create-edit.css";
const ItemCreateEdit = ({ data, onChange }) => {
  const prevNameRef = React.useRef(data.name);

  const handleChange = (e) => {
    console.log(prevNameRef.current);
    console.log(e.target.value);
    onChange({
      ...data,
      name: e.target.value,
      isValid: prevNameRef.current !== e.target.value && e.target.value.length !== 0,
    });
  };

  return (
    <TextField
      className="text-field"
      value={data.name}
      id="standard-basic"
      label="Название"
      variant="standard"
      onChange={handleChange}
    />
  );
};

export default ItemCreateEdit;
