import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS});

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTasks, setNewTasks] = useState(TASKS)

  function addNewItem(element) {
    console.log(element);
    setNewTasks([...newTasks, element]);
  }

  let filterTasks = newTasks.filter((task) => {
    if (selectedCategory === 'All'){
      return true;
    }
    else{
      return selectedCategory === task.category;
    }
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewItem}/>
      <TaskList tasks={filterTasks}/>
    </div>
  );
}

export default App;
