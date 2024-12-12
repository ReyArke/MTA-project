import React from "react";

import basket from "../../assets/basket.png";

import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";
import Container from "../Container";
import { Link } from "react-router-dom";
import { CartCard } from "./CartCard";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);
  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <div className="flex flex-col gap-5 flex-grow ">
      {carts.length === 0 ? (
        <img src={basket} className="w-[300px] mx-auto " alt="" />
      ) : (
        carts.map((cart) => <CartCard key={cart.id} cart={cart} />)
      )}
      <div className=" bottom-10 left-0 w-full bg-white ">
        <Container className="px-10 mx-auto">
          <div className="border-t border-black flex justify-end gap-10 py-3">
            <div className="text-right">
              <p className="text-gray-500">Total</p>
              <p>{total.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Tax(10%)</p>
              <p className="font-bold">{tax.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Net Total</p>
              <p className="text-2xl font-bold">{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-end mb-3 py-5">
            <Link className="border border-black px-4 py-2 mb-10 bg-red-600 text-white">
              Order Now
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
