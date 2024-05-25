import React from "react";
import userImg from "../../public/tools.png";
import Image from "next/image";
import background from "@/public/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <Image className="hero-bg" src={background} fill={true} alt="bgc" />
      <div className="my-container pt-40 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
        <div>
          <h2 className="title">
            We are commited to supply super fast web Development services.
          </h2>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            aliquam autem quibusdam asperiores? Fugiat sit consequatur
            recusandae laboriosam temporibus voluptate.
          </p>
          <button className="hero-btn">All Works</button>
        </div>
        <div className="flex justify-end">
          <Image src={userImg} alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
