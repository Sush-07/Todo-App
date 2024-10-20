import backgroundImage from "./assets/todobackground.svg"
import TodoInput from "./components/TodoInput"
import TodoTabs from  "./components/TodoTabs"
import "./App.css"
import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter"

const getTodosFromLocalStorage = () => {
  let todos = localStorage.getItem("todos")
  if (todos) {
    return JSON.parse(todos)
  }
  return []
}

const App = () => {
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const [activeTab, setActiveTab] = useState("all")
  const [todos, setTodos] = useState(getTodosFromLocalStorage)
  useEffect(saveToLocalStorage, [JSON.stringify(todos)])
  
  const handlAddNewTodo = (content) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      todoContent: content

    }
    setTodos((previousTodos) => {
      const newTodos = [...previousTodos]
      newTodos.push(newTodo)
      return newTodos
    })
  }
  const handDelete = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((ele) => 
        ele.id != id
      )
    })
  }
  const handleCompleted = (e) => {
    setTodos((previousTodos) => {
      const newTodos = [...previousTodos]
      const data = newTodos.find((ele) => ele.id == e.target.value)
      data.completed = e.target.checked
      return newTodos
      
    })
    
  }
  const filteredTodos = todos.filter((ele) => {
    if(activeTab === "all") return true
    if (activeTab === "completed") {
      return ele.completed 
    } 
    if (activeTab === "active") {
      return !ele.completed
    }

  })
  const clearCompleted = () => {
    setTodos((previousTodos) => {
      return previousTodos.filter((ele) =>
        !ele.completed 
      )
    })
    
  }
  const itemsCount = todos.filter((item) => {
   return !item.completed
  }).length
  return (
    <>
      <img id="background-image" src={backgroundImage}/>
      <div id="todo-wrapper">
        <TodoTabs active={activeTab} changeTab={setActiveTab} />
        <TodoInput setNewTodo={handlAddNewTodo} />
        <TodoList completeFunction={handleCompleted} deleteFunction={handDelete} todos={filteredTodos} />
        <TodoFooter itemsCount={itemsCount} clearCompleted={clearCompleted } />
      </div>
    </>
  )
}

export default App







