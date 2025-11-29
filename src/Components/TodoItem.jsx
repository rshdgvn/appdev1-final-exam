import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../Reducer/todosSlice";

function TodoItem({ todo, theme}) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo ${theme}-todo`}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </li>

      <button
        className={`check-btn ${theme}-button`}
        onClick={handleToggle}
        type="button"
      >
        <i className="fas fa-check" />
      </button>

      <button
        className={`delete-btn ${theme}-button`}
        onClick={handleDelete}
        type="button"
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}

export default TodoItem;
