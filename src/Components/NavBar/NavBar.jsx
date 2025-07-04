import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/blog', name: 'Blog' },
    { id: 5, path: '/contact', name: 'Contact' }
];
const links = navLinks.map(route => <NavLinks key={route.id} route={route}> </NavLinks>)


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <div className='flex' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 
                    ${open ? 'top-8' : '-top-44'}
                     bg-amber-200 rounded-xl border-2 p-3`}>
                    {
                        links
                    }
                </ul>
                <button className='ml-4 text-3xl font-bold hover:text-cyan-300 cursor-pointer '><span className='text-amber-400'>My</span> <span className='text-blue-700'>Navbar</span></button>
            </div>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='ml-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='ml-10'><a href="/home">Home</a></li>
                <li className='ml-10'><a href="/about">About</a></li>    
                <li className='ml-10'><a href="/blog">Blog</a></li>
                <li className='ml-10'><a href="/contact">Contact</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;