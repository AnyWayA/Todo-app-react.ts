import React from 'react';
import CheckBox from './CheckBox';
import cn from 'classnames'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { TypeChangeAndDeleteFunc } from '../Home';
import { ITodos } from '../Home';


type TypeTodoItemProps = {
    todo: ITodos;
    changeTodo: TypeChangeAndDeleteFunc;
    removeTodo: TypeChangeAndDeleteFunc;
}

const TodoItem = ({ todo, changeTodo, removeTodo }: TypeTodoItemProps) => {
    return (
        <div
            className='flex px-2 py-2 rounded-xl bg-gray-800 mb-2 mx-20'
        >
            <button
                className='flex items-center'
                onClick={() => changeTodo(todo._id)}
            >
                <CheckBox isComplited={todo.isComplited} />

                <span className={cn({
                    'line-through': todo.isComplited
                })}>
                    {todo.title}
                </span>
            </button>

            <button
                className='ml-auto'
                onClick={() => removeTodo(todo._id)}>
                <BsFillTrash3Fill className='text-gray-600 hover:text-red-700 transition-colors ease-in-out' />
            </button >

        </div>
    );
};

export default TodoItem;
