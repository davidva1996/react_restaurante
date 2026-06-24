import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { useCart, priceMap } from '../context/CartContext';

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <div
      className='fixed inset-0 z-50 flex items-end sm:items-center sm:justify-end'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/50' style={{ backdropFilter: 'blur(3px)' }} />
      <div
        className='relative bg-white w-full sm:w-[420px] sm:h-full flex flex-col shadow-2xl rounded-t-2xl sm:rounded-none modal-enter'
        style={{ maxHeight: '85vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex justify-between items-center p-5 border-b flex-shrink-0'>
          <h2 className='text-xl font-bold flex items-center gap-2'>
            <BsFillCartFill className='text-orange-500' size={22} />
            Mi Carrito
          </h2>
          <button onClick={onClose} className='border-0 p-1 rounded-full hover:bg-gray-100 transition-colors'>
            <AiOutlineClose size={22} />
          </button>
        </div>

        {/* Items */}
        <div className='flex-1 overflow-y-auto p-5 space-y-3'>
          {cartItems.length === 0 ? (
            <div className='text-center py-16'>
              <BsFillCartFill size={52} className='text-gray-200 mx-auto mb-4' />
              <p className='text-gray-400 text-lg font-medium'>Tu carrito está vacío</p>
              <p className='text-gray-300 text-sm mt-1'>Agrega algunos platos deliciosos</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded-lg flex-shrink-0'
                />
                <div className='flex-1 min-w-0'>
                  <p className='font-semibold text-sm truncate text-gray-800'>{item.name}</p>
                  <p className='text-orange-500 font-bold text-sm mt-1'>
                    ${(priceMap[item.price] * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className='flex items-center gap-2 flex-shrink-0'>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className='border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center p-0 text-sm font-bold hover:bg-gray-200 transition-colors'
                  >
                    −
                  </button>
                  <span className='w-5 text-center font-bold text-sm select-none'>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className='border border-orange-500 bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center p-0 text-sm font-bold hover:bg-orange-600 transition-colors'
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='border-0 text-gray-300 hover:text-red-500 p-1 ml-1 transition-colors flex-shrink-0'
                >
                  <AiOutlineClose size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className='p-5 border-t bg-white flex-shrink-0'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-gray-500 font-medium'>Total</span>
              <span className='text-2xl font-bold text-gray-800'>${totalPrice.toFixed(2)}</span>
            </div>
            <button className='w-full bg-orange-500 text-white border-0 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors duration-200'>
              Ordenar ahora
            </button>
            <button
              onClick={clearCart}
              className='w-full mt-2 border-0 text-gray-400 text-sm py-2 hover:text-red-500 transition-colors duration-200'
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
