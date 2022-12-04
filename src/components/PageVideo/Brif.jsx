import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { Stepper, Button, Group } from "@mantine/core";

import startBriefImg from "../../assets/start.png";

import "../../scss/Brif.scss";

import emailjs from "@emailjs/browser";

import { useLocalStorage } from "@mantine/hooks";

import dayjs, { Dayjs } from "dayjs";

import { motion } from "framer-motion";

import "dayjs/locale/ru";
dayjs.locale("ru");

export const Brif = () => {
  const form = React.useRef();

  const [store, setStore] = useLocalStorage({ key: "sendLimitBrif" });

  const [active, setActive] = useState(0);
  const [startBrief, setStartBrief] = useState(false);

  const [isSended, setIsSended] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  // const [stepSelectValue, setStepSelectValue] = useState(() => {
  //   return setValue("Title", "Лофт");
  // });

  console.log(getValues());

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
        "template_pi40koi",
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

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <motion.div
      className=" text-white px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={startBrief ? "hidden" : "block"}>
        <h1 className=" text-[30px] uppercase font-bold mb-8">
          Пройдите опрос <br />
        </h1>

        <div className=" text-lg mb-8 flex">
          <img src={startBriefImg} className="w-28 mr-3" alt="start" />
          <div>
            <p>
              и получите{" "}
              <span className=" text-red-600 font-semibold">скидку 10%</span>{" "}
              <br /> на стоимость вашего видео в течение дня
            </p>
          </div>
        </div>

        <button
          onClick={() => setStartBrief(true)}
          className="pulsBtnRender btn-hover"
        >
          Начать тест
        </button>
      </div>

      <div className={startBrief ? "block" : "hidden"}>
        <Stepper
          color="yellow"
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
        >
          <Stepper.Step>
            <h4 className=" text-lg font-medium mb-7 uppercase">
              Какой формат съемки вам подходит?
            </h4>

            <div className="flex flex-col md:flex-row md:justify-between">
              <label for="Radio">
                <input
                  {...register("Format")}
                  type="radio"
                  value="Рекламный ролик"
                  className="text-white mr-2 option-input radio"
                />
                Рекламный ролик
              </label>
              <label for="Radio">
                <input
                  {...register("Format")}
                  type="radio"
                  value="Короткий/Полный метр"
                  className="text-white mr-2 option-input radio"
                />
                Короткий/Полный метр
              </label>

              <label for="Radio">
                <input
                  {...register("Format")}
                  type="radio"
                  value="Клип"
                  className="text-white mr-2 option-input radio"
                />
                Клип
              </label>
              <label for="Radio">
                <input
                  {...register("Format")}
                  type="radio"
                  value="Live-трансляция"
                  className="text-white mr-2 option-input radio"
                />
                Live-трансляция
              </label>
              <label for="Radio">
                <input
                  {...register("Format")}
                  type="radio"
                  value="Другое"
                  className="text-white mr-2 option-input radio"
                />
                Другое
              </label>
            </div>
          </Stepper.Step>

          <Stepper.Step>
            {getValues().Format === "Рекламный ролик" && (
              <>
                <h4 className=" text-lg font-medium mb-7 uppercase">
                  Что вы хотите рекламировать?
                </h4>
                <div className="flex justify-between">
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Ads")}
                      type="radio"
                      value="Бренд"
                      className="text-white mr-2 option-input radio"
                    />
                    Бренд
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Ads")}
                      type="radio"
                      value="Продукт"
                      className="text-white mr-2 option-input radio"
                    />
                    Продукт
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Ads")}
                      type="radio"
                      value="Персонажа"
                      className="text-white mr-2 option-input radio"
                    />
                    Персонажа
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Ads")}
                      type="radio"
                      value="Другое"
                      className="text-white mr-2 option-input radio"
                    />
                    Другое
                  </label>
                </div>
              </>
            )}
            {getValues().Format === "Короткий/Полный метр" && (
              <>
                <h4 className=" text-lg font-medium mb-7 uppercase">
                  Сценарий фильма
                </h4>
                <div className="flex justify-between">
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Film")}
                      type="radio"
                      value="Есть свой сценарий"
                      className="text-white mr-2 option-input radio"
                    />
                    Есть свой сценарий
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Film")}
                      type="radio"
                      value="Есть только идея"
                      className="text-white mr-2 option-input radio"
                    />
                    Есть только идея
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Film")}
                      type="radio"
                      value="Создание фильма под ключ"
                      className="text-white mr-2 option-input radio"
                    />
                    Создание фильма под ключ
                  </label>
                </div>
              </>
            )}
            {getValues().Format === "Клип" && (
              <>
                <h4 className=" text-lg font-medium mb-7 uppercase">
                  Сколько участников в клипе?
                </h4>
                <div className="flex">
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Clip")}
                      type="radio"
                      value="Соло-исполнитель"
                      className="text-white mr-2 option-input radio"
                    />
                    Соло-исполнитель
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Clip")}
                      type="radio"
                      value="Группа"
                      className="text-white mr-2 option-input radio"
                    />
                    Группа
                  </label>
                </div>
              </>
            )}
            {getValues().Format === "Live-трансляция" && (
              <>
                <h4 className=" text-lg font-medium mb-7 uppercase">
                  Формат трансляции
                </h4>
                <div className="flex justify-between">
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Live")}
                      type="radio"
                      value="Бизнес-трансляция"
                      className="text-white mr-2 option-input radio"
                    />
                    Бизнес-трансляция
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Live")}
                      type="radio"
                      value="Мероприятие"
                      className="text-white mr-2 option-input radio"
                    />
                    Мероприятие
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Live")}
                      type="radio"
                      value="Концерт"
                      className="text-white mr-2 option-input radio"
                    />
                    Концерт
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Live")}
                      type="radio"
                      value="Спортивное мероприятие"
                      className="text-white mr-2 option-input radio"
                    />
                    Спортивное мероприятие
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Live")}
                      type="radio"
                      value="Киберспорт"
                      className="text-white mr-2 option-input radio"
                    />
                    Киберспорт
                  </label>
                </div>
              </>
            )}
            {getValues().Format === "Другое" && (
              <>
                <h4 className=" text-lg font-medium mb-7 uppercase">
                  Какая цель преследует ваше видео?
                </h4>
                <div className="flex justify-between">
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Other")}
                      type="radio"
                      value="Рассказать о продукте"
                      className="text-white mr-2 option-input radio"
                    />
                    Рассказать о продукте
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Other")}
                      type="radio"
                      value="Рассказать об услуге"
                      className="text-white mr-2 option-input radio"
                    />
                    Рассказать об услуге
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Other")}
                      type="radio"
                      value="Интервью"
                      className="text-white mr-2 option-input radio"
                    />
                    Интервью
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Other")}
                      type="radio"
                      value="Спортивное мероприятие"
                      className="text-white mr-2 option-input radio"
                    />
                    Спортивное мероприятие
                  </label>
                  <label for="Radio" className="mr-6">
                    <input
                      {...register("Other")}
                      type="radio"
                      value="Запись лекций"
                      className="text-white mr-2 option-input radio"
                    />
                    Запись лекций
                  </label>
                </div>
              </>
            )}
          </Stepper.Step>
          <Stepper.Step>
            <h4 className=" text-center text-lg font-medium mb-7 uppercase">
              Отправьте нам свой контакт <br /> и мы с вами свяжимся!
            </h4>
            <form ref={form} className="form_group" onSubmit={sendEmail}>
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
              <div className="mt-2">
                <p className="mr-2 text-gray-300">Вы выбрали:</p>
                <div className="flex justify-around">
                  <input
                    name="user_format"
                    type="text"
                    value={!!getValues().Format && getValues().Format}
                  />
                  {getValues().Format === "Рекламный ролик" && (
                    <input
                      name="user_format"
                      type="text"
                      value={!!getValues().Ads && getValues().Ads}
                    />
                  )}
                  {getValues().Format === "Короткий/Полный метр" && (
                    <input
                      name="user_format"
                      type="text"
                      value={!!getValues().Film && getValues().Film}
                    />
                  )}

                  {getValues().Format === "Клип" && (
                    <input
                      name="user_format"
                      type="text"
                      value={!!getValues().Clip && getValues().Clip}
                    />
                  )}

                  {getValues().Format === "Live-трансляция" && (
                    <input
                      name="user_format"
                      type="text"
                      value={!!getValues().Live && getValues().Live}
                    />
                  )}
                  {getValues().Format === "Другое" && (
                    <input
                      name="user_format"
                      type="text"
                      value={!!getValues().Other && getValues().Other}
                    />
                  )}
                </div>
              </div>
              <button className="pulsBtn mt-3" type="submit">
                Отправить
              </button>
            </form>
          </Stepper.Step>
          <Stepper.Completed>
            <h4 className=" text-center text-lg font-medium mb-7 uppercase">
              Если вы верно указали свои данные <br /> в ближайшее время мы с
              вами свяжимся!
            </h4>
          </Stepper.Completed>
        </Stepper>
        <Group position="center" mt="xl" className="mt-16">
          <Button
            className="hover:text-yellow-300 btn-hover"
            onClick={prevStep}
          >
            Назад
          </Button>
          <Button
            className="hover:text-yellow-300 btn-hover"
            onClick={nextStep}
          >
            Дальше
          </Button>
        </Group>
      </div>
    </motion.div>
  );
};
