import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Categoria from './components/Categoria';
import Footer from './components/Footer';
import FoodModal from './components/FoodModal';
import CartModal from './components/CartModal';
import RestaurantModal from './components/RestaurantModal';
import Toast from './components/Toast';

function App() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <div className='App'>
        <Navbar
          onCartOpen={() => setCartOpen(true)}
          onSearchChange={setSearchQuery}
        />
        <Banner />
        <HeadlineCards onOrderClick={(key, img) => setRestaurant({ key, img })} />
        <Food
          searchQuery={searchQuery}
          onFoodClick={setSelectedFood}
        />
        <Categoria />
        <Footer />

        {selectedFood && (
          <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
        )}
        {cartOpen && (
          <CartModal onClose={() => setCartOpen(false)} />
        )}
        {restaurant && (
          <RestaurantModal
            restaurant={restaurant.key}
            image={restaurant.img}
            onClose={() => setRestaurant(null)}
          />
        )}

        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;
