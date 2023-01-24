import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newItemCategory, setNewItemCategory] = useState('Code');
  const [newItemName, setNewItemName] = useState('');

  function handleNewItemCategory(event){
    setNewItemCategory(event.target.value)
  }

  function handleNewItemName(event){
    setNewItemName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      text: newItemName,
      category: newItemCategory
    }
    onTaskFormSubmit(newItem);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="new-task-form">
      <label>
        Details
        <input onChange={handleNewItemName} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={newItemCategory} onChange={(e)=> handleNewItemCategory(e)} name="category">
          {(categories.filter(category => category !== 'All')).map((category)=>{
              return <option key={uuid()}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
