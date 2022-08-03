import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <h1>React Animations</h1>
      {showModal && <Modal show={showModal} closed={closeModalHandler}/> }
      {showModal && <Backdrop show={showModal} closed={closeModalHandler}/> }
      <button className="Button" onClick={modalHandler}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
