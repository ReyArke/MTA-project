import React from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const { products } = useProductStore();

  return (
    <section className="px-5 mb-5">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
