import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: -2rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;


  .input-search {
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
      width: 30%;
      height: 4rem;
      border-radius: .4rem 0 0 .4rem;
      padding: 0 1rem;

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

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
      padding: 0 1rem;

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background .2s ease-in;
      
      &:hover {
        background: #e94a2f;
      }
      
      &:active {
        background: #d03d16;
      }
    }
  }

  .max-results {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    height: 2.5rem;

    label {
      font-size: 1.4rem;
      font-weight: bold;
    }

    input {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
      width: 3rem;
      height: 100%;
      margin-left: .4rem;
      text-align: center;
    }
  }
`;