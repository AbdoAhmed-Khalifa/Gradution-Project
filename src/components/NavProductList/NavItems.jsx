import React from 'react';
import { Link } from 'react-router-dom';


export default function NavItems({ item }) {
    return (
        <li className='hover:font-[#e47911] '>
            <div className='hover:border-b-2 hover:border-[#e47911] p-2 hover:text-[#e47911] font-semibold text-sm '>
            <Link className='' to={`/${item}`}>{item}</Link>
            </div>
        </li>
    );
}

