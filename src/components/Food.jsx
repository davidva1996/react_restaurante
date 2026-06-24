import React, { useState, useEffect } from 'react'
import { data } from './data/data.js'
import { priceMap } from '../context/CartContext'

const filters = [
  ['all', 'All'],
  ['burger', 'Hamburguesas'],
  ['pizza', 'Pizza'],
  ['salad', 'Ensaladas'],
  ['chicken', 'Pollo'],
];

const prices = ['$', '$$', '$$$', '$$$$'];

const Food = ({ searchQuery, onFoodClick }) => {
  const [foods, setFoods] = useState(data);
  const [activeType, setActiveType] = useState('all');
  const [activePrice, setActivePrice] = useState(null);

  useEffect(() => {
    let filtered = data;
    if (activeType !== 'all') filtered = filtered.filter(i => i.category === activeType);
    if (activePrice) filtered = filtered.filter(i => i.price === activePrice);
    if (searchQuery) filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFoods(filtered);
  }, [activeType, activePrice, searchQuery]);

  const typeClass = (active) =>
    `flex-shrink-0 whitespace-nowrap transition-colors duration-200 border-orange-600 ${
      active ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-600 hover:text-white'
    }`;

  const priceClass = (active) =>
    `flex-shrink-0 flex flex-col items-center leading-tight py-2 transition-colors duration-200 border-orange-600 ${
      active ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-600 hover:text-white'
    }`;

  return (
    <div id='food-section' className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top de nuestra comida
      </h1>

      {searchQuery && (
        <p className='text-center text-gray-400 mt-2 mb-2'>
          Resultados para: <span className='font-semibold text-gray-700'>"{searchQuery}"</span>
        </p>
      )}

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mt-4 gap-3'>

        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 mb-1'>Filter Type</p>
          <div className='flex overflow-x-auto scrollbar-hide gap-1 pb-1 lg:flex-wrap'>
            {filters.map(([val, label]) => (
              <button
                key={val}
                onClick={() => { setActiveType(val); setActivePrice(null); }}
                className={typeClass(activeType === val && !searchQuery)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-1'>Filter Price</p>
          <div className='flex overflow-x-auto scrollbar-hide gap-1 pb-1 lg:flex-wrap'>
            {prices.map(price => (
              <button
                key={price}
                onClick={() => setActivePrice(p => p === price ? null : price)}
                className={priceClass(activePrice === price)}
              >
                <span className='font-bold text-sm'>{price}</span>
                <span className='text-xs font-medium opacity-80'>${priceMap[price]?.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* No results */}
      {foods.length === 0 ? (
        <div className='text-center py-20 text-gray-400'>
          <p className='text-5xl mb-4'>😕</p>
          <p className='text-xl font-medium'>No encontramos resultados</p>
          <p className='text-sm mt-2'>Intenta con otro filtro o búsqueda</p>
        </div>
      ) : (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map(item => (
            <div
              key={item.id}
              onClick={() => onFoodClick && onFoodClick(item)}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer group overflow-hidden'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-[200px] object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 rounded-t-lg flex items-center justify-center'>
                  <span className='bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform'>
                    Ver detalle
                  </span>
                </div>
              </div>
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold truncate pr-2'>{item.name}</p>
                <p className='flex-shrink-0'>
                  <span className='bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold'>
                    ${priceMap[item.price]?.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Food
