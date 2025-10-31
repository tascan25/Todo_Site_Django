import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoContext } from "../store/store";


function TodoCont({ title, description, status, time }) {

  const {favourite} = useContext(TodoContext);
  
  return (
    <div className="w-[90%] bg-amber-50 rounded-lg shadow-lg shadow-zinc-400">
      <div className="flex flex-col w-full justify-start px-2 py-1 mb-5">
        <div className="flex flex-row justify-between w-full items-center px-4 py-1">
          <h4>{title}</h4>
          <span>{time}</span>
        </div>
        <div className="w-full px-4 flex flex-row justify-start items-center">
          <span>{description}</span>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full items-center px-4 py-2 border-t-2 border-amber-200">
        <div className="flex flex-row justify-around items-center gap-4  ">
          <span>{favourite?<FaHeart/>:<FaRegHeart/>}</span>
          <span><CiEdit/></span>
          <span><MdDelete/></span>
        </div>
        <div>
          <span className="">{status}</span>
        </div>
      </div>
    </div>
  );
}

export default TodoCont;
