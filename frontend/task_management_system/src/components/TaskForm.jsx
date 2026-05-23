import { useState } from 'react';

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onTaskCreated({ title: title.trim() });
    setTitle('');
  };

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
