import { useState } from "react";

export default function Products() {
  const [categories, setCategories] = useState([
    "Bakery",
    "Baking",
    "Beverages",
    "Canned and Packaged Foods",
    "Dairy",
    "Deli",
    "Frozen Foods",
    "Health and beauty",
    "Household Supplies",
    "Personal Care",
    "Snacks and Sweets",
    "Veggies and Fruits",
  ]);
  return (
    <>
      <div className="mt-[10%] items-center justify-center">
        <div className="container px-2 mx-auto md:px-12 xl:px-22">
          <div className="text-center text-primaryText">
            <div className="block px-2 py-12 rounded-lg shadow-lg bg-sec md:py-16 md:px-12 bg-secondaryBg">
              <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Our Products <br />
                <span className="text-xl font-normal tracking-normal">
                  Select from a Wide range of products available in out store.
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="ml-10 font-secondaryFont text-primaryText">
            Shop by category:
          </span>
          <div className="p-10">
            <div className="relative inline-block dropdown">
              <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 rounded bg-secondaryBg">
                <span className="mr-1">Choose Categories</span>
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="absolute hidden pt-1 text-primaryText dropdown-menu">
                {categories.map((word, index) => (
                  <li className="" key={index}>
                    <a
                      className="block px-4 py-2 whitespace-no-wrap rounded-t bg-secondaryBg hover:bg-green-200"
                      href="#"
                    >
                      {word}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
