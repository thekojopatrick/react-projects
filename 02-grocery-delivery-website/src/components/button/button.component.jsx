import React from "react";
import styled from "styled-components";

export const Button = ({ children, type }) => {
  return (
    <ButtonBox
      className={
        type === "btn-primary"
          ? "btn-primary"
          : type === "btn-secondary" && "btn-secondary"
      }
    >
      {children}
    </ButtonBox>
  );
};
const ButtonBox = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #363636;
  text-align: center;
  padding: 1.2rem 1.8rem;

  &:hover {
    color: #f86061;

    svg {
      box-shadow: 0px 2px 50px -1px rgba(0, 0, 0, 0.4);
    }
  }

  &.btn-primary {
    color: #fffafa;
    background: #f86061;
    border-radius: 12px;

    &:hover {
      color: #fffafa;
      background: #e13b3b;
    }
  }

  &.btn-outline {
    border: 1.5px solid #eedcdc;
    box-sizing: border-box;
    border-radius: 12px;
  }

  svg {
    display: grid;
    place-content: center;
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50vh;
    padding: 1.6rem;
    fill: #f86061;
    background: #ffffff;
    box-shadow: 0px 20px 49px -10px rgba(0, 0, 0, 0.08);
  }

  &.btn-secondary {
    color: #f86061;
    border: 1.5px solid #f86061;
    border-radius: 12px;

    &:hover {
      color: #fffafa;
      background: #e13b3b;
    }
  }
`;
