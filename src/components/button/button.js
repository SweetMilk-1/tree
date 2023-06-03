import React from "react";
import Button from "@mui/material/Button";

import "./button.css";

const CustomButton = ({ onClick, icon, isDisabled, label }) => {
  return (
    <div className="button">
      <Button
        variant="contained"
        size="small"
        onClick={onClick}
        disabled={isDisabled}
        className="button"
        startIcon={icon}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;
