import { CSSTransition } from "react-transition-group";
import './Modal.css';


const Modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="modal">
        <h1>A Modal</h1>
        <button className="button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
