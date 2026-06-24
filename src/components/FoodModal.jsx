import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useCart, priceMap } from '../context/CartContext';

const categoryLabel = { burger: 'Hamburguesa', pizza: 'Pizza', salad: 'Ensalada', chicken: 'Pollo' };

const FoodModal = ({ food, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!food) return null;

  const price = priceMap[food.price] || 0;

  const handleAdd = () => {
    addToCart(food, quantity);
    onClose();
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/60' style={{ backdropFilter: 'blur(4px)' }} />
      <div
        className='relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl modal-enter'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1 border-0 shadow-md hover:bg-gray-100 transition-colors'
        >
          <AiOutlineClose size={20} />
        </button>

        <img
          src={food.image}
          alt={food.name}
          className='w-full h-56 object-cover'
        />

        <div className='p-6'>
          <div className='flex justify-between items-start mb-3'>
            <h2 className='text-2xl font-bold text-gray-800 flex-1 pr-4'>{food.name}</h2>
            <span className='bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-lg'>
              ${price.toFixed(2)}
            </span>
          </div>

          <p className='text-gray-400 text-sm mb-6'>
            {categoryLabel[food.category] || food.category} · Preparación: ~20 min · Entrega gratis
          </p>

          {/* Quantity selector */}
          <div className='flex items-center justify-between mb-6'>
            <span className='font-semibold text-gray-700'>Cantidad</span>
            <div className='flex items-center gap-4 bg-gray-100 rounded-full px-3 py-2'>
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className='border-0 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-lg font-bold text-gray-600 hover:bg-gray-50 transition-colors p-0'
              >
                −
              </button>
              <span className='font-bold text-xl w-6 text-center select-none'>{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className='border-0 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm text-lg font-bold hover:bg-orange-600 transition-colors p-0'
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className='w-full bg-orange-500 text-white border-0 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors duration-200'
          >
            Agregar al carrito · ${(price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
