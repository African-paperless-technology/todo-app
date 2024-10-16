import todo_list from "../assets/todo_list.png";
import TodoItems from "./TodoItems";
import { useRef, useState } from "react";

const Todo = () => {
  const inputRef = useRef();
  const errorRef = useRef("Veuillez remplir ce champ svp");
  const [list, setState] = useState([]);
  const [showError, setShowError] = useState(false);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      setShowError(true); // Afficher le message d'erreur
    } else {
      setShowError(false); // Masquer le message d'erreur
      // ... le reste de votre code pour ajouter une nouvelle tâche
    }
    if (inputText != "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };

      setState((valu) => [...valu, newTodo]);
      inputRef.current.value = "";
    }
  };

  const deleteTodo = (id) => {
    setState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ------titre de la todo------ */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_list} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* ------zone de saisie de la todo------ */}
      <div className="flex items-center bg-gray-200 gap-2 mt-7 rounded-full h-9">
        <input
          ref={inputRef}
          type="text"
          className=" bg-transparent border-0 outline-none flex-1 pl-6 pr-2 h-14 placeholder:text-slate-600"
          placeholder="entrez quelque chose"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-9 text-white text-lg font-medium cursor-pointer"
        >
          Ajouter
        </button>
      </div>

      {/* ------message d'erreur------ */}
      {showError && (
        <p className="text-red-300 mt-2 ml-4">{errorRef.current}</p>
      )}

      {/* ------liste de la todo------ */}
      <div>
        {list.map((e, index) => {
          return (
            <TodoItems
              key={index}
              text={e.text}
              id={e.id}
              isComplete={e.isComplete}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
