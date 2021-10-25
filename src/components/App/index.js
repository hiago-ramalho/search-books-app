import { useEffect, useState } from "react";
import axios from "axios";

import Header from '../Header';
import InputSearch from '../InputSearch';
import Book from '../Book';

import GlobalStyles from '../../styles/GlobalStyles';
import IconSearch from "../../assets/images/search.svg"
import ImageBook from '../../assets/images/illustration-book.jfif'

import { Container, ContainerBook } from './styles';
import Pagination from "../Pagination";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [content, setContent] = useState();

  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(0)

  async function handleSearchBook() {
    try {
      const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm ? searchTerm : 'books'}&maxResults=${maxResults}&startIndex=${startIndex}`)
        .then(resp => resp.data.items)
        .catch(error => console.log("Error", error))

      setBooks(data);
    } catch {
      alert('Não foi possível achar nenhum livro com esse nome.')
      window.location.reload();
    }
  }

  useEffect(() => {
    (async () => {
      const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=books&maxResults=10&startIndex=0`)
        .then(resp => resp.data)

      setContent(data);
      setBooks(data.items)
    })();
  }, [])


  function handleSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  function handleMaxResults(event) {
    setMaxResults(event.target.value)
  }

  function handleStartIndex() {
    setStartIndex(prevState => prevState + 10)
    handleSearchBook()
  }

  return (
    <>
      <GlobalStyles />
      <Container>

        <Header />

        <InputSearch>
          <div className="input-search">
            <label
              htmlFor="book-name"
              className="sr-only"
            >
              Digite o nome do livro
            </label>
            <input
              type="text"
              id="book-name"
              value={searchTerm}
              placeholder="Digite o nome do livro"
              onChange={handleSearchTerm}
            />
            <button>
              <img src={IconSearch} alt="Search" onClick={handleSearchBook} />
            </button>
          </div>

          <div className="max-results">
            <label htmlFor="max-results">Max Results: </label>
            <input
              value={maxResults}
              type="text"
              className="maxResults"
              name="max-results"
              onChange={handleMaxResults}
            />
          </div>
        </InputSearch>

        <ContainerBook>
          {books.map((book) => (
            <Book key={books.id ? books.id : Math.random()}>
              <img src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ImageBook} alt="" />
              <div className="text-content">
                <h3>{book.volumeInfo.title}</h3>
                <p className="description">{book.volumeInfo.authors}</p>
                <button>Saiba mais</button>
              </div>
            </Book>
          ))}

        </ContainerBook>

        {content && (
          <Pagination
            limit={maxResults}
            total={40}
            setOffSet={handleStartIndex}
          />
        )}

      </Container>
    </>
  )
}

export default App;
