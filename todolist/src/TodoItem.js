import React from 'react'

function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        
            <label className="todo-item">
                <input type="checkbox" checked={props.item.completed} onChange={() => props.handleCheck(props.item.id)}/>
                <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
                <button onClick={() => props.handleDelete(props.item.id)}>Delete</button>
            </label>
           
    )
}

export default TodoItem