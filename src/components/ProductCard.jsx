import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="bg-white p-4 rounded shadow flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />
      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-lg font-bold mb-3">${product.price}</p>
      <Link to={`/products/${product.id}`} className="mt-auto btn text-center hover:text-green-600">
        View Details
      </Link>
    </article>
  );
}
