import Header from '../components/Header.jsx'
import LeftSideBar from '../components/LeftSideBar.jsx'
import Card from '../components/Card.jsx'

import React, { useEffect, useState, memo, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../redux/actions.js'

const Products = () => {


    const dispatch = useDispatch()
    const products = useSelector(state => state.productsData.data)
    const isLoading = useSelector(state => state.productsData.isLoading)

    const [newData, setNewData] = useState([])
    const reciveCheckedCategory = (data) => {
        if (data === 'All') {
            setNewData(products)
        } else {
            const filterdProducts = products.filter(product => product.category === data)
            setNewData(filterdProducts)
        }
    }


    useEffect(() => {

        dispatch(getAllProducts())

    }, [dispatch])
    return (
        <div className='bg-slate-50'>
            <Header />
            <div className='w-full h-full grid grid-cols-5 pl-2 pt-10'>
                <LeftSideBar checkedCategory={reciveCheckedCategory} />
                <div className='grid col-span-4 grid-cols-4 pb-2 '>
                    {
                        isLoading ? (<h1 className='flex items-center justify-center'>Loading</h1>) : (

                            newData.map((product, index) =>
                                <Card image={product.images[0]} title={product.title} description={product.description} price={product.price} discount={product.discountPercentage} uniquekey={index} />
                            )
                        )

                    }
                </div>

            </div>
        </div >
    )
}

export default memo(Products)
