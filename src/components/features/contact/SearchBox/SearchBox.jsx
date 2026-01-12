import styles from "./SearchBox.module.css";

const { searchBox__container } = styles;

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={searchBox__container}>
      <label>
        Find contacts by name
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Enter a name from your contacts"
        />
      </label>
    </div>
  );
};

export default SearchBox;
