/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

interface ProductDataResponse {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function Two() {
  const [productData, setProductData] = useState<ProductDataResponse | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>("");

  const fetchSingleProduct = async (
    productId: number
  ): Promise<ProductDataResponse> => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const saveFetchedData = async (productId: number) => {
    try {
      const product = await fetchSingleProduct(productId);
      setProductData(product);
    } catch (err) {
      console.log(
        "Error whilst fetching/setting product data for ID: ",
        productId
      );
      console.log(err);
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    saveFetchedData(1);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-8 max-h-92">
      <div className="overflow-hidden">
        <img
          src={productData?.image}
          alt={productData?.title}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{productData?.title}</p>
        <p>{productData?.description}</p>
        <span className="text-3xl font-extrabold">${productData?.price}</span>
        <p className="">Choose size</p>
        <div className="flex justify-center gap-4 py-2">
          {["XS", "S", "M", "L", "XL"].map((size) => {
            return (
              <div
                key={size}
                className={`hover:bg-blue-200 hover:text-black cursor-pointer p-2 rounded-sm w-12 text-center ${
                  selectedSize === size
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-200"
                }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            );
          })}
        </div>
        <button
          className="bg-blue-300 rounded-md px-12 py-2 hover:bg-blue-400 text-black ease-in-out transition"
          disabled={!selectedSize}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}
