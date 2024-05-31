import React from "react";
import Image from "next/image";
import background from "@/public/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <Image className="hero-bg" src={background} fill={true} alt="bgc" />
      <div className="my-container md:pt-40 py-20 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
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
        <div className="md:flex justify-end">
          <div className="grid grid-cols-3 md:grid-cols-5 justify-between items-center gap-3">
            <Image src="/js.png" alt="logos" width={50} height={50} />
            <Image src="/react.png" alt="logos" width={50} height={50} />
            <Image src="/python.png" alt="logos" width={50} height={50} />
            <Image src="/ts.png" alt="logos" width={50} height={50} />
            <Image src="/tailwind.png" alt="logos" width={50} height={50} />
            <Image src="/mysql.png" alt="logos" width={50} height={50} />
            <Image src="/shopify.png" alt="logos" width={50} height={50} />
            <Image src="/redux.png" alt="logos" width={50} height={50} />
            <Image src="/mongodb.png" alt="logos" width={50} height={50} />
            <Image src="/bootstrap.png" alt="logos" width={50} height={50} />
            <Image src="/github.png" alt="logos" width={50} height={50} />
            <Image src="/nextjs.png" alt="logos" width={50} height={50} />
            <Image src="/nodejs.png" alt="logos" width={50} height={50} />
            <Image src="/vercel.svg" alt="logos" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
