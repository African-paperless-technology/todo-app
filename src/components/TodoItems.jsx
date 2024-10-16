import checked from "../assets/checked.png";
import delete_icon from "../assets/delete_icon.png";

const TodoItems = ({ text, id, isComplete, deleteTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={checked} alt="" className="w-8" />
        <p className="ml-4 text-[17px] text-slate-500">{text}</p>
      </div>
      <div>
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={delete_icon}
          alt=""
          className="w-3.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItems;
