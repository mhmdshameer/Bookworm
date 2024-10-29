import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search book" className="border-none rounded py-1 mr-1"/>
      <button className="bg-orange-300 text-slate-900 px-4 py-1 rounded hover:bg-orange-400 transition">
        <SearchOutlined />
      </button>
    </form>
  );
};

export default SearchBar;
