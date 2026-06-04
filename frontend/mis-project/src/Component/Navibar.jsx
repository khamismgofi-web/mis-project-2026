import React from 'react';
import {navItems} from "../constants"
const Navibar  = () => {
    return (
        <nav className="stick top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className='flex justify-center items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <span className='text-xl tracking-tight'> EMS</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item,index ) =>( <li key={index}>
                            <a href={item.href}>{item.label}
                                </a>
                                </li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navibar;