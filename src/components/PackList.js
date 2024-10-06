export default function PackList({ item, onHandleDelete, onhandleToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onhandleToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleDelete(item.id)}>❌</button>
    </li>
  );
}
