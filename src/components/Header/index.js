import { Container } from "./styles";

import IconBook from "../../assets/images/book.svg"

export default function Header(){
  return (
    <Container>
      <h1>Search Books App</h1>

      <img src={IconBook} alt="" />
    </Container>
  )
}