import React from 'react';
import NavLinks from './NavLinks';

const navLinks = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/blog', name: 'Blog' },
  { id: 5, path: '/contact', name: 'Contact' }
];


const NavBar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navLinks.map( route => <NavLinks key={route.id} route={route}> </NavLinks>)
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
        </nav>
    );
};

export default NavBar;