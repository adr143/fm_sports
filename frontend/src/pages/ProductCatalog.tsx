import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/UI/ProductCard';
import { FilterIcon, XIcon } from 'lucide-react';

// Mock product data
// const products = [{
//   id: '1',
//   name: 'Air Max Pulse',
//   price: 159.99,
//   image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Running',
//   isNew: true,
//   colors: ['Black', 'White', 'Red'],
//   sizes: [7, 8, 9, 10, 11]
// }, {
//   id: '2',
//   name: 'Ultra Boost 5.0',
//   price: 189.99,
//   image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Running',
//   colors: ['Black', 'Blue', 'Grey'],
//   sizes: [7, 8, 9, 10, 11, 12]
// }, {
//   id: '3',
//   name: 'Classic Leather',
//   price: 99.99,
//   image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Lifestyle',
//   isNew: true,
//   colors: ['White', 'Black', 'Beige'],
//   sizes: [6, 7, 8, 9, 10, 11]
// }, {
//   id: '4',
//   name: 'Court Vision Low',
//   price: 79.99,
//   image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Basketball',
//   colors: ['White', 'Black'],
//   sizes: [8, 9, 10, 11, 12]
// }, {
//   id: '5',
//   name: 'Free Run 5.0',
//   price: 119.99,
//   image: 'https://images.unsplash.com/photo-1608379743498-63e07f7cee1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Running',
//   colors: ['Grey', 'Blue', 'Black'],
//   sizes: [7, 8, 9, 10, 11]
// }, {
//   id: '6',
//   name: 'Superstar',
//   price: 89.99,
//   image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6b00b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Lifestyle',
//   colors: ['White', 'Black', 'Gold'],
//   sizes: [6, 7, 8, 9, 10]
// }, {
//   id: '7',
//   name: 'Zoom Freak',
//   price: 129.99,
//   image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Basketball',
//   isNew: true,
//   colors: ['Black', 'Purple', 'White'],
//   sizes: [8, 9, 10, 11, 12, 13]
// }, {
//   id: '8',
//   name: 'Gel-Kayano',
//   price: 149.99,
//   image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//   category: 'Running',
//   colors: ['Blue', 'Black', 'Grey'],
//   sizes: [7, 8, 9, 10, 11]
// }];

// const products: { id: string; 
//   name: string; 
//   price: number; 
//   image: string; 
//   category: string; 
//   colors: string[]; 
//   sizes: number[]; 
// }[] = [];

// const categories = ['All', 'Running', 'Basketball', 'Lifestyle'];
// const sizes = [6, 7, 8, 9, 10, 11, 12, 13];
// const colors = ['Black', 'White', 'Red', 'Blue', 'Grey', 'Beige', 'Purple', 'Gold'];
// const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Name: A to Z'];

const ProductCatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Shop data (Categories, Sizes, Colors)
  const [categories] = useState(['All', 'Running', 'Basketball', 'Lifestyle']);
  const [sizes] = useState([6, 7, 8, 9, 10, 11, 12, 13]);
  const [colors] = useState(['Black', 'White', 'Red', 'Blue', 'Grey', 'Beige', 'Purple', 'Gold']);
  const [sortOptions] = useState(['Newest', 'Price: Low to High', 'Price: High to Low', 'Name: A to Z']);

  // Products
  interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    colors: string[];
    sizes: number[];
  }

  const [products, setProducts] = useState<Product[]>([]);

  setProducts([]);

  const filteredProducts = products.filter(product => selectedCategory === 'All' || product.category === selectedCategory).filter(product => selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size))).filter(product => selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color))).sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Name: A to Z':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  const toggleSize = (size: number) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };
  const toggleColor = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy('Newest');
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Shoes</h1>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
          <FilterIcon size={18} className="mr-2" />
          Filters
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="sticky top-24">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-black">
                Clear All
              </button>
              <button className="lg:hidden" onClick={() => setIsFilterOpen(false)}>
                <XIcon size={20} />
              </button>
            </div>
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => <button key={category} onClick={() => handleCategoryChange(category)} className={`block w-full text-left px-2 py-1 rounded-md ${selectedCategory === category ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                    {category}
                  </button>)}
              </div>
            </div>
            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => <button key={size} onClick={() => toggleSize(size)} className={`w-10 h-10 flex items-center justify-center rounded-md ${selectedSizes.includes(size) ? 'bg-black text-white' : 'border border-gray-300 hover:border-black'}`}>
                    {size}
                  </button>)}
              </div>
            </div>
            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => <button key={color} onClick={() => toggleColor(color)} className={`px-3 py-1 rounded-md ${selectedColors.includes(color) ? 'bg-black text-white' : 'border border-gray-300 hover:border-black'}`}>
                    {color}
                  </button>)}
              </div>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              {filteredProducts.length} products
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">Sort by:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border-none bg-transparent focus:outline-none text-sm">
                {sortOptions.map(option => <option key={option} value={option}>
                    {option}
                  </option>)}
              </select>
            </div>
          </div>
          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} isNew={product.isNew} />)}
          </div>
          {/* Empty State */}
          {filteredProducts.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or browse our categories
              </p>
              <button onClick={clearFilters} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Clear Filters
              </button>
            </div>}
        </div>
      </div>
    </div>;
};
export default ProductCatalogPage;