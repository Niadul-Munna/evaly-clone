"use client";
import { getFlashSell } from "@/api/get-flash-sell";
import React, { useEffect, useState } from "react";

interface Product {
  banner_url: string;
  name: string;
}

const FlashSell = () => {
  const [flashSellProducts, setFlashSellProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getFlashSellData = async () => {
      const res = await getFlashSell();
      console.log(res);
      setFlashSellProducts(res.data.data);
    };
    getFlashSellData();
  }, []);
  return (
    <div>
      {flashSellProducts.map((product) => (
        <img src={product.banner_url} alt={product.name} />
      ))}
    </div>
  );
};

export default FlashSell;
