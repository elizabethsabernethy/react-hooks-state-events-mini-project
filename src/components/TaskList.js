import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks}) {

  function removeTask(event){
    (event.target.parentNode).remove()
  }

  return (
    <div className="tasks">
      {tasks.map((task)=>{
        return <Task key={uuid()} category={task.category} text={task.text} remove={removeTask}/>
      })}
    </div>
  );
}

export default TaskList;
