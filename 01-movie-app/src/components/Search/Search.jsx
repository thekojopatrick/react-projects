import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Search() {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
    console.log(input);
  };

  return (
    <SearchForm onSubmit={handleSubmit} className="m-4">
      <FiSearch />
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  padding: 1rem;
  border: solid 1px #475069;
  border-radius: 0.9rem;
  color: #475069;

  input {
    width: 100%;
    min-width: 272px;
    background: transparent;
    font-size: 0.9rem;
    line-height: 1.2rem;
    border: none;
    outline: none;
    color: #fff;
    padding: 0.5rem 0rem;
    margin-right: 0.5rem;

    &::placeholder {
      color: #475069;
    }
  }

  svg {
    font-size: 2rem;
  }
`;

export default Search;
