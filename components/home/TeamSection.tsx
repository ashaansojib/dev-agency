"use client"
import Image from "next/image";
import React, { useState } from "react";
import myImg from "../../public/pp1.png";
import imgNoman from "../../public/pp2.png";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa6";

const TeamSection = () => {
  const [activeSlider, setActiveSlider] = useState<number>(1);

  const handleSliderChange = (sliderNumber: number) => {
    setActiveSlider(sliderNumber);
  };

  return (
    <section className="my-container py-4">
      <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="title">We Are</h2>
        <p>
          We are two friends of team for your solution. We can make anything for
          your products.
        </p>
      </div>
      {activeSlider === 1 && (
        <div className="py-6 max-w-screen-md mx-auto">
          <div className="team-card">
            <Image
              width={250}
              height={350}
              layout="responsive"
              src={myImg}
              alt="developer"
            />
            <div className="text-center md:text-left">
              <FaQuoteLeft className="text-3xl text-secondary" />
              <p className="py-2">
                In his web developer portfolio, the French front-end developer and
                graphic designer Charles Bruyerre displays a unique style. The
                site’s interactive background gives it a modern and playful look,
                while the domain name helps to reinforce his brand.
              </p>
              <h2 className="text-primary font-semibold">Web Developer (MERN)</h2>
              <p className="font-medium">- Ashaduzzaman Sojib</p>
              <p>- Freelancer Full Time</p>
            </div>
          </div>
        </div>
      )}
      {activeSlider === 2 && (
        <div className="py-6 max-w-screen-md mx-auto">
          <div className="team-card">
            <Image
              width={250}
              height={350}
              layout="responsive"
              src={imgNoman}
              alt="developer"
            />
            <div className="text-center md:text-left">
              <FaQuoteLeft className="text-3xl text-secondary" />
              <p className="py-2">
                In his web developer portfolio, the French front-end developer and
                graphic designer Charles Bruyerre displays a unique style. The
                site’s interactive background gives it a modern and playful look,
                while the domain name helps to reinforce his brand.
              </p>
              <h2 className="text-primary font-semibold">Web Developer (Full Stack)</h2>
              <p className="font-medium">- Md. Neamul Haque</p>
              <p>Developer at - Innovation IT Pvt.</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center my-4">
        <button 
          onClick={() => handleSliderChange(1)}
          className={`mx-2 px-4 py-2 rounded-full ${activeSlider === 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
        >
          <FaArrowRight />
        </button>
        <button 
          onClick={() => handleSliderChange(2)}
          className={`mx-2 px-4 rounded-full py-2 ${activeSlider === 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}
        >
          <FaArrowLeft />
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
