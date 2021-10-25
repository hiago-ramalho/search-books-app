import styled from "styled-components";

export const Container = styled.div`

margin-bottom: 3rem;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  li {

    button {
      font-weight: bold;
      padding: .5rem 1rem;
      background: #f07167;

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

    & + li {
      margin-left: 1rem;
    }
  }
`;