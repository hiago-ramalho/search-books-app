import { Container } from "./styles";

const maxItems = 4;
const maxLeft = (maxItems - 1) / 2;

export default function Pagination({ limit, total, offset, setOffSet }) {
  const currentPage = offset ? (offset / limit) + 1 : 1;
  const totalPages = Math.ceil(total / limit);
  const firstButton = Math.max(currentPage - maxLeft, 1)

  function handlePageChange(page) {
    setOffSet((page - 1) * limit)
  }

  return (
    <Container>
      <ul>
        {Array.from({ length: Math.min(maxItems, totalPages) })
          .map((_, index) => index + firstButton)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    </Container>
  )
}