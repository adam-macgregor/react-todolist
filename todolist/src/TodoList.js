import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            newTodo: "",
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.deleteCompleted = this.deleteCompleted.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
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

    addTodo() {
        if(this.state.newTodo === "") { return }
        this.setState(prevState => {
            const updatedTodoList = prevState.todos
            updatedTodoList.push({id: (prevState.todos.length + 1), text: prevState.newTodo, completed: false})
            return {
                newTodo: "",
                todos: updatedTodoList 
            }
        })
    }

    handleDelete(id) {
        this.setState(prevState => {
            let todoList = []
            prevState.todos.forEach(item => {
                if(item.id !== id) {
                    todoList.push(item)
                }
            })
            return{
                todos: todoList
            }
        })
    }

    deleteCompleted() {
        this.setState(prevState => {
            let incompleteTodoList = []
            prevState.todos.forEach(item => {
                if(item.completed === false){
                    incompleteTodoList.push(item)
                }
            })
            return {
                todos: incompleteTodoList
            }
        })
    }
 
    render() {

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleCheck={this.handleCheck} handleDelete={this.handleDelete}/>)

        return (
            <div className="todo-list">
                <div>
                    <input
                        id="myInput"
                        type="text"
                        name="newTodo"
                        placeholder="New todo"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.addTodo}>Add todo</button>
                    {this.state.todos.some(item => {return item.completed}) ? <button onClick={this.deleteCompleted}>Delete all completed todos</button> : null}
                </div>
                <div>
                    {todoItems}
                </div>
            </div>
        )
    }
}


export default TodoList