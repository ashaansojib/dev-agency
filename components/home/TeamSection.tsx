import Image from "next/image";
import React from "react";
import myImg from "../../public/mypp.png";

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
          {/* <div className="developer-items">
            <h2 className="text-xl">Expertise of:</h2>
            <div className="pt-2 gap-1 flex">
                <button className="border p-1">JavaScript</button>
                <button className="border p-1">TypeScript</button>
                <button className="border p-1">ReactJS</button>
                <button className="border p-1">NextJS</button>
                <button className="border p-1">NextJS</button>
            </div>
          </div> */}
          <Image className="h-[250px] w-[180px]" src={myImg} alt="developer" />
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
        </div>
        <div className="team-card">
          <div className="developer-items"></div>
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
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
