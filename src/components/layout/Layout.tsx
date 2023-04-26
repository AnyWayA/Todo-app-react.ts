import React, {ReactNode} from 'react';

interface ILayout {
    children: ReactNode
}

const Layout = ({children}: ILayout): JSX.Element => {
    return (
        <div className='bg-gray-900 h-screen text-white py-2'>
            {children}
        </div>
    );
};

export default Layout;
