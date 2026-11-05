function TodoStats({ todos }) {
  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const active = todos.length - completed;

  return (
    <div className="grid grid-cols-3 gap-3">

      <div className="rounded-xl bg-indigo-50 p-4">
        <p className="text-sm text-indigo-600">Total</p>
        <h2 className="text-2xl font-bold">
          {todos.length}
        </h2>
      </div>

      <div className="rounded-xl bg-amber-50 p-4">
        <p className="text-sm text-amber-600">Active</p>
        <h2 className="text-2xl font-bold">
          {active}
        </h2>
      </div>

      <div className="rounded-xl bg-green-50 p-4">
        <p className="text-sm text-green-600">Completed</p>
        <h2 className="text-2xl font-bold">
          {completed}
        </h2>
      </div>

    </div>
  );
}

export default TodoStats;