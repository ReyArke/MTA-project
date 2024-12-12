import React from "react";

import toast from "react-hot-toast";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    description,
    slug,
  },
}) => {
  const { carts, addCart } = useCartStore();

  const navigate = useNavigate();

  const handleAddBtn = (event) => {
    event.stopPropagation();
    toast.success("item is already added in cart");
  };
  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail = () => {
    navigate(`/product-page/${slug}`);
  };
  console.log(slug);
  return (
    <div
      onClick={handleOpenDetail}
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img
        src={image}
        className="h-40 transition-transform group-hover:scale-105"
        alt=""
      />
      <p className="font-bold line-clamp-2 ">{title}</p>
      <p className="font-bold line-clamp-2 ">{description}</p>

      <div className="flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddBtn}
            className="border border-black px-4 py-2 text-sm bg-red-600 text-white"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className="border border-black px-4 py-2 text-sm"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
