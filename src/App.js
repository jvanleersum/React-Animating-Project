import { useState } from "react";
import { Transition } from "react-transition-group";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const blockHandler = () => {
    setShowBlock((prevState) => !prevState);
  };

  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button onClick={blockHandler} className="Button">
        Toggle
      </button>
      <br />
      <Transition
        in={showBlock}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        onEnter={console.log("onEnter")}
        onEntering={console.log("onEntering")}
        onEntered={console.log("onEntered")}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          />
        )}
      </Transition>
      <Transition in={showModal} timeout={300} mountOnEnter unmountOnExit>
        {(state) => <Modal show={state} closed={closeModalHandler} />}
      </Transition>
      {showModal && <Backdrop show={showModal} closed={closeModalHandler} />}
      <button className="Button" onClick={showModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
