import React, { useState } from 'react';
import About from './pages/about';
import Navbar from './pages/navbar';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact/>
        }
        if (currentPage === 'Resume') {
            return <Resume/>
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
        <div className='main m-2'>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
};
