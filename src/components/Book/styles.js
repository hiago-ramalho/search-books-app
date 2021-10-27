import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .8rem;
  background: #fed7b488;
  border-radius: .4rem;

  position: relative;

  @media (min-width: 576px) {
    width: 100%;
  }
  
  img {
    width: 80%;
    height: 25rem;
  }

  div.text-content {
    width: 80%;
    margin-bottom: 2rem;

    h3 {
      font-size: 1.8rem;
      margin-top: 1rem;
    }

    p.description {
      font-style: italic;
      color: #6c757d;
      margin-top: .4rem;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
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