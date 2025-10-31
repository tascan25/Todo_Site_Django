import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todoArray: [],
  isCompleted: false,
  favourite: false,
  isOpen: false,
  setIsOpen: () => {},
  handleCreateTodo: () => {},
});

function TodoContextProvider({ children }) {
  const [todoArray, setTodoArray] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchTodo() {
      try {
        const result = await fetch("http://127.0.0.1:8000/api/todo/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await result.json();
        setTodoArray(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodo();
  }, []);

  async function handleCreateTodo(newTodo) {
    try {
      const result = await fetch("http://127.0.0.1:8000/api/todo/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const data = await result.json();
      setTodoArray((prev) => [...prev, data]); // Use `data` instead of `newTodo` to reflect server response
      setIsOpen(false);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  }

  return (
    <TodoContext.Provider
      value={{ isCompleted, favourite, todoArray, isOpen, setIsOpen, handleCreateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;