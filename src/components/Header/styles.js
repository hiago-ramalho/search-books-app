import styled from "styled-components";

import ImageLibrary from '../../assets/images/biblioteca-large.jpg';

export const Container = styled.header`
  width: 100%;
  height: 20rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${ImageLibrary});

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  
  img {
    color: #fff;
    margin-left: .6rem;
  }
`;