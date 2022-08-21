import React from "react";

import avatar_1 from "../assets/team/avatar_1.jpg";
import avatar_2 from "../assets/team/avatar_2.jpg";
import avatar_3 from "../assets/team/avatar_3.jpg";
import avatar_4 from "../assets/team/avatar_4.jpg";

const team = [
  {
    avatar: avatar_1,
    name: "Сучков Елисей Сергеевич",
    desc: "Директор",
  },
  {
    avatar: avatar_2,
    name: "Назаров Даврон Равшанович",
    desc: "Замдиректор",
  },
  {
    avatar: avatar_3,
    name: "Назаров Даврон Равшанович",
    desc: "Оператор, Видеомонтажер",
  },
  {
    avatar: avatar_4,
    name: "Хасан Хожи",
    desc: "Гафер (Светооператор) Администратор",
  },
];

export const OurTeam = () => {
  return (
    <div className="h-full bg-black text-white px-12 py-20 myContainer">
      <div>
        <h2 className="font-bold text-yellow-300 text-2xl">Наша команда</h2>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-8 text-center pt-6">
        {team.map((item, index) => {
          return (
            <div
              className="cursor-pointer btn-hover hover:text-yellow-300"
              key={index}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="rounded-xl w-full bg-cover object-cover"
              />
              <h3 className="font-semibold text-lg ">{item.name}</h3>
              <p className=" text-base ">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
