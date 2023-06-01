import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


const Navbar = () => {
  /*Usestate paso 1 */ 
  const [nav,setnav] = useState(false)
  
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

     {/* left side*/}
      <div className='flex items-center'>
     {/* usestate paso 2 */}
      <div onClick={() => setnav(!nav)} className='cursor-pointer'>
      <AiOutlineMenu size={30}/>
      </div>

      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
  
      Andys <span className='font-bold'>Eats</span>
      </h1>
    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
      <p className='bg-black text-white rounded-full p-2'>Delivery</p>
      <p className='p-2'>Pickup</p>

    </div>
      </div>

      {/*Search Input*/}

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' />
      </div>

      {/* Cart Button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/> Cart
      </button>

      {/* Mobile Menu*/ }
      {/*Usestate paso 3 */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0'></div>: '' }
      

      {/* Slide Menu*/}
        {/*Usestate paso 4 */}
      <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          {/*Usestate paso 5 */}
        <AiOutlineClose onClick={()=>setnav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>

        <h2 className='text-2xl p-4'>Andys <span className='font-bold'>Eats</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer'> <TbTruckDelivery size={25} className='mr-4' /> Ordenes</li>
            <li className='text-xl py-4 flex cursor-pointer'> <MdFavorite size={25} className='mr-4' /> Favoritos</li>
            <li className='text-xl py-4 flex cursor-pointer'> <FaWallet size={25} className='mr-4' /> Cartera</li>
            <li className='text-xl py-4 flex cursor-pointer'> <MdHelp size={25} className='mr-4' /> Ayuda</li>
            <li className='text-xl py-4 flex cursor-pointer'> <AiFillTag size={25} className='mr-4' /> Promociones</li>
            <li className='text-xl py-4 flex cursor-pointer'> < BsFillSaveFill size={25} className='mr-4' /> Ordenes</li>
            <li className='text-xl py-4 flex cursor-pointer'> < FaUserFriends size={25} className='mr-4' /> Invitar amigos</li>
          </ul>
        </nav>
        
      </div>
      
    </div>
   
  )
}

export default Navbar