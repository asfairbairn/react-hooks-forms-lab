import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All") return true;

    else return item.category === selectedCategory;

  });

  const searchItemsToDisplay = itemsToDisplay.filter((item)=> {
    if (search === ""){
      return item
    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })



  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
