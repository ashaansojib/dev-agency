import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [scrollBg, setScrollBg] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollBg(true);
    } else {
      setScrollBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // handle mobile menu
  const menuItem = (
    <>
      <ul id="menu" className="flex-col md:flex-row flex justify-between">
        <li>
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/">
            Our Work
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/">
            Services
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/">
            About Us
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/">
            Blog
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <header
      className={`w-full top-0 z-50 fixed py-2 md:py-0 ${
        scrollBg
          ? "bg-accent transition-all duration-500 shadow"
          : "text-accent"
      }`}
    >
      <div className="my-container flex justify-between items-center relative">
        <span
          className="md:hidden block cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <FaXmark className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </span>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="font-semibold text-xl">Dev.co</h1>
        <nav data-aos="fade-top" data-aos-duration="2000" className="flex gap-4 items-center justify-between">
          <div className="hidden md:block">{menuItem}</div>
          <Link className={`btn ${scrollBg ? "my-btn" : "hero-btn"}`} href="/">
            Contact
          </Link>
        </nav>
        <div className="absolute right-0 top-[50px] w-2/3 md:hidden block">
          <div
            className={`bg-primary text-accent ${
              mobileMenu ? "block" : "hidden"
            }`}
          >
            {menuItem}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
