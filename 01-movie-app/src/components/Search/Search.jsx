import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

function Search() {
  return (
    <SearchForm>
      <FiSearch />
      <input type="text" placeholder="Search Movies or TV Shows" />
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
  border-radius: .9rem;
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

    &::placeholder{
      color:#475069;
    }
  }

  svg {
    font-size: 2rem;
  }
`;

export default Search;
