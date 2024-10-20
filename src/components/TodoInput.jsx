import { useState } from "react"
import { FaPlus } from "react-icons/fa6";


const TodoInput = ({ setNewTodo }) => {
    const [value, setValue] = useState("")
    const getValue = (event) => {
        setValue(event.target.value)
    }
    const addContent = () => {
        if(!value)return
        setNewTodo(value)
        setValue("")
    }
    return (
        <>
            <div id = "todo-input-wrapper">
                <input value={value} onChange={getValue} placeholder="Enter new note content here" id="input-tag" />
                <FaPlus id = "icon" onClick={addContent} />
            </div>
            
        </>
    )
}
export default TodoInput