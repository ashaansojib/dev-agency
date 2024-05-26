import Image from "next/image";
import React from "react";
import myImg from "../../public/mypp.png";
import { FaFacebookF, FaGitSquare, FaYoutube } from "react-icons/fa";
import { FaGitAlt, FaGithub, FaWhatsapp } from "react-icons/fa6";

const TeamSection = () => {
  return (
    <section className="my-container py-4">
      <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="title">We Are</h2>
        <p>
          We are two frnds of team for your solution. We can make anyhting for
          your products..
        </p>
      </div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
        <div className="team-card">
          <Image className="h-[250px] w-[180px]" src={myImg} alt="developer" />
          <div>
            <h2 className="text-2xl">Full Stack Web Developer</h2>
            <p>- Ashaduzzaman Sojib</p>
            <p className="text-gray-200 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quia facere consequuntur nihil voluptatum quaerat optio quos
              doloremque dolor a! Maiores officia officiis maxime ducimus culpa
              rerum omnis tenetur. Nobis.
            </p>
          </div>
          <div className="developer-info">
            <h2 className="secondary-title">Expertise in:</h2>
            <div>
              <p>
                JavaScript, Python, ReactJS, NextJS, TailwindCss, NodeJS,
                ExpressJS, MongoDB, MySql, Docar, Github...
              </p>
              <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione suscipit, placeat necessitatibus, blanditiis nisi eveniet debitis illum quae aliquid.</p>
              <div className="pt-4 justify-end flex gap-2">
                <FaGithub className="text-3xl" />
                <FaWhatsapp className="text-3xl" />
                <FaFacebookF className="text-3xl" />
                <FaYoutube className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-card">
          <Image className="h-[250px] w-[200px]" src={myImg} alt="developer" />
          <div>
            <h2 className="text-2xl">Full Stack Web Developer</h2>
            <p>- Ashaduzzaman Sojib</p>
            <p className="text-gray-300 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quia facere consequuntur nihil voluptatum quaerat optio quos
              doloremque dolor a! Maiores officia officiis maxime ducimus culpa
              rerum omnis tenetur. Nobis.
            </p>
          </div>
          <div className="developer-info">
            <h2 className="secondary-title">Expertise in:</h2>
            <div>
              <p>
                JavaScript, Python, ReactJS, NextJS, TailwindCss, NodeJS,
                ExpressJS, MongoDB, MySql, Docar, Github...
              </p>
              <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione suscipit, placeat necessitatibus, blanditiis nisi eveniet debitis illum quae aliquid.</p>
              <div className="pt-4 justify-end flex gap-2">
                <FaGithub className="text-3xl" />
                <FaWhatsapp className="text-3xl" />
                <FaFacebookF className="text-3xl" />
                <FaYoutube className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
