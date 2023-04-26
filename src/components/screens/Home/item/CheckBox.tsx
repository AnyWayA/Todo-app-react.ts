import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import cn from 'classnames'

type TypeCheckBoxProps = {
    isComplited: boolean
}

//const CheckBox = ({ isComplited }: {isComplited: boolean}) => {
const CheckBox = ({ isComplited }: TypeCheckBoxProps) => {
    return (
        <div className={cn('border-2 rounded-lg border-pink-500 w-5 h-5 mr-2',
            { 'bg-pink-500': isComplited }
        )}>
            {isComplited &&
                <AiOutlineCheck className='text-gray-900' />
            }
        </div>


    );
};

export default CheckBox;
