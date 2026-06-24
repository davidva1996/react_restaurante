import React from 'react'
import { categories } from './data/data'

const Categoria = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Menu Items
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-orange-50 hover:shadow-md transition-all duration-300 group'
          >
            <h2 className='font-bold sm:text-xl group-hover:text-orange-600 transition-colors duration-300'>
              {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.name}
              className='w-20 group-hover:scale-110 transition-transform duration-300'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categoria
