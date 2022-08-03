import classes from "./Modal.module.css";

const Modal = (props) => {
  const modalClasses = `${classes.modal} ${
    props.show === "entering"
      ? classes.modalOpen
      : props.show === "exiting"
      ? classes.modalClosed
      : ""
  }`;

  return (
    <div className={modalClasses}>
      <h1>A Modal</h1>
      <button className="button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
