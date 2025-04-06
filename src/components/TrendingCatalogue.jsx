import React from "react";

const trendingItems = [
  {
    image: "/lodha.png",
    title: "Lodha Builders",
    author: "Krish",
    icon: "/user1.png",
  },
  {
    image: "/ar-furniture.png",
    title: "IDK WHO",
    author: "YoYo Honey Singh",
    icon: "/user2.png",
  },
  {
    image: "/disco.png",
    title: "Disco Dancer",
    author: "GIAN HAI APP",
    icon: "/user3.png",
  },
];

// Local Card component
function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Local CardContent component
function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function TrendingCatalogue() {
  return (
    <section className="px-4 py-10 md:px-16 lg:px-24 bg-[#f9f7e8]">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Trending Catalogue
        </h2>
        <p className="text-gray-600 mt-1">
          Checkout Our Weekly Updated Trending Collection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingItems.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
            aria-label="Trending card"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
            <CardContent className="bg-green-800 text-white p-4">
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 bg-green-700 rounded-md"></div>
                ))}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <a
                href="#"
                className="flex items-center mt-1 text-sm hover:underline"
              >
                <img
                  src={item.icon}
                  alt="user icon"
                  className="w-5 h-5 rounded-full mr-2"
                />
                <span>{item.author}</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
