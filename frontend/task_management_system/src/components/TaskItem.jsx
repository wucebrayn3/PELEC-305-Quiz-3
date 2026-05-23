function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.is_completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.is_completed}
        onChange={() => onToggle(task.id, { is_completed: !task.is_completed })}
      />
      <span className="task-title">{task.title}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>×</button>
    </div>
  );
}

export default TaskItem;
