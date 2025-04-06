import React from "react";

const categories = [
  { name: "SOFA", image: "/sofa.jpg" },
  { name: "CHAIRS", image: "/chairs.jpg" },
  { name: "Tea-Tables", image: "/tea-tables.jpg" },
  { name: "Dining Tables", image: "/dining-tables.jpg" },
  { name: "Jhumers", image: "/jhumers.jpg" },
  { name: "TV-UNITS", image: "/tv-units.jpg" },
  { name: "SOFA-CUM Beds", image: "/sofa-cum-beds.jpg" },
  { name: "Study Tables", image: "/study-tables.jpg" },
];

export default function BrowseCategories() {
  return (
    <section className="px-4 py-10 md:px-16 lg:px-24 bg-[#f9f7e8]">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Browse Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white transition hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="bg-green-800 text-white p-3 text-center font-medium">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
