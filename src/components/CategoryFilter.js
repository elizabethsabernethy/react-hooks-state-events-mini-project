import React from "react";
import {v4 as uuid} from 'uuid';

function CategoryFilter({categories, onSelectCategory, selectedCategory}) {
  
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{
        const selected = (category === selectedCategory) ? null : 'selected'
        return <button key={uuid()}  className={selected} onClick={()=> onSelectCategory(category)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
