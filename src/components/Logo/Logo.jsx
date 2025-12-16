import React from 'react';

import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex items-end'>
                <h3 className="text-3xl font-extrabold ">Swift<span className='text-[#eb7b25]'>Drop</span></h3>
            </div>
        </Link>
    );
};

export default Logo;