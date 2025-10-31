import { useContext } from "react"
import { TodoContext } from "../store/store"


function AddButtonCont(){

    const {setIsOpen} = useContext(TodoContext);

    function handleOpenModal(){
        setIsOpen(true);
        console.log( "Modal Opened");
    }

    return (
        <section className="flex flex-col justify-center items-center w-[90%] h-[30%] mx-auto mt-30"> 
            <span className="font-sans font-medium text-lg text-slate-400 italic ">Add some Todo for today 😁</span>
            <button className="bg-amber-200 text-zinc-500 px-4 py-1 rounded-lg shadow-lg shadow-zinc-400 
            hover:bg-amber-300 hover:text-zinc-700 transition-all duration-300 mt-5 font-semibold cursor-pointer hover:animate-bounce"
            onClick={handleOpenModal}>
                Write
            </button>
        </section>
    )
}

export default AddButtonCont