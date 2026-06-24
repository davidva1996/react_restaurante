import { TbTruckDelivery } from 'react-icons/tb';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-12'>
      <div className='max-w-[1640px] mx-auto px-4 py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

          {/* Brand */}
          <div>
            <h2 className='text-2xl font-bold mb-3'>
              Andys <span className='text-orange-500'>Eats</span>
            </h2>
            <p className='text-gray-400 text-sm leading-relaxed mb-5'>
              La mejor comida a domicilio, directo desde los mejores restaurantes de la ciudad hasta la puerta de tu casa.
            </p>
            <div className='flex gap-4'>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition-colors duration-200'>
                <FaInstagram size={22} />
              </a>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition-colors duration-200'>
                <FaFacebook size={22} />
              </a>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition-colors duration-200'>
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className='font-bold text-lg mb-5'>Empresa</h3>
            <ul className='space-y-3 text-gray-400 text-sm'>
              {['Sobre Andys Eats', 'Trabaja con nosotros', 'Restaurantes asociados', 'Blog y noticias'].map(link => (
                <li key={link} className='hover:text-orange-500 cursor-pointer transition-colors duration-200'>{link}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold text-lg mb-5'>Contacto</h3>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li className='flex items-center gap-2'>
                <span className='text-orange-500'>📞</span> +57 300 123 4567
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-orange-500'>✉️</span> hola@andyseats.com
              </li>
              <li className='flex items-center gap-2'>
                <TbTruckDelivery className='text-orange-500 flex-shrink-0' size={18} />
                Envíos 7 días a la semana
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-orange-500'>⏰</span> 10:00 am – 11:00 pm
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-sm'>
          <p>© 2024 Andys Eats. Todos los derechos reservados.</p>
          <div className='flex gap-5'>
            <span className='hover:text-orange-500 cursor-pointer transition-colors'>Privacidad</span>
            <span className='hover:text-orange-500 cursor-pointer transition-colors'>Términos</span>
            <span className='hover:text-orange-500 cursor-pointer transition-colors'>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
