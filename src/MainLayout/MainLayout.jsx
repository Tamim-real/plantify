import React from 'react';
import Navbar from '../Pages/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <div className='sticky top-0 bg-white shadow z-50'>
                <Navbar />
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;