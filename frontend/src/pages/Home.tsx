import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import ProductCard from '../components/UI/ProductCard';
import InstagramFeed from '../components/UI/InstagramFeed';
const featuredProducts = [{
  id: '1',
  name: 'Air Max Pulse',
  price: 159.99,
  image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'Running',
  isNew: true
}, {
  id: '2',
  name: 'Ultra Boost 5.0',
  price: 189.99,
  image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'Running'
}, {
  id: '3',
  name: 'Classic Leather',
  price: 99.99,
  image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'Lifestyle',
  isNew: true
}, {
  id: '4',
  name: 'Court Vision Low',
  price: 79.99,
  image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  category: 'Basketball'
}];
const collections = [{
  id: 'running',
  name: 'Running Collection',
  description: 'Engineered for performance and designed for everyday wear, our latest running shoes collection is here.',
  image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  link: '/products?category=running'
}, {
  id: 'basketball',
  name: 'Basketball Collection',
  description: 'Dominate the court with our latest basketball shoes designed for ultimate performance.',
  image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  link: '/products?category=basketball'
}];
const HomePage = () => {
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Step Into Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            Discover the latest collection of premium footwear designed for
            performance and style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/lookbook">
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} isNew={product.isNew} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="primary">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Collections Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop Collections
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.map(collection => <div key={collection.id} className="relative overflow-hidden rounded-lg group">
                <img src={collection.image} alt={collection.name} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white text-lg mb-6 max-w-md">
                    {collection.description}
                  </p>
                  <Link to={collection.link}>
                    <Button variant="primary">Shop Collection</Button>
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Instagram Feed Section */}
      <InstagramFeed />
      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-8">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input type="email" placeholder="Your email address" className="px-4 py-3 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white min-w-[250px]" />
              <Button variant="primary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;