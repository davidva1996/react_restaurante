import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdLocationOn } from 'react-icons/md'
import { useCart } from '../context/CartContext'

const modeInfo = {
  delivery: {
    icon: TbTruckDelivery,
    text: 'Entrega estimada',
    highlight: '25 – 40 min',
    sub: 'Bogotá, Colombia',
  },
  pickup: {
    icon: MdLocationOn,
    text: 'Recoge en',
    highlight: '15 – 20 min',
    sub: 'Calle 45 #12-34, Zona Rosa',
  },
};

const Navbar = ({ onCartOpen, onSearchChange }) => {
  const [nav, setnav] = useState(false)
  const [mode, setMode] = useState('delivery')
  const { totalItems } = useCart()

  const info = modeInfo[mode]
  const InfoIcon = info.icon

  return (
    <div className='border-b border-gray-100 shadow-sm'>

      {/* Main navbar row */}
      <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

        {/* Left side */}
        <div className='flex items-center gap-2'>
          <div onClick={() => setnav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>

          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Andys <span className='font-bold'>Eats</span>
          </h1>

          {/* Delivery / Pickup toggle */}
          <div className='hidden lg:flex items-center bg-gray-100 rounded-full p-1 text-[14px] gap-1'>
            <button
              onClick={() => setMode('delivery')}
              className={`rounded-full px-4 py-2 border-0 font-semibold transition-all duration-300 ${
                mode === 'delivery'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => setMode('pickup')}
              className={`rounded-full px-4 py-2 border-0 font-semibold transition-all duration-300 ${
                mode === 'pickup'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Pickup
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={20} />
          <input
            className='bg-transparent p-2 w-full focus:outline-none'
            type='text'
            placeholder={mode === 'delivery' ? 'Buscar platos para delivery...' : 'Buscar platos para recoger...'}
            onChange={e => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>

        {/* Cart Button – desktop */}
        <button
          onClick={onCartOpen}
          className='bg-black text-white hidden md:flex items-center py-2 rounded-full relative'
        >
          <BsFillCartFill size={20} className='mr-2' /> Cart
          {totalItems > 0 && (
            <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold leading-none'>
              {totalItems > 9 ? '9+' : totalItems}
            </span>
          )}
        </button>

        {/* Mobile overlay */}
        {nav && (
          <div
            className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'
            onClick={() => setnav(false)}
          />
        )}

        {/* Slide Menu */}
        <div className={nav
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 flex flex-col'
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-20 duration-300 flex flex-col'
        }>
          <AiOutlineClose
            onClick={() => setnav(false)}
            size={30}
            className='absolute right-4 top-4 cursor-pointer'
          />

          <h2 className='text-2xl p-4 mt-2'>Andys <span className='font-bold'>Eats</span></h2>

          {/* Mobile mode toggle */}
          <div className='px-4 mb-2'>
            <div className='flex items-center bg-gray-100 rounded-full p-1 gap-1'>
              <button
                onClick={() => setMode('delivery')}
                className={`flex-1 rounded-full py-2 border-0 text-sm font-semibold transition-all duration-300 ${
                  mode === 'delivery' ? 'bg-black text-white' : 'text-gray-500'
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => setMode('pickup')}
                className={`flex-1 rounded-full py-2 border-0 text-sm font-semibold transition-all duration-300 ${
                  mode === 'pickup' ? 'bg-black text-white' : 'text-gray-500'
                }`}
              >
                Pickup
              </button>
            </div>
          </div>

          <nav className='flex-1 overflow-y-auto'>
            <ul className='flex flex-col p-4 text-gray-800'>
              {[
                [TbTruckDelivery, 'Ordenes'],
                [MdFavorite, 'Favoritos'],
                [FaWallet, 'Cartera'],
                [MdHelp, 'Ayuda'],
                [AiFillTag, 'Promociones'],
                [BsFillSaveFill, 'Ordenes guardadas'],
                [FaUserFriends, 'Invitar amigos'],
              ].map(([Icon, label]) => (
                <li key={label} className='text-xl py-4 flex cursor-pointer hover:text-orange-500 transition-colors duration-200'>
                  <Icon size={25} className='mr-4 flex-shrink-0' />
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile cart button */}
          <div className='p-4 border-t'>
            <button
              onClick={() => { setnav(false); onCartOpen && onCartOpen(); }}
              className='w-full bg-orange-500 text-white border-0 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors'
            >
              <BsFillCartFill size={20} />
              Carrito
              {totalItems > 0 && (
                <span className='bg-white text-orange-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Info ribbon – changes with mode */}
      <div className='max-w-[1640px] mx-auto px-5 pb-2 hidden lg:flex items-center gap-2 text-sm text-gray-500 transition-all duration-300'>
        <InfoIcon size={16} className='text-orange-500 flex-shrink-0' />
        <span>{info.text}:</span>
        <span className='font-semibold text-gray-800'>{info.highlight}</span>
        <span className='text-gray-400'>·</span>
        <span>{info.sub}</span>
      </div>

    </div>
  )
}

export default Navbar
