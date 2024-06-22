import { FaChartBar } from "react-icons/fa";
const Services = () => {
  return (
    <section className="bg-slate-50 py-10">
      <div
        id="smooth-wrapper"
        className="my-container grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        <div data-aos="fade-left" data-aos-duration="3000" id="smooth-content">
          <h2 className="title">Start to End Web Development Services..</h2>
          <p className="py-6 tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            unde ducimus ex vero quasi quisquam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Laboriosam, mollitia?
          </p>
          <p className="py-6 tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam...
          </p>
          <button className="my-btn">Services</button>
        </div>
        <div className="md:space-y-4 md:flex gap-4 justify-between items-center">
          <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col gap-4">
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Full Stack App</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Frontend Development</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col gap-4">
            <div className="service-card bg-gradient-to-bl text-accent from-primary to-secondary transition-all duration-500">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">Backend Development</h2>
              <p className="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat consequatur aliquid reiciendis obc
              </p>
            </div>
            <div className="service-card">
              <FaChartBar className="text-3xl my-2" />
              <h2 className="secondary-title">UI UX Desing</h2>
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
