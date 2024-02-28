import { ChangeEventHandler, useState } from "react";
import ToDoList from "../components/ToDoList";
import { useToDos } from "../contexts/todos.context";

function HomePage() {
  const { toDos, setToDos } = useToDos();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickAdd = () => {
    const newToDo = {
      id: toDos.length + 1,
      title, //title: title,
      content, //content: content,
      isCompolete: false,
    };

    //value를 변경할 때는 setValue사용
    const newToDoList = [...toDos, newToDo];

    setToDos(newToDoList);
    setTitle("");
    setContent("");
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    // if (e.target.value !== "1") {
    //   return;
    // }
    // input에 들어있는 값을 setTitile 함
    setTitle(e.target.value);
  };
  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <hr />

      <input value={title} onChange={handleChangeTitle} placeholder='title' />
      <textarea
        value={content}
        onChange={handleChangeContent}
        placeholder='content'
      />
      <button onClick={handleClickAdd}>추가하기</button>
      <hr />

      <ToDoList />
    </div>
  );
}

export default HomePage;
