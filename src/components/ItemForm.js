import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({items, setItems}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const onItemFormSubmit = (e) => {
    e.preventDefault()
    const newItem = {id: uuid(), name: name, category: category}
    const newItems = [...items, newItem]
    setItems(newItems)
    console.log(newItems)
    setName("")
    setCategory("")

  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
