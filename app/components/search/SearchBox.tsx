import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

import "./SearchBox.css";

interface Props {
  searchField: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBox = ({ searchField, searchChange, placeholder }: Props) => {
  return (
    <div className="search-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="search-container position-relative"
      >
        <label className="visually-hidden" htmlFor="portfolio-search">
          {placeholder}
        </label>
        <FiSearch className="search-icon" aria-hidden="true" />
        <input
          id="portfolio-search"
          className="search-input"
          type="search"
          placeholder={placeholder}
          value={searchField}
          onChange={searchChange}
        />
        <div className="input-highlight" aria-hidden="true"></div>
      </motion.div>
    </div>
  );
};

export default SearchBox;
