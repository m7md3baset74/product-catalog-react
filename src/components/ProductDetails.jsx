import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-6 rounded shadow grid md:grid-cols-2 gap-6">
      <div className="flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-96 object-contain"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-6 text-2xl font-bold">${product.price}</p>
        <button className="inline-block text-white bg-gradient-to-r from-green-600 to-amber-100
     hover:gradient-to-r hover:from-amber-100 hover:to-green-600 focus:ring-2 focus:outline-none focus:ring-green-300
      font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3">Add to Cart</button>
        <div className="mt-4">
          <Link to="/" className="text-sm text-blue-600">
            ← Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}
