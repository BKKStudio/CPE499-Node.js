"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    fetch("/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  return (
    <div className="">
      <header className="w-full flex justify-center mt-2">
        <div className="max-w-7xl bg-white w-full text-center py-8 text-xl">All Products of Apple Store</div>
      </header>
      <main className="w-full flex justify-center">
        <div className="mt-8 max-w-7xl grid grid-cols-6 justify-center gap-3 max-xl:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.map((product) =>(
          <div className="bg-white w-full">
          <div className="w-full flex flex-col items-center bg-white">
            <img src={product.thumnail} alt={product.category} srcset="" />
            <div  className="bg-white w-full flex flex-col gap-2 pb-4">
             <span className="text-center text-xs px-2">
              {product.product}
             </span>
             <span className="px-2 text-orange-600">฿{product.price}</span>
             <span className="px-2 text-sm text-gray-500">จังหวัด{product.province}</span>
           </div>
          </div>
        </div>
        ))}
        </div>
      </main>
    </div>
  );
}
