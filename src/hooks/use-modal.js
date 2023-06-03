import * as React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Button from "../components/button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const useModal = (Component, objData, handleSubmit) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(objData);
  }, [objData]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (newData) => {
    setData(newData);
  };

  const modal = (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {Component && <Component data={data} onChange={handleChange} />}

        {handleSubmit && (
          <Button
            onClick={() => {
              handleSubmit(data);
              handleClose();
            }}
            isDisabled={!data?.isValid}
            label="Отправить"
          />
        )}
      </Box>
    </Modal>
  );
  return [modal, handleOpen];
};

export default useModal;
