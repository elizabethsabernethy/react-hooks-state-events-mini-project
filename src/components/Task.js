import React from "react";

function Task({category, text, remove}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={remove} className="delete">X</button>
    </div>
  );
}

export default Task;
