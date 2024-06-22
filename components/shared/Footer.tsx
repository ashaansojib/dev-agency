import Link from "next/link";
import React from "react";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div data-aos="fade-up" data-aos-duration="3000" className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-10">
        <div className="lg:col-span-2">
          <h1 className="font-semibold text-xl">Dev.co</h1>
          <p className="text-secondary py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga
            totam at nesciunt fugit iure vitae laboriosam dolorem, voluptate
            deserunt sit consectetur eum a! Non dolore fugiat alias quod
            aliquam.
          </p>
        </div>
        <div>
          <h3>Helpful Links</h3>
          <ul className="py-6 text-secondary">
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                {" "}
                Our Works
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                {" "}
                Blogs
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                {" "}
                Services
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                {" "}
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Latest Projects</h3>
          <ul className="py-6 text-secondary">
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                Agency Theme
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                School Management
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                Coding Life
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                E-commarce
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaAngleRight />
              <Link href="/" className="footer-link">
                Developer
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul className="text-secondary py-6">
            <li>1202 - Dhaka Bangladesh</li>
            <li>King Mountain, NC 12312</li>
            <li>Phone: +880 9476234632</li>
            <li>Email: ashanashsfds@.com</li>
          </ul>
        </div>
      </div>
      <p className="text-center py-6 px-2 border-t">
        © 2024 Code.dev All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
