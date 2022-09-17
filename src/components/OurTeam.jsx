import React from "react";

import "../scss/OurTeam.scss";

import { FaInstagram } from "react-icons/fa";

import avatar_1 from "../assets/team/avatar_1.jpg";
import avatar_2 from "../assets/team/avatar_2.jpg";
import avatar_3 from "../assets/team/avatar_3.jpg";
import avatar_4 from "../assets/team/avatar_4.jpg";

const team = [
  {
    avatar: avatar_1,
    name: "Сучков Елисей Сергеевич",
    desc: "Директор",
    social: "https://instagram.com/elisey_suchkov?igshid=YmMyMTA2M2Y=",
  },
  {
    avatar: avatar_2,
    name: "Назаров Даврон Равшанович",
    desc: "Замдиректора",
    social: "https://instagram.com/soda.ql?igshid=YmMyMTA2M2Y=",
  },
  {
    avatar: avatar_3,
    name: "Назаров Даврон Равшанович",
    desc: "Оператор, Видеомонтажер",
    social: "https://instagram.com/jafar.film?igshid=YmMyMTA2M2Y=",
  },
  {
    avatar: avatar_4,
    name: "Хасан Хожи",
    desc: "Гафер (Светооператор) Администратор",
    social: "https://instagram.com/cassin.ph?igshid=YmMyMTA2M2Y=",
  },
];

export const OurTeam = () => {
  return (
    <div id="team" className="h-full bg-black text-white px-12 py-20">
      <div>
        <h2 className="font-bold text-yellow-300 text-2xl">Наша команда</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12 text-center pt-6">
        {team.map((item, index) => {
          return (
            <div
              className="cursor-pointer btn-hover hover:text-yellow-300 relative"
              key={index}
            >
              <a href={item.social} target="_blank">
                <div key={index} className="column">
                  <div className="post">
                    <div className="overlay">
                      <FaInstagram size={50} className=" text-white" />
                    </div>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="rounded-xl w-full bg-cover object-cover btn-hover hover:opacity-60"
                    />
                  </div>
                </div>
              </a>

              <h3 className="font-semibold text-lg pt-3">{item.name}</h3>
              <p className=" text-base ">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
