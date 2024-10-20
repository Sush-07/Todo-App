import { useState } from "react"

const tabs = [
    {
        value: "all",
        label : "All"
        
    },
    {
        value: "active",
        label: "Active"

    },
    {
        value: "completed",
        label: "Completed"
    }
]

const TodoTabs = ({ active, changeTab }) => {
    
  

    return (
        <>
            <div className="tabs">
                {
                    tabs.map(ele => (
                        <button onClick={() => {
                            changeTab(ele.value)
                        }} key={ele.value} className={`tab ${ele.value==active ? "active" : "" }`} >{ele.label }</button>
                    ))
                }
        </div>
        </>
    )
}

export default TodoTabs