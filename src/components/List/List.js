import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./List.module.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => [...prevState, prevState.length + 1]);
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={item}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes.addListItem,
        enterActive: classes.addListItemActive,
        exit: classes.removeListItem,
        exitActive: classes.removeListItemActive,
      }}
    >
      <li className={classes.listItem} onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component="ul" className={classes.list}>
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
