import { MdDeleteOutline } from "react-icons/md";

const TodoList = ({ todos, deleteFunction, completeFunction }) => {
    return (
        <>
            <div className="todo-lists">
                {
                    todos.map(ele => (
                        <div key={ele.id} className={`todo ${ele.completed==true ? "completed": ""}`}>
                            <input onChange={completeFunction} value={ele.id} checked={ele.completed} type="checkbox"  />
                            <span>{ele.todoContent}</span>
                            <button  id="delete-button" onClick={()=>{deleteFunction(ele.id)}} >
                                <MdDeleteOutline id="delete"/>
                            </button>
                        </div>
                    ))
                }
             
            </div>
        </>
    )
}
export default TodoList