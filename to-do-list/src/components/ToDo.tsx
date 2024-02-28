import { Link } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";
import { ToDo as TToDo } from "../types/toDo.type";

interface ToDoProps {
  toDo: TToDo;
}

function ToDo({ toDo }: ToDoProps) {
  const { toDos, setToDos } = useToDos();

  const handleClickDelete = (toDoId: number) => {
    //console.log(toDoId);
    //기존 값(기존 배열) 을 훼손하지 않으면서, 값이 삭제된 새로운 배열을 만들어야 함
    //배열.filter => 새로운 배열을 돌려줌
    //기존 배열(toDoList)을 filter 돌려서 제거하고 다시 돌려줌
    //아무 값 삭제 안함
    // toDoList.filter((toDo) => true);
    //모든 값 삭제함
    // toDoList.filter((toDo) => false);
    //그러면 누른 id가 우리가 입력 받은 id와 같지 않은 것만 살려줌

    //setToDos안에 함수를 넣으면 현재 toDos를 꺼내올 수 있음
    setToDos((toDos) =>
      toDos.filter((toDo) => {
        return toDo.id !== toDoId;
      })
    );

    //삭제 버튼 누른 거에 해당하는 투두를 정말로 목록에서 제거
    //그렇다면 todoList를 변경해야함
    //setTodoList 사용!
    //setToDoList(//새로운 값으로 바뀌어진 모습)
    //const newToDoList: ToDoList = [];

    //setToDoList(newToDoList);
  };

  const handleClickToggleIsComplete = (toDoId: number) => {
    //기존 배열에서 toDoId에 해당하는 투두를 꺼내서
    //isComplete의 값을 true로 변경
    //투두의 아이디가 입력받은 toDoId와 같은 걸 꺼내서 targetToDo에 저장
    const targetToDo = toDos.find((toDo) => toDo.id === toDoId);
    if (!targetToDo) return;

    //targetToDo.isComplete = true;
    targetToDo.isComplete = !targetToDo.isComplete;
    const newToDoList = [...toDos];

    setToDos(newToDoList);
  };

  return (
    <Link to={`/todos/${toDo.id}`}>
      <span
        style={{
          textDecoration: toDo.isComplete ? "line-through" : "none",
        }}
      >
        {toDo.title}
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClickDelete(toDo.id);
        }}
      >
        삭제
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClickToggleIsComplete(toDo.id);
        }}
      >
        {toDo.isComplete ? "완료취소" : "완료"}
      </button>
    </Link>
  );
}

export default ToDo;
