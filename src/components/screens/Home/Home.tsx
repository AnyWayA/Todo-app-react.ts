import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';


export interface ITodos {
    _id: string,
    title: string,
    isComplited: boolean
}

const data: ITodos[] = [
    {
        _id: '111',
        title: 'Finish the essay collaboration',
        isComplited: false,
    },
    {
        _id: '222',
        title: 'Read next chapter of the book',
        isComplited: false,
    },
    {
        _id: '333',
        title: 'Make a todo-app',
        isComplited: true,
    },
    {
        _id: '444',
        title: 'Make a new section',
        isComplited: false,
    },
    {
        _id: '555',
        title: 'Cook a cake',
        isComplited: false,
    },
]

export type TypeChangeAndDeleteFunc = (value: string) => void;

const Home = (): JSX.Element => {
    const [todos, setTodos] = useState(data);

    const changeTodo: TypeChangeAndDeleteFunc = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)

        current!.isComplited = !current!.isComplited

        setTodos(copy)
    }

    const removeTodo: TypeChangeAndDeleteFunc = (id) => {
        const newList = [...todos].filter(t => t._id !== id)
        setTodos(newList)
    }

    const addTodo = (title: string): void => {
        setTodos([{
            _id: title,
            title: title,
            isComplited: false
        }, ...todos
        ])
    }



    return (
        <div>
            <h1 className='text-center font-bold mb-6 pt-2'>Tasks To-Do</h1>

            <CreateTodoField addTodo={addTodo} />

            {todos.some(todo => (todo.isComplited === false)) ?
                todos.map(todo => (todo.isComplited === false &&
                    <TodoItem
                        todo={todo}
                        key={todo._id}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />))
                : <div className='mt-1 ml-20 text-sm'>No actual tasks now</div>
            }

            <h2 className='mt-6 mb-5 pt-2 text-center'>Done</h2>

            {todos.some(todo => (todo.isComplited === true)) ?
                todos.map(todo => (todo.isComplited === true &&
                    <TodoItem
                        todo={todo}
                        key={todo._id}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />))
                : <div className='mt-1 ml-20 text-sm'>No tasks have been done yet</div>
            }
        </div>
    );
};

export default Home;
