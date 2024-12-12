import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = new Date();
  return (
    <Container className="w-full mx-auto fixed  right-0 left-0 bottom-0  justify-center items-center ">
      <footer className="bg-white   rounded-sm shadow dark:bg-gray-500 ">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:py-2">
          <div className="sm:flex sm:items-center sm:justify-between px-5">
            <span className="block text-sm  text-gray-500 sm:text-center dark:text-white  ">
              © {data.getFullYear()}
              <a
                href="https://www.shop.com.mm/#?"
                className="hover:underline px-1"
              >
                <b>Shopping</b>
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-white">
              <li>
                <Link to="/about-us" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <Link to="/contact_us" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
