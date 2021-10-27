import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background: #fed7b488;
  border-radius: .4rem;

  position: relative;
  
  img {
    width: 100%;
    height: 25rem;
  }

  div.text-content {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.8rem;
      margin-top: 1rem;
    }

    p.description {
      max-width: 18rem;
      font-style: italic;
      color: #6c757d;
      margin-top: .4rem;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  button {
    background: transparent;

    color: #f07167;
    border-bottom: 1px solid #f07167;
    border-radius: 0;
    position: absolute;
    bottom: .6rem;
  }
`;