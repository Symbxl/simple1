import { useReducer } from "react";
import "./styles.css";
import Task from "./Task";

export const types = {
  complete: "complete"
};
export default function App() {
  const inicialState = [
    { id: 0, author: "Cali", task: "one", isDone: false },
    { id: 1, author: "Cali", task: "two", isDone: false },
    { id: 2, author: "Cali", task: "three", isDone: false }
  ];

  function completeTaskMap(action) {
    return (item) => {
      if (item.id === action.payload.id) {
        return { ...item, isDone: action.payload.done };
      }
      return item;
    };
  }
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case types.complete: {
        return state.map(completeTaskMap(action));
      }
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducerFunction, inicialState);

  return (
    <div>
      {data.map((item) => (
        <Task
          handleTask={dispatch}
          isDone={item.isDone}
          id={item.id}
          task={item.task}
        />
      ))}
    </div>
  );
}
