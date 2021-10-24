import './styles';

import GlobalStyles from '../../styles/GlobalStyles';
import { Container } from './styles';
import Header from '../Header';
import InputSearch from '../InputSearch';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <InputSearch />
      </Container>
    </>
  )
}

export default App;
