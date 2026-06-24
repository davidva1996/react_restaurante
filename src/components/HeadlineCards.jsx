import React from 'react'
import italiano from './assets/restaurante-italiano.avif'
import carne from './assets/restaurante-carne.avif'
import reposteria from './assets/reposteria.avif'

const cards = [
  { key: 'italiano', img: italiano, name: 'Restaurante italiano', sub: 'Disponible desde 8/26' },
  { key: 'carne', img: carne, name: 'Restaurante de carne de res', sub: 'Disponible' },
  { key: 'reposteria', img: reposteria, name: 'Reposteria', sub: 'Disponible' },
];

const HeadlineCards = ({ onOrderClick }) => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {cards.map(card => (
        <div
          key={card.key}
          className='rounded-xl relative group overflow-hidden cursor-pointer'
          onClick={() => onOrderClick && onOrderClick(card.key, card.img)}
        >
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white z-10 transition-all duration-300 group-hover:bg-black/65'>
            <p className='font-bold text-2xl px-4 pt-4'>{card.name}</p>
            <p className='px-4 text-gray-300 text-sm mt-1'>{card.sub}</p>
            <button className='border-white bg-white text-black mx-4 absolute bottom-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200'>
              Ordenar
            </button>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110'
            src={card.img}
            alt={card.name}
          />
        </div>
      ))}
    </div>
  )
}

export default HeadlineCards
