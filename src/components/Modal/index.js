import { Container, Overlay } from "./styles";
import ReactDOM from 'react-dom';

import IconClose from '../../assets/images/close.svg'

export default function Modal({ children, onCLoseModal }) {

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <div className="close-button">
          <button type="button" onClick={onCLoseModal} >
            <img src={IconClose} alt="Close" />
          </button>
        </div>

        <div className="card-modal-book">
          {children}
        </div>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  )
}