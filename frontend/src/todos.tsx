import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Todo {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetchingTodos, setErrorFetchingTodos] = useState<any>();
    
    useEffect(()=> {
            axios.get("/api/todos/").then((res) => {setTodos(res.data);
                setIsLoading(false)}).catch((err) => setErrorFetchingTodos(err))
                console.log("todos", todos)
                console.log("error", errorFetchingTodos)
    },[])
    
    return isLoading? <p>Loading...</p> : (
        <div>
            {todos.map((todo) => (<div key={todo.id}>{todo.name}</div>))}
        <p>{errorFetchingTodos}</p>
        </div>
    )
}