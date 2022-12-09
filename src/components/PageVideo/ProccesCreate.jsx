import React from "react";

import { motion } from "framer-motion";

import { MdOutlineSettingsSuggest } from "react-icons/md";

const ProccesCreate = () => {
  return (
    <motion.div
      className=" text-white px-8 pb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex">
        <MdOutlineSettingsSuggest size={50} />
        <h4 className=" md:text-lg uppercase font-bold ml-4">
          Процесс создания видео включает <br /> в себя три основных этапа:
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-3 pt-6">
        <div>
          <h4 className="text-lg font-medium">Препродакшн</h4>
          <p className=" font-medium">(подготовка к съемкам)</p>
          <div className="h-[2px] w-[170px] mt-1 bg-red-600 rounded-md" />
          <p className="pt-1 text-gray-200 leading-6">
            Совместно с заказчиком мы разрабатываем концепт и пишем сценарий,
            ищем актеров, подбираем декорации и реквизит, выбираем подходящие
            локации. Создаём раскадровки.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Продакшен</h4>
          <p className=" font-medium">(съемочный процесс)</p>
          <div className="h-[2px] w-[170px] mt-1 bg-red-600 rounded-md" />
          <p className="pt-1 text-gray-200 leading-6">
            В создании видео задействуется множество специалистов: режиссер,
            актеры, операторы, визажист, костюмер. Главная задача – обеспечить
            продуктивную и слаженную работу всей команды.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Постпродакшн</h4>
          <p className=" font-medium">(подготовка видеоряда)</p>
          <div className="h-[2px] w-[170px] mt-1 bg-red-600 rounded-md" />
          <p className="pt-1 text-gray-200 leading-6">
            Отснятый материал передается специалистам для видеомонтажа,
            цветокоррекции, саунд-дизайна и озвучки. Сотрудники нашей студии
            уделяют высочайшее внимание каждому этапу производства.
          </p>
        </div>
      </div>
      <div
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
        className="w-full h-full mt-12"
      >
        <iframe
          className="w-full h-full rounded-xl"
          src="https://player.vimeo.com/video/763387991?h=ca0884142a&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ProccesCreate;
