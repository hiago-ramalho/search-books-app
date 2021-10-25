import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.6rem;

  .pagination {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContainerBook = styled.div`
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

    @media(max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;