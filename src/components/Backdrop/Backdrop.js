import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const backdropClasses = `${classes.backdrop} ${
    props.show ? classes.backdropOpen : classes.backdropClosed
  }`;
  return <div className={backdropClasses} onClick={props.closed}></div>;
};

export default Backdrop;
