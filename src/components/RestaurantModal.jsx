import { AiOutlineClose, AiFillStar } from 'react-icons/ai';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';

const restaurantDetails = {
  italiano: {
    name: 'Restaurante Italiano',
    description: 'Auténtica cocina italiana con pastas caseras, pizzas al horno de leña y los mejores risottos de la ciudad. Una experiencia culinaria que te transportará directo a Italia.',
    rating: 4.8,
    reviews: 324,
    time: '25-35 min',
    minOrder: '$15.00',
    address: 'Calle 45 #12-34, Zona Rosa',
    tags: ['Pasta', 'Pizza', 'Risotto', 'Vino', 'Antipasto'],
  },
  carne: {
    name: 'Restaurante de Carne',
    description: 'Los mejores cortes de res a la parrilla, con el punto exacto que prefieras. Carnes importadas y de producción local seleccionadas por nuestros expertos parrilleros.',
    rating: 4.9,
    reviews: 512,
    time: '30-45 min',
    minOrder: '$20.00',
    address: 'Av. Steak 23 #56-78, Norte',
    tags: ['Parrilla', 'Ribeye', 'T-Bone', 'BBQ', 'Churrasco'],
  },
  reposteria: {
    name: 'Repostería Artesanal',
    description: 'Postres artesanales elaborados con ingredientes frescos cada día. Tortas, cupcakes, macarons y mucho más para endulzar tu día con lo mejor de la pastelería francesa.',
    rating: 4.7,
    reviews: 198,
    time: '20-30 min',
    minOrder: '$10.00',
    address: 'Carrera 7 #89-12, Centro Histórico',
    tags: ['Tortas', 'Cupcakes', 'Macarons', 'Helados', 'Brownies'],
  },
};

const RestaurantModal = ({ restaurant, image, onClose }) => {
  const info = restaurantDetails[restaurant];
  if (!info) return null;

  const stars = Math.round(info.rating);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/60' style={{ backdropFilter: 'blur(4px)' }} />
      <div
        className='relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl modal-enter'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1 border-0 shadow-md hover:bg-gray-100 transition-colors'
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Hero image */}
        <div className='relative h-52'>
          <img src={image} alt={info.name} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/75 to-transparent' />
          <div className='absolute bottom-4 left-4 text-white'>
            <h2 className='text-2xl font-bold'>{info.name}</h2>
            <div className='flex items-center gap-1 mt-1'>
              {Array.from({ length: stars }).map((_, i) => (
                <AiFillStar key={i} className='text-yellow-400' size={16} />
              ))}
              <span className='text-white font-semibold text-sm ml-1'>{info.rating}</span>
              <span className='text-white/60 text-sm ml-1'>({info.reviews} reseñas)</span>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <p className='text-gray-500 text-sm leading-relaxed mb-4'>{info.description}</p>

          {/* Tags */}
          <div className='flex gap-2 flex-wrap mb-5'>
            {info.tags.map(tag => (
              <span
                key={tag}
                className='bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full border border-orange-200 font-medium'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Info grid */}
          <div className='bg-gray-50 rounded-xl p-4 space-y-3 mb-5'>
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <MdLocationOn className='text-orange-500 flex-shrink-0' size={18} />
              <span>{info.address}</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <MdAccessTime className='text-orange-500 flex-shrink-0' size={18} />
              <span>Tiempo de entrega estimado: <span className='font-semibold text-gray-800'>{info.time}</span></span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <span className='text-orange-500 font-bold text-base flex-shrink-0'>$</span>
              <span>Pedido mínimo: <span className='font-semibold text-gray-800'>{info.minOrder}</span></span>
            </div>
          </div>

          <button
            onClick={onClose}
            className='w-full bg-orange-500 text-white border-0 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors duration-200'
          >
            Hacer pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
