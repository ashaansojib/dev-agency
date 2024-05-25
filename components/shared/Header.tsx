"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [scrollBg, setScrollBg] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollBg(true);
        } else {
            setScrollBg(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <header className={`w-full top-0 z-10 transition duration-500 ${scrollBg ? "bg-accent sticky text-primary" : "absolute text-accent"}`}>
      <div className="my-container h-[70px] flex justify-between items-center">
        <h1 className="font-semibold text-xl">Dev.co</h1>
        <nav className="flex gap-4 justify-between">
          <ul>
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/">
              Our Work
            </Link>
            <Link className="nav-link" href="/">
              Services
            </Link>
            <Link className="nav-link" href="/">
              About US
            </Link>
            <Link className="nav-link" href="/">
              Blog
            </Link>
          </ul>
          <Link className={`${scrollBg ? "my-btn" : "hero-btn"}`} href="/">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
