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

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button onClick={blockHandler} className="Button">
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={300} mountOnEnter unmountOnExit>
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
      <Modal closed={closeModalHandler} show={showModal}/>
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
