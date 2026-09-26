import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
    const [todos,setTodos]=useState([]);
    const [taskText,setTaskText]=useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res=>res.json())
        .then(data=>setTodos(data))
        .catch((error)=>console.error('Error',error));
    },[]);

    const handleAddTodo = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTaskText('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center py-2">
          <h3 className="m-0 fw-bold">Todo List</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleAddTodo} className="d-flex mb-3 gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit" className="btn btn-success px-4">
              Add
            </button>
          </form>
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-check-input mt-0"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      color: todo.completed ? '#6c757d' : 'inherit',
                    }}
                  >
                    {todo.title}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App ;