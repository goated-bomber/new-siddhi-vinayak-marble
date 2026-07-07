import { useState } from "react";

function SearchBar({
  searchTerm,
  setSearchTerm,
  placeholder = "Search marble, granite, tiles..."
}) {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-bar-container">

      <div
        className={`search-bar ${
          isFocused ? "search-active" : ""
        }`}
      >

        {/* Search Icon */}

        <span className="search-icon">
          🔍
        </span>

        {/* Input */}

        <input
          type="text"
          value={searchTerm}
          placeholder={placeholder}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          onFocus={() =>
            setIsFocused(true)
          }
          onBlur={() =>
            setIsFocused(false)
          }
        />

        {/* Clear Button */}

        {searchTerm && (
          <button
            className="clear-search-btn"
            onClick={clearSearch}
          >
            ✕
          </button>
        )}

      </div>

    </div>
  );
}

export default SearchBar;