import { useState } from "react";
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
    <li
      key={index}
      className={classes.listItem}
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  console.log(items);

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      {/* <p>{items}</p> */}
      <ul className={classes.list}>{listItems}</ul>
    </div>
  );
};

export default List;
