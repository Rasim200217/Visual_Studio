import React, { useState } from "react";

import useLocalStorage from "use-local-storage";

import dayjs, { Dayjs } from "dayjs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";

import axios from "axios";

import "../scss/Form.scss";
import "dayjs/locale/ru";
import { BsCheck2Circle } from "react-icons/bs";

dayjs.locale("ru");

const TOKEN = "5457087899:AAGIm2j-clmvoh1FU7vnBYu839eVdMlWUJ0";
const CHAT_ID = "-1001785372965";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const Form = () => {
  const [isSended, setIsSended] = useState(false);
  const [store, setStore] = useLocalStorage<number | string>("sendLimit", "");

  const handleClose = () => setIsSended(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const selfDate = dayjs(new Date());
    const limitDate = dayjs(store);

    if (store) {
      if (selfDate.format() < limitDate.format()) {
        alert("Незя");
        return;
      }
    }

    let message = `&#128233 <b>Заявка с сайта!</b>\n`;
    message += `&#128590 Отправитель: <b>${data.Name}</b>\n`;
    message += `&#128222 Телефон: <b>${data.MobileNumber}</b>\n`;
    message += `&#9203 Дата бронирования:  <b>${data.date}, ${data.Time}</b>`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {})
      .catch((errors) => {
        console.log(errors);
      })
      .finally(() => {
        setIsSended(true);
      });

    setStore(selfDate.add(10, "second").unix("YYYY-MM-DD hh:mm:ss"));
    console.log(
      setStore(selfDate.add(10, "second").unix("YYYY-MM-DD hh:mm:ss"))
    );
    console.log(selfDate);

    alert("Yes");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          autoComplete="off"
          type="text"
          placeholder="ФИО"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <input
          autoComplete="off"
          type="tel"
          placeholder="Номер телефона"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 15,
          })}
        />
        <input
          type="date"
          placeholder="date"
          {...register("date", {})}
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          type="time"
          placeholder="Укажите время"
          {...register("Time", { required: true })}
        />
        {/* <LocalizationProvider
          dateAdapter={AdapterDayjs}
          className=" text-white sm:text-white"
        >
          <DateTimePicker
            className="w-80"
            renderInput={(props) => <TextField {...props} />}
            label="Выберите дату"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            type="datetime"
          />
        </LocalizationProvider> */}
        <button
          className=" mt-4 cursor-pointer font-bold btnWhite px-6 py-3 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black"
          type="submit"
        >
          Отправить
        </button>
      </form>

      <Modal
        open={isSended}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="formModal">
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
