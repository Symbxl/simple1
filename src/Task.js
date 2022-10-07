import React from "react";
import { types } from "./App";

function Task({ id, task, isDone, handleTask }) {
  console.log("render", id);
  return (
    <div key={id} style={{ display: "flex", padding: 5 }}>
      <h3>
        {task} - {isDone ? "Done" : "Pending"}
      </h3>
      <button
        onClick={() =>
          handleTask({
            type: types.complete,
            payload: {
              id,
              done: true
            }
          })
        }
      >
        Done
      </button>
    </div>
  );
}

export default React.memo(Task);
