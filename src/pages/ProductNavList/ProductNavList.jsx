import React from 'react'
import NavProductList from '../../components/NavProductList/NavProductList'
import NavBar from '../../components/header/NavBar'
import ProductListCard from '../../components/Cards/ProductListCard'
import Footer from '../../components/Footer/Footer'


function ProductNavList() {
  return ( <>
      <NavBar />
      <NavProductList />
      <ProductListCard />
      <Footer/>


    </>
  )
}

export default ProductNavList
