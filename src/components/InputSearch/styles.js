import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  label.sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input {
    border: 1px solid;
    width: 30%;
    height: 4rem;
    border-radius: .4rem 0 0 .4rem;
    padding: 0 1rem;

    @media(max-width: 992px) {
      width: 40%;
    }

    @media(max-width: 768px) {
      width: 60%;
    }

    @media(max-width: 576px) {
      width: 80%;
    }
  }

  button {
    background: #f07167;
    height: 4rem;
    border-radius: 0 .4rem .4rem 0;
    border: 1px solid;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter .2s ease-in;
    
    &:hover {
      filter: contrast(1.1);
    }

    &:active {
      filter: brightness(.9);
    }
  }
`;