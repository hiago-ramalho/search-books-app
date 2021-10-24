import { Container } from "./styles";

import IconSearch from "../../assets/images/search.svg"

export default function InputSearch() {
  return (
    <Container>
      <label 
        htmlFor="book-name"
        className="sr-only"
      >
        Digite o nome do livro
      </label>
      <input
        type="text"
        id="book-name"
        placeholder="Digite o nome do livro" 
      />
      <button>
        <img src={IconSearch} alt="Search" />
      </button>
    </Container>
  )
}