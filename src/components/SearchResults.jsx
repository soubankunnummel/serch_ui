import React from 'react';

const SearchResults = ({ results, noData, visible }) => (
  <div className="md:w-[60%] w-full mt-4 transition-opacity duration-500 opacity-100">
    {visible && results.length > 0 ? (
      results.map((product) => (
        <div
          key={product._id}
          className="p-4 mb-2 bg-white rounded-md transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p>{product.desc}</p>
          <p>${product.price}</p>
        </div>
      ))
    ) : (
      noData && <p className="text-red-500">No Products Found</p>
    )}
  </div>
);

export default SearchResults;
