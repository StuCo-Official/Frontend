import React from 'react';
import SearchIcon from '../../assets/SearchIcon.png';
import FilterIcon from '../../assets/FilterIcon.png';

const SearchFilterBar: React.FC = () => {
  return (
    <div className="w-full max-w-3xl h-auto p-2 bg-white rounded-md shadow-md border border-[#bcc1ca] flex justify-start items-center gap-3">
      {/* Search Box */}
      <div className="flex-1 flex items-center gap-2 pl-3 pr-4 py-2 bg-white rounded-xl border border-[#dee1e6]">
        <button className="w-4 h-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
          <img src={SearchIcon} alt="Search Icon" className="w-full h-full" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-[#bcc1ca] text-sm font-normal font-['Inter'] outline-none bg-transparent"
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-[#7eb698] rounded-xl border border-transparent text-white text-sm font-normal font-['Inter'] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#6ea688]">
        <div className="w-4 h-4 flex items-center justify-center">
          <img src={FilterIcon} alt="Filter Icon" className="w-full h-full" />
        </div>
        <div>Filter</div>
      </button>
    </div>
  );
};

export default SearchFilterBar;
