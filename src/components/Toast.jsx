import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className='fixed bottom-8 left-1/2 z-[100] toast-enter' style={{ transform: 'translateX(-50%)' }}>
      <div className='bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl'>
        <span className='text-orange-400 text-lg'>✓</span>
        <span className='font-medium whitespace-nowrap'>{toast}</span>
      </div>
    </div>
  );
};

export default Toast;
