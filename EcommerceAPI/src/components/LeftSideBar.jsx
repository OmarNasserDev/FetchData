import React, { useEffect, useRef, memo, useState } from 'react'
import { getAllCategories } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const LeftSideBar = ({ checkedCategory }) => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categoriesData)

    const [selectedCate, setSelectedCate] = useState('All')
    const categoryData = []


    const cate = () => {
        categoryData.push('All')
        for (let i = 0; i <= 5; i++) {
            categoryData.push(categories.data[i])
        }
    }
    cate()
    const handleChecked = (e) => {
        const newCategory = e.target.value

        setSelectedCate(newCategory)
        checkedCategory(newCategory)
    }


    useEffect(() => {

        dispatch(getAllCategories())
    }, [dispatch])


    return (
        <div className='w-48 h-[33.7rem] border-gray-700 border-2 shadow-inner shadow-gray-800  mt-5 p-5 text-center fixed top-6 right-0 '>
            <h1 className='mb-2'>Categories</h1>

            {
                categories.isLoading ? "LOADING..." :
                    categoryData.map((category, index) => (
                        <div className='grid grid-cols-12 ' key={index}>
                            <input type="radio" id={index} value={category} onChange={e => handleChecked(e, index)} name='category' />
                            <label htmlFor={index} key={index} className='grid col-span-10' >{category}</label>
                        </div>

                    ))

            }

        </div>
    )
}

export default memo(LeftSideBar)
