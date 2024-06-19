import React from 'react';

const SearchInput = ({ register, handleSearchChange }) => (
  <input
    type="text"
    name="keywords"
    {...register("keywords")}
    placeholder="Search Mobile phone names e.g., iPhone, Samsung"
    className="md:w-[60%] w-full p-5 mt-12 outline-none rounded-md border shadow-lg mb-4 placeholder:text-[15px]"
    onChange={handleSearchChange}
  />
);

export default SearchInput;
