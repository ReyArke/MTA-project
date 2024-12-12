import React from "react";
import { Link, Links } from "react-router-dom";
import Container from "./Container";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();
  return (
    <Container className="h-auto">
      <nav className="bg-white border-gray-200 dark:bg-gray-500 my-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="https://www.shop.com.mm/#?"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.freepik.com/premium-vector/online-shopping-logo-design-vector-template_712837-74.jpg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-sans font-semibold whitespace-nowrap dark:text-white">
              Shopping
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only ">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-500 md:dark:bg-gray-500 dark:border-gray-500">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/product"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact_us"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to={"/my-cart"}
                  className="relative hover:text-gray-600 transition-colors"
                >
                  <span className="absolute -top-2 -right-2 bg-red-500 text-red text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {carts.length}
                  </span>
                  <LiaShoppingBasketSolid className="h-7 w-7" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:#dad7e5}.cls-2{fill:#edebf2}.cls-6{fill:#9dcc6b}.cls-7{fill:#b5e08c}</style></defs><g id="Basket_Shopping_Money" data-name="Basket Shopping Money"><path class="cls-1" d="M45.81 10.16 41 23h-5l5.43-14.48a2.34 2.34 0 0 1 4.38 1.64z"/><path class="cls-2" d="M45.81 10.16C41.62 21.34 41.65 21 41.75 21a1.65 1.65 0 0 1-1.54-2.22c4.69-12.51 4-11.19 4.65-11.43a2.33 2.33 0 0 1 .95 2.81z"/><path d="M33 10a9 9 0 1 1-14.28-7.28A9 9 0 0 1 33 10z" style="fill:#fc6"/><path d="M31.67 14.69c-8 4.86-17.26-4.33-12.36-12.36 8.03-4.92 17.26 4.36 12.36 12.36z" style="fill:#ffde76"/><path d="M24 9a1 1 0 1 1 1-1 1 1 0 0 0 1 1c1.66 0 1.21-3-1-3.82a1 1 0 1 0-2 0A3 3 0 0 0 24 11a1 1 0 1 1-1 1 1 1 0 0 0-1-1c-1.66 0-1.21 3 1 3.82a1 1 0 1 0 2 0A3 3 0 0 0 24 9z" style="fill:#f8834b"/><path class="cls-6" d="M47 26a3 3 0 0 1-3 3H4a3 3 0 0 1-.87-5.87C3.77 22.94 1 23 44 23a3 3 0 0 1 3 3z"/><path class="cls-7" d="M47 26H7a3 3 0 0 1-3-3h40a3 3 0 0 1 3 3z"/><path class="cls-6" d="M44 29c0 .3-2.59 15.63-2.67 15.87A3 3 0 0 1 38.46 47H9.54a3 3 0 0 1-3-2.51C5.86 40.09 5.29 36.77 4 29z"/><path class="cls-7" d="M44 29c0 .3-2.59 15.63-2.67 15.87s2.06.13-28.79.13a3 3 0 0 1-3-2.51C9 38.68 8.68 37.09 7.33 29z"/><path class="cls-1" d="M12 23H7L2.19 10.16a2.34 2.34 0 0 1 4.38-1.64z"/><path class="cls-2" d="M11.25 21a3.25 3.25 0 0 1-3-2.11C3.86 7.27 4 7.83 4.06 7a2.33 2.33 0 0 1 2.51 1.52z"/><path class="cls-6" d="m42.83 36 .34-2h-5.72l.55-5h-2l-.56 5h-4.72l.28-5h-2l-.28 5H25v-5h-2v5h-3.72L19 29h-2l.28 5h-4.72L12 29h-2l.55 5H4.83l.34 2h5.6l.45 4H5.83l.34 2h5.27l.56 5h2l-.55-5h4.27l.28 5h2l-.28-5H23v5h2v-5h3.28L28 47h2l.28-5h4.27L34 47h2l.56-5h5.27l.34-2h-5.39l.45-4zm-29.6 4-.45-4h4.61l.22 4zM23 40h-3.39l-.22-4H23zm5.39 0H25v-4h3.61zm6.38 0h-4.38l.22-4h4.61z"/></g></svg> */
}
