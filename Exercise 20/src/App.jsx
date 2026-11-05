import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";

function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  // Complete Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">

      <div className="mx-auto max-w-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            My Todo App
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your daily tasks.
          </p>
        </div>

        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-lg">

          <TodoStats todos={todos} />

          <TodoForm onAddTodo={addTodo} />

          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />

        </div>

      </div>

    </div>
  );
}

export default App;