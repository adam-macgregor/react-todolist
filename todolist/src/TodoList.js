import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            newTodo: "",
            todos: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }    
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.state.newTodo === "") { return }
        this.setState(prevState => {
            const updatedTodoList = prevState.todos
            updatedTodoList.push({id: (prevState.todos.length + 1), text: [prevState.newTodo], completed: false})
            return {
                newTodo: "",
                todos: updatedTodoList 
            }
        })
    }
 
    render() {

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleCheck={this.handleCheck}/>)

        return (
            <div className="todo-list">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="myInput"
                        type="text"
                        name="newTodo"
                        placeholder="Add new todo"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <button>Add todo</button>
                </form>
                <div>
                    {todoItems}
                </div>
            </div>
        )
    }
}


export default TodoList