import styled from "styled-components";
import { BasketIcon, SearchIcon } from "../../constants/images";

const SearchField = () => {
  return (
    <SearchBox className="search-box">
      <img src={SearchIcon} alt="search" className="search-icon" />
      <input type="text" placeholder="Search " />
      <img src={BasketIcon} alt="Basket" className="basket-icon" />
    </SearchBox>
  );
};

const SearchBox = styled.div`
  display: inline-flex;
  gap:1rem;
  align-items: center;
  padding: 1rem 0.5rem;
  background: #ffffff;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;

  .search-icon {
    padding: 0.2rem;
  }

  input {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #232323;
    border: none;
    border-right: 2px solid #F2F2F2;
    outline: none;

    &::placeholder {
      font-size: 14px;
      line-height: 14px;
      color: #232323;
    }
  }

  .basket-icon {
    padding: 0.5rem;
  }
`;

export default SearchField;
