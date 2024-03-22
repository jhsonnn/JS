import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Item from "./Item";

function List() {
  const [value, setValue] = useState(["아침먹기", "점심먹기", "저녁먹기"]);

  function add(value2) {
    console.log(value);
    const newValue = [...value, value2];
    setValue(newValue);
  }

  useEffect(() => {
    add("a");
  }, []);

  return (
    <div>
      <AddTodo add={add} />
      {value.map((element) => (
        <Item value={element} />
      ))}
    </div>
  );
}

export default List;
