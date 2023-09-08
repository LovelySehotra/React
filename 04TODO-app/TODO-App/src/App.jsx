import { useReducer, useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoDispatchContext from './context/TodoDispatchContext'
import TodoReducer from './reducers/TodoReducer'
function App() {
//   const [list,setList] =useState([
//     {id:1,TodoData:'todo 1',finished:false},
//     {id:2,TodoData:'todo 2',finished:true},

// ])
const [list,dispatch] = useReducer(TodoReducer,[])
  return (
   <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
    <AddTodo />
   <TodoList />
    </TodoDispatchContext.Provider>
  
   </TodoContext.Provider>
  )
}

export default App
