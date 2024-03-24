import React, { useEffect } from 'react'
import NavProductList from '../../components/NavProductList/NavProductList'
import NavBar from '../../components/header/NavBar'
import ProductListCard from '../../components/Cards/ProductListCard'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'




function ProductNavList() {

 
    return (<>

        <NavProductList />
        <Outlet />



    </>
    )
}

export default ProductNavList
