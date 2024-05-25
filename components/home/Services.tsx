import React from "react";
import { FaChartBar } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-slate-100 py-10">
      <div className="my-container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="title">Start to End Web Development Services..</h2>
          <p className="py-6 tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            unde ducimus ex vero quasi quisquam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laboriosam, mollitia?
          </p>
          <p className="py-6 tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam...
          </p>
          <button className="my-btn">Services</button>
        </div>
        <div className="md:space-y-4 flex gap-4 justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Full Stack Developer 1</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Frontend Development 2</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="service-card bg-gradient-to-bl text-accent from-primary to-secondary transition-all duration-500">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Full Stack Developer 3</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Frontend Development 4</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
