import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ add }) {
  const [value, setValue] = useState("");
  const [item, setItem] = useState("");

  function handleOnChange(e) {
    setValue(e.target.value);
    //console.log(e.target.value);
  }
  function handleClick() {
    setItem(value);
    //console.log(value);
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={value}
        onChange={handleOnChange}
        placeholder='Add todo...'
      ></input>
      <button onClick={add} className='submitButton'>
        Submit
      </button>
    </div>
  );
}

export default AddTodo;
