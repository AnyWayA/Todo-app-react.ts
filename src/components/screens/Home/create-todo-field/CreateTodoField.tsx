import React, { useState} from "react";
import { IoIosAdd } from 'react-icons/io';

type CreateTodoFieldProps = {
    addTodo: (value: string) => void;
  };

const CreateTodoField = ({ addTodo }: CreateTodoFieldProps): JSX.Element => {
    const [value, setValue] = useState('')

    const clear = (value: string): void => {
        addTodo(value)
        setValue('')
    }

    return (
        <div
            className='flex items-center px-2 py-2 rounded-xl border-2 border-gray-800 mx-auto w-60 mb-4'
            onKeyDown={e => e.key === 'Enter' && clear(value)}
        >

            <button
                onClick={() => clear(value)}
                className='text-gray-900 bg-pink-500 border-2 rounded-lg border-pink-500 w-5 h-5 mr-2' >
                <IoIosAdd
                    />
            </button>

            <input
                type="text"
                placeholder="New task"
                className="flex items-center bg-transparent mx-auto border-none outline-none"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};

export default CreateTodoField;
