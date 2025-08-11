import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
const lookbookCollections = [{
  id: 'summer23',
  title: 'Summer 2023 Collection',
  description: 'Step into summer with our latest collection of lightweight, breathable shoes designed for both style and comfort.',
  image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  link: '/products?collection=summer23'
}, {
  id: 'urban-explorer',
  title: 'Urban Explorer',
  description: 'Navigate the concrete jungle with shoes designed for the modern explorer. Durability meets style in this exclusive capsule collection.',
  image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  link: '/products?collection=urban-explorer'
}];
const lookbookItems = [{
  id: '1',
  image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Classic Leather',
  productId: '3'
}, {
  id: '2',
  image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Air Max Pulse',
  productId: '1'
}, {
  id: '3',
  image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Ultra Boost 5.0',
  productId: '2'
}, {
  id: '4',
  image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Court Vision Low',
  productId: '4'
}, {
  id: '5',
  image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Gel-Kayano',
  productId: '8'
}, {
  id: '6',
  image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Zoom Freak',
  productId: '7'
}];
const LookbookPage = () => {
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Lookbook Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lookbook</h1>
          <p className="text-xl max-w-lg">
            Explore our latest collections and find your perfect style.
          </p>
        </div>
      </section>
      {/* Collections Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {lookbookCollections.map((collection, index) => <div key={collection.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <img src={collection.image} alt={collection.title} className="w-full h-auto rounded-lg" />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {collection.description}
                  </p>
                  <Link to={collection.link}>
                    <Button variant="primary" size="lg">
                      Shop Collection
                    </Button>
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Grid Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Styles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookbookItems.map(item => <Link to={`/products/${item.productId}`} key={item.id} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-end justify-start p-6 transition-all duration-300">
                    <div className="bg-white py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
    </div>;
};
export default LookbookPage;