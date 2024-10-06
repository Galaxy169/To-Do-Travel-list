import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);

  function handleItem(item) {
    setitems((items) => [...items, item]);
  }

  function handleDelete(id) {
    console.log(id);
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setitems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleClear() {
    if (window.confirm("Do you want to clear everything?")) setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleItem={handleItem} />
      <PackingList items={items} onHandleDelete={handleDelete} onhandleToggleItem={handleToggleItem} onHandleClear={handleClear} />
      <Stats items={items} />
    </div>
  );
}
