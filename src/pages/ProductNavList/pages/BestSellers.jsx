import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/slices/Products'
import ProductListCard from '../../../components/Cards/ProductListCard'

export default function BestSellers() {
    const products = useSelector(state => state.Products?.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <article className='flex flex-col items-center justify-center h-56 text-center text-white' style={{ background: 'radial-gradient(circle at center, #078092, #078092, #078092, #078092)' }}>
                <h1 className='text-6xl font-bold'>Amazon Best Sellers</h1>
                <p className='text-lg'>Our most popular products based on sales. Updated frequently.</p>
            </article>

            <div className='grid grid-cols-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 dark:bg-[#15141c]'>
                {products.map(item => (
                    <ProductListCard
                        key={item.id} 
                        id={item.id}
                        name={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        currency={'EGY'}
                    />
                ))}
            </div>
        </>
    )
}
