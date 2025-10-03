import React from "react";

export default function Hero() {
  return (
    <section className="rounded-lg overflow-hidden mb-8">
      <div className="h-48 md:h-64 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=')] bg-cover bg-center">
        <div className="bg-black/40 p-6 rounded text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold">Product Catalog</h1>
          <p className="mt-2">
            Browse our demo products — built with React + Tailwindcss
          </p>
        </div>
      </div>
    </section>
  );
}
