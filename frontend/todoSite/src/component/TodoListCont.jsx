import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../store/store'
import TodoCont from './TodoCont'

function TodoListCont() {
    const {todoArray} = useContext(TodoContext);
  return (
    <div className='w-[90%] mx-auto mt-20 bg-slate-100 rounded-xl p-4 flex flex-col gap-4 mb-10 items-center'>
      {
        todoArray.length>0 ? todoArray.map((todo)=><TodoCont key={todo.id} title={todo.title} description={todo.description} status={todo.is_completed} time={todo.created_at}/>):
        <h4 className='text-center mt-10 text-2xl text-slate-400'>No Todos Available</h4>
      }
    </div>
  )
}

export default TodoListCont
