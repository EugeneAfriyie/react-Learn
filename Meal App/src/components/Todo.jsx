import { useState } from 'react';
import '../style.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() === '') return; // Prevent empty todos
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Date.now(),
      })
    );
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Submit</button>

        <ul className="todolist">

          {todos.map(({ text, id }) =>( 
              <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>

         ) )}

        </ul>
      </div>
    </>
  );
};

export default Todo;