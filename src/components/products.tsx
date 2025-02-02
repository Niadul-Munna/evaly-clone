"use client";
import { getProducts } from "@/api/get-products";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    id: number;
    original: string;
    thumbnail: string;
  };
  type: {
    name: string;
  };
  max_price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProductsData = async () => {
      const res = await getProducts();
      setProducts(res.data.data);
    };
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:px-24 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow rounded-lg overflow-hidden border border-gray-200 hover:bg-slate-200"
        >
          <div className="h-48 w-full bg-gray-200">
            <img
              src={product.image.original}
              alt={product.slug}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold">
              {product.name} ({product.type.name})
            </h1>
            <div className="flex gap-2">
              <p>{product.max_price}$</p>
              <del>{product.max_price + 199}$</del>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
