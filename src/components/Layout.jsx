import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <div>
      <main className="flex flex-col main h-screen ">
        <Header />
        <Outlet />
        <Toaster position="top-right" />
        <Footer />
      </main>
    </div>
  );
};
