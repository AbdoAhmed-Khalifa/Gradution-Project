import React from 'react'
import NavItems from './NavItems';



function NavProductList() {

    const NavList = [
        { title: "Electronics", path: "electronics" },
        { title: "Best Sellers", path: "best-sellers" },
        { title: "Mobiles & Accessories", path: "mobiles-accessories" },
        { title: "Computer & Accessories", path: "computer-accessories" },
        { title: "TVs", path: "tvs" },
        { title: "Laptops", path: "laptops" }, 
        { title: "Cameras & Accessories", path: "cameras-accessories" },
        { title: "Headphones", path: "headphones" },
        { title: "Speakers", path: "speakers" }, 
        { title: "Wearable Technology", path: "wearable-technology" }, 
        { title: "Home Entertainment Systems", path: "home-entertainment-systems" } 
    ];

    return (
        <>
            <section>
                <nav className='mb-2'>
                    <ul className='flex gap-4 bg-[#fafafa]  '>
                        {NavList.map((item) => (<NavItems key={item.title} item={item}  />))}
                    </ul>
                </nav>
            </section>



        </>
    )
}

export default NavProductList
