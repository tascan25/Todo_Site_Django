import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TodoContext } from "../store/store";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function WholeTodoModal() {
  const { isOpen, handleCreateTodo, setIsOpen } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleCreateTodo(data);
    reset(); // Reset the form after submission
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      {isOpen && (
        <AnimatePresence>
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

             <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center "
              onClick={(e) => e.stopPropagation()}
            >
               
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center w-[50%] h-[60%] bg-amber-200 p-1 rounded-lg shadow-lg shadow-zinc-400 my-auto"
              >
                {/* register your input into the hook by invoking the "register" function */}
                <motion.div
                className="w-[90%] h-[50%] bg-slate-50 flex flex-col justify-center items-center gap-10 rounded-lg"
                >
                  <div className="flex flex-col w-[80%]">
                    <label>Title</label>
                    <input
                      defaultValue="john"
                      {...register("title", {
                        required: { value: true, message: "Title is required" },
                        minLength: {
                          value: 5,
                          message: "Title should be at least 5 characters long",
                        },
                        maxLength: {
                          value: 30,
                          message: "Title should be at most 30 characters long",
                        },
                      })}
                      className="bg-slate-100"
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                  </div>

                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="flex flex-col w-[80%]">
                    <label>Description</label>
                    <input
                      {...register("description", {
                        required: true,
                        minLength: {
                          value: 100,
                          message:
                            "Description should be at least 100 characters long",
                        },
                        maxLength: {
                          value: 300,
                          message:
                            "Description should be at most 500 characters long",
                        },
                      })}
                      className="bg-slate-100"
                    />
                    {errors.description && (
                      <span>{errors.description.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col w-[80%]">
                    <label>Is Completed</label>
                    <input
                      defaultValue={"yet to be completed"}
                      {...register("is_completed", {
                        required: true,
                        minLength: {
                          value: 3,
                          message: "value should be at least 3 characters long",
                        },
                        maxLength: {
                          value: 20,
                          message: "value should be at most 20 characters long",
                        },
                      })}
                      className="bg-slate-100"
                    />
                  </div>

                  <div className="flex flex-col w-[80%]">
                    <label>Is Favourite</label>
                    <input
                      defaultValue={"yet to be marked as favourite"}
                      {...register("is_favourite", {
                        required: true,
                        minLength: {
                          value: 10,
                          message:
                            "value should be at least 100 characters long",
                        },
                        maxLength: {
                          value: 50,
                          message: "value should be at most 50 characters long",
                        },
                      })}
                      className="bg-slate-100"
                    />
                  </div>

                  <input type="submit" />
                </motion.div>
              </motion.form>
            </motion.div>
          </>
        </AnimatePresence>
      )}
    </>
  );
}
