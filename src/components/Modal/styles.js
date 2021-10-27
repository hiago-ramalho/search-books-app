import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

`;

export const Container = styled.div`
  width: 40%;
  position: relative;

  background: #fdfcdc;
  border-radius: .4rem;
  padding: 2.4rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }

  .close-button {
    position: absolute;
    top: .6rem;
    right: .6rem;

    button {
      background: transparent;
    }

  }

  .card-book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title-book {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }

    img {
      width: 50%;
      margin-bottom: 1.6rem;
    }

    .author-book {
      font-size: 1.8rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
      margin-bottom: 1rem;
    }

    .description {
      width: 100%;
      text-align: left;
      margin-bottom: 1rem;
      color: #6d6875;
      font-size: 1.2rem;
      font-style: italic;

      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .book-pages {
      width: 100%;
    }
  }
`;