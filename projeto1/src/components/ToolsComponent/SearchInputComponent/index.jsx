import './styles.css'


export const SearchInputComponent = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
}