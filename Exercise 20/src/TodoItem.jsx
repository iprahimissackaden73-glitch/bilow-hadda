function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 accent-indigo-600"
        />

        <span
          className={
            todo.completed
              ? "text-gray-400 line-through"
              : "font-medium text-gray-800"
          }
        >
          {todo.title}
        </span>

      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;