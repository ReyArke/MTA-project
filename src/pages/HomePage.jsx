import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import ProductSection from "../components/Product/ProductSection";

export const HomePage = () => {
  return (
    <>
      <Container>
        <BreadCrumb  className="px-5 mb-5" />
        <ProductSection />
      </Container>
    </>
  );
};
