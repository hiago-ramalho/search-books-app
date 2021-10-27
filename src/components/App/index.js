import { useEffect, useState } from "react";
import axios from "axios";

import Header from '../Header';
import InputSearch from '../InputSearch';
import Book from '../Book';

import GlobalStyles from '../../styles/GlobalStyles';
import IconSearch from "../../assets/images/search.svg"
import ImageBook from '../../assets/images/illustration-book.jfif'

import { Container, ContainerBooks } from './styles';
import Pagination from "../Pagination";
import Modal from "../Modal";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [content, setContent] = useState();

  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idBook, setIdBook] = useState('');

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

  function handleOpenModal(book) {
    setIdBook(book.id)
    setIsModalOpen(true);
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

        <ContainerBooks>
          {books.map((book) => (
            <Book
              key={book.id}
            >
              <img src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ImageBook} alt="" />
              <div className="text-content">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors}</p>
                <p className="description">{book.volumeInfo.description}</p>
                <button onClick={() => handleOpenModal(book)} >Saiba mais</button>
              </div>
            </Book>
          ))}

          {isModalOpen && (
            <Modal onCLoseModal={() => setIsModalOpen(false)}>
              {books.map((book) => (
                idBook === book.id && (
                  <div className="card-book" key={book.id}>
                    <h1 className="title-book">{book.volumeInfo.title}</h1>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Thumbnail Book" />
                    <p className="author-book">
                      {book.volumeInfo.authors ? `Autor: ${book.volumeInfo.authors}` : ''}
                    </p>
                    <p className="description">
                      {book.volumeInfo.description ? `"${book.volumeInfo.description}"` : ''}
                    </p>
                    <span className="book-pages">
                      {book.volumeInfo.pageCount ? `Páginas: ${book.volumeInfo.pageCount}` : ''}
                    </span>
                  </div>

                )
              ))}
            </Modal>
          )}

        </ContainerBooks>

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
