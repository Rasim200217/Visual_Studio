import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { BsCheck2Circle } from "react-icons/bs";

const RequestCall = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="formModal w-full sm:w-fit mx-auto">
          <div className="flex">
            <BsCheck2Circle size={30} className="text-center text-green-400" />
            <h2 className="font-medium sm:text-2xl text-white text-xl ml-3">
              Заявка отправлена успешно!
            </h2>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RequestCall;
