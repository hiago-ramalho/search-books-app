import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ContainerBooks = styled.div`
  width: 90%;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;

  @media(max-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }

  @media(max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 590px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 480px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
