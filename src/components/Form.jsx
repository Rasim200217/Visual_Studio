import React, { useState, useEffect } from "react";

import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { useForm } from "react-hook-form";

import axios from "axios";

import "../scss/Form.scss";
import "dayjs/locale/ru";

dayjs.locale("ru");

const TOKEN = "5457087899:AAGIm2j-clmvoh1FU7vnBYu839eVdMlWUJ0";
const CHAT_ID = "-1001785372965";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const Form = () => {
  const [value, setValue] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${data.Name}\n`;
    message += `<b>Телефон: </b> ${data.MobileNumber}\n`;
    message += `<b>Дата бронирования: </b> ${data}`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        data.Name = "";
        data.MobileNumber = "";
      })
      .catch((errors) => {
        console.log(errors);
      })
      .finally(() => {
        console.log("end");
      });
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
            maxLength: 12,
          })}
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
    </div>
  );
};
