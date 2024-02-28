// 1.만든다
// 2.사용한다
// 3.범위 정해서 내려준다

import { createContext, useContext, useState } from "react";
import { ToDo } from "../types/toDo.type";

type ToDosContextType = {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const initialValue: ToDosContextType = { toDos: [], setToDos: () => {} };
// 만든다
const ToDosContext = createContext(initialValue);

// 사용한다
// const 이것이컨텍스트다 = useContext(ToDosContext);
export const useToDos = () => useContext(ToDosContext);

interface ToDosProviderProps {
  children: React.ReactNode;
}

//범위 정해서 내려준다.
export function ToDosProvider({ children }: ToDosProviderProps) {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <ToDosContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDosContext.Provider>
  );
}
