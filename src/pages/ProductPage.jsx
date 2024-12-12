import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

import { useParams } from "react-router-dom";
import useProductStore from "../store/useProductStore";

export const ProductPage = () => {
  const { productSlug } = useParams();
  // console.log(productSlug);
  const { products } = useProductStore();
  // console.log(products);

  const currentProduct = products.find(
    (product) => product.slug == productSlug
  );
  console.log(currentProduct);
  return (
    <Container>
      <BreadCrumb currentPageTitle="ProductDetails" />
      <div className="border border-black p-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:h-auto md:w-3/4 block mb-5 md:md-0 md:mx-auto "
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h3 className="text-3xl font-bold"> {currentProduct.title}</h3>

            <p className="font-bold  ">{currentProduct.description}</p>
            <div className="flex justify-between w-full">
              <p>Price: $({currentProduct.price})</p>
              <button className="border border-black px-3 py-1 text-sm bg-cyan-500 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
