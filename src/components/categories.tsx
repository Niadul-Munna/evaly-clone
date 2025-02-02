"use client";
import { getCategories } from "@/api/get-categories";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Categorie {
  id: number;
  name: string;
  slug: string;
  language: string;
  details: string;
  image: {
    id: number;
    original: string;
    thumbnail: string;
  };
}

const Categories = () => {
  const [data, setData] = useState<Categorie[]>([]);
  useEffect(() => {
    const getCategoriesData = async () => {
      const res = await getCategories();
      setData(res.data.data);
    };
    getCategoriesData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image.original} alt={item.slug} />
            <h1>{item.name}</h1>
            <p>{item.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
