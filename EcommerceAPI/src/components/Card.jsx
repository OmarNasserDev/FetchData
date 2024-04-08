import React from 'react'

const Card = (props) => {
    return (
        <div className='w-56 h-96 border-2 bg-white mt-5 rounded-xl ' key={props.uniquekey}>
            <div className=''><img src={props.image} alt="product image" className='w-full h-56 object-fill' /></div>
            <div className='flex flex-col justify-center items-center p-2 bg-slate-100'>
                <h1 className='w-full text-center  text-sm'>{props.title}</h1>
                <p className='w-full text-sm truncate overflow-hidden'>{props.description}</p>
                <div className='w-full flex flex-col items-center'>
                    <div className='w-full flex justify-between mt-5'>
                        <span>{props.price}$</span>
                        <span className='line-through text-gray-500'> {props.discount}%</span>
                    </div>
                    <div className='w-full flex itmes-center justify-between mt-5 text-white'>
                        <button className='w-[49%] bg-blue-950 shadow-lg shadow-blue-600'>Cart</button>
                        <button className='w-[49%] bg-blue-950 shadow-lg shadow-blue-600'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
