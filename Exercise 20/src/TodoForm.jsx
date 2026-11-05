import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your task..."
        className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;