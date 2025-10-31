import TodoCont from "./component/TodoCont"
import Home from "./component/Home"
import TagComp from "./component/TagComp"
import AddButtonCont from "./component/AddButtonCont"
import TodoListCont from "./component/TodoListCont"
import WholeTodoModal from "./component/WholeTodoCont"

function App() {

  return (
    <div>
      <Home/>
      <TagComp/>
      <AddButtonCont/>
      <TodoListCont/>
      <WholeTodoModal/>
    </div>
  )
}

export default App
