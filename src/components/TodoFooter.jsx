const TodoFooter = ({ itemsCount, clearCompleted }) => {
    
    return (
        <>  
            <div className="todo-footer">
                <label className="item-count">{`${itemsCount} item${itemsCount>1?"s":""} left`}</label>
            <button onClick={clearCompleted} className="clear">clear completed</button>
            </div>
        </>
    )
}

export default TodoFooter