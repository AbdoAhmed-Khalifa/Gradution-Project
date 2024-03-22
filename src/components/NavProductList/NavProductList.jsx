import React from 'react'
import NavItems from './NavItems';



function NavProductList() {

    const NavList = [
        "Electronics",
        "Best Sellers",
        "Mobiles & Accessories",
        "Computer & Accessories",
        "TVs",
        "Laptops",
        "Cameras & Accessories",
        "Headphones",
        "Speakers",
        "Wearable Technology",
        "Home Entertainment Systems"
    ];


    return (
        <>
            <section>
                <nav className='mb-2'>
                    <ul className='flex gap-4 bg-[#fafafa]  '>
                        {NavList.map((item) => (<NavItems key={item} item={item}/>))}
                    </ul>
                </nav>
            </section>



        </>
    )
}

export default NavProductList
