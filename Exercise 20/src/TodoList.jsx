import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return (
      <p className="py-8 text-center text-gray-400">
        No tasks yet. Add your first task!
      </p>
    );
  }

  return (
    <div className="space-y-3">

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}

    </div>
  );
}

export default TodoList;