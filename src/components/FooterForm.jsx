import React, { useState, useRef, useEffect } from "react";

import { useLocalStorage } from "@mantine/hooks";

import dayjs, { Dayjs } from "dayjs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";

import axios from "axios";

import "../scss/Form.scss";
import "dayjs/locale/ru";

import "../scss/FooterForm.scss";

dayjs.locale("ru");

const TOKEN = "5457087899:AAGIm2j-clmvoh1FU7vnBYu839eVdMlWUJ0";
const CHAT_ID = "-1001785372965";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const FooterForm = () => {
  const [isSended, setIsSended] = useState(false);
  const [store, setStore] = useLocalStorage({ key: "sendLimit" });
  const handleClose = () => setIsSended(false);

  useEffect(() => {
    const timeInput = document.getElementById("time");

    timeInput.addEventListener("input", (event) => {
      let hour = event.target.value.split(":")[0];
      event.target.value = `${hour}:00`;
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const selfDate = dayjs(new Date());

    if (store) {
      const limitDate = dayjs(store);
      if (selfDate.unix() < limitDate.unix()) {
        alert("Заявка уже была отправлена с вами свяжутся!");
        return;
      }
    }

    let message = `&#128233 <b>Заявка с сайта!</b>\n`;
    message += `&#128590 Отправитель: <b>${data.Name}</b>\n`;
    message += `&#128222 Телефон: <b>${data.MobileNumber}</b>\n`;
    message += `&#9203 Дата бронирования: <b>${data.date}, ${data.Time}</b>\n`;
    message += `&#127916 Выбрана зона: <b>${data.Title}</b>`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        setTimeout(() => 1500);
      })
      .catch((errors) => {
        console.log(errors);
      })
      .finally(() => {
        setStore(selfDate.add(6, "hour").format("YYYY-MM-DD HH:mm:ss"));
      });
    setIsSended(true);
  };

  return (
    <div className=" px-8">
      <div className="mb-4">
        <h3 className="font-bold text-yellow-300 text-2xl md:text-xl uppercase">
          Забронируйте время. <br /> И мы сразу свяжемся с вами!
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="formFooter">
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
            id="time"
            type="time"
            placeholder="Укажите время"
            step="3600"
            {...register("Time", { required: true })}
          />
          <select
            placeholder="Выберите зону"
            id="zona"
            className="h-[47px] rounded-xl text-black mt-2 p-1"
            {...register("Title", { required: true })}
          >
            <option value="Лофт">Лофт</option>
            <option value="Циклорама">Циклорама</option>
            <option value="Хромакей зона">Хромакей зона</option>
          </select>
          <button
            className="cursor-pointer font-bold btnWhite border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
