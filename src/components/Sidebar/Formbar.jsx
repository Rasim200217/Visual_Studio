import React from "react";

import emailjs from "@emailjs/browser";

import { useLocalStorage } from "@mantine/hooks";

import dayjs, { Dayjs } from "dayjs";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Formbar = () => {
  const form = React.useRef();

  const [store, setStore] = useLocalStorage({ key: "sendLimitCall" });
  const [open, setOpen] = React.useState(false);
  const [isSended, setIsSended] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsSended(false);
  };

  const sendEmail = (e) => {
    const selfDate = dayjs(new Date());
    e.preventDefault();

    if (store) {
      const limitDate = dayjs(store);
      if (selfDate.unix() < limitDate.unix()) {
        alert("Заявка уже была отправлена с вами свяжутся!");
        return;
      }
    }

    emailjs
      .sendForm(
        "service_y5zsmtd",
        "template_mu3vi5r",
        form.current,
        "2LYjaZFjwwsDLOiI8"
      )
      .then(
        (result) => {
          setIsSended(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setStore(selfDate.add(6, "hour").format("YYYY-MM-DD HH:mm:ss"));
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="text-center mt-8">
        <a href="tel:+998903333366">
          <div className=" cursor-pointer hover:text-yellow-300 btn-hover">
            <p className="font-medium text-base"> +998 (90) 333-33-66</p>
          </div>
        </a>
        <button
          className="mt-6 font-bold hover:text-yellow-300 btn-hover border-b hover:border-none"
          onClick={handleOpen}
        >
          Обратный звонок
        </button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="formModal w-full sm:w-fit mx-auto">
            <h3 className=" text-white font-bold uppercase text-lg text-center">
              Заказать обратный звонок
            </h3>
            <div className="flex mt-3">
              <form className="form" onSubmit={sendEmail} ref={form}>
                <input
                  autoComplete="off"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="ФИО"
                  name="to_name"
                />
                <input
                  autoComplete="off"
                  name="user_name"
                  type="tel"
                  placeholder="Номер телефона"
                />
                <textarea
                  placeholder="Ваш комментарий"
                  className=" text-black rounded-lg w-[320px] m-[10px] p-2"
                  name="user_comment"
                ></textarea>
                <button
                  className=" mt-4 cursor-pointer font-bold btnWhite px-6 py-3 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black"
                  type="submit"
                >
                  Отправить
                </button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Formbar;
