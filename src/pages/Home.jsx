import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <h2 className="text-gray-600 text-3xl font-semibold mb-6 text-center relative w-fit mx-auto after:content-[''] after:absolute after:bottom-0
         after:left-1/2 after:-translate-x-1/2 after:w-40 after:h-1 after:bg-gradient-to-r after:from-green-600 after:to-amber-100
          pb-2">Latest Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
