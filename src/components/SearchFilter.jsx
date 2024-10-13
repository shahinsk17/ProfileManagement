import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search profiles..."
      className="border p-2 rounded w-full mb-4"
    />
  );
};

export default SearchFilter;
