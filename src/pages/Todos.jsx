import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Todos = () => {
  const [todos, setTodos] = useState(null);

  const getTodos = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await result.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <h2 className="main__title">Todos</h2>
      {
        todos 
        ? (
          <div className="products">
            {todos.map((todo) => (
              <div 
                key={todo.id} 
                className="products__car" 
                style={{ borderColor: todo.completed ? 'green' : 'red' }} /* Зеленый если выполнено, красный если нет */
              >
                <h3>{todo.title}</h3>
                <p>Статус: {todo.completed ? 'Выполнено' : 'В процессе'}</p>
              </div>
            ))}
          </div>
        ) 
        : <Loader />
      }
    </div>
  )
}

export default Todos;