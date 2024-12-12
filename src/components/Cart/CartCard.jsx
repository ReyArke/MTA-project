import React from "react";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useProductStore from "../../store/useProductStore";
import useCartStore from "../../store/useCartStore";
export const CartCard = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();

  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handelIncreaseQuantity = () => {
    increaseQuantity(id);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("item is removed from cart");
        }
      });

      // confirm("Are you delete the product")&&removeCart(id);
    }
  };
  return (
    <div className="flex flex-wrap items-center justify-between p-4 border rounded-lg mb-4">
      <div className="flex max-w-[10%] items-center gap-4">
        <img src={product.image} className="w-10 h-10" alt="" />
      </div>

      <div className="flex flex-start col-span-3 w-[30%] max-w-[30%]">
        <p className="mb-2 font-medium">{product.title}</p>
        <p className="text-gray-500">({product.price})</p>
      </div>
      <div className="flex  justify-center items-center gap-1 max-w-[30%]">
        <p className="text-sm font-medium ">Quantity</p>
        <div className="flex gap-3 ">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-black text-white px-2 py-0.5"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handelIncreaseQuantity}
            className="bg-black text-white px-2 py-0.5"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex  justify-center col-span-1 max-w-[20%]">
        <p className="text-end text-2xl font-bold mt-2">${cost}</p>
      </div>
    </div>
  );
};
