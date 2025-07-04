import React from 'react';

const NavLinks = ({route}) => {
    return (
        <li className='lg:mr-10 hover:bg-amber-400 rounded-lg px-2'><a href={route.path}>{route.name}</a></li>
    );
};

export default NavLinks;