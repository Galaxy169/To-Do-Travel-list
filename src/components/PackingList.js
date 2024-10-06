import { useState } from "react";
import  PackList  from "./PackList";

export default function PackingList({ items, onHandleDelete, onhandleToggleItem, onHandleClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <PackList item={item} key={item.id} onHandleDelete={onHandleDelete} onhandleToggleItem={onhandleToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(() => e.target.value)}>
          <option value="input">Sort by Alphabet</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onHandleClear}>Clear</button>
      </div>
    </div>
  );
}
