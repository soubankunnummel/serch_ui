import React, { useRef } from 'react';
import { RxCross2 } from "react-icons/rx";

const SearchInput = ({ register, handleSearchChange }) => {
  const inputRef = useRef(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      handleSearchChange({ target: { value: '' } });
    }
  };

  return (
    <div className="w-full flex justify-center items-center gap-3 relative">
      <input
        type="text"
        name="keywords"
        {...register("keywords")}
        placeholder="Search Mobile phone names e.g., iPhone, Samsung"
        className="md:w-[60%] w-full p-5 mt-12 outline-none rounded-md border shadow-lg mb-4 placeholder:text-[15px]"
        onChange={handleSearchChange}
        ref={inputRef}  
      />
      <RxCross2 
        className="text-2xl absolute right-[280px] top-16 cursor-pointer" 
        onClick={handleClearInput} 
      />
    </div>
  );
};

export default SearchInput;
