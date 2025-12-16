import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div >
            <div className='h-14'>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;