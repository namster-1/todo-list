import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './todoForm'



function TodoList() {
    const [todos,setTodos] = useState([]);

    const showTodo = (todo) =>{
        const newTodos=[todo,...todos];
        setTodos(newTodos)
    }
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo=>todo.id!==id)
        setTodos(removeArr);
    }

    const updateTodo = (todoId,newValue)=>{
        setTodos(prev => prev.map(item=>item.id===todoId?newValue:item));
    }

    return (
        <div>
            <h1>What is plan for today</h1>
        <TodoForm onSubmit={showTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
