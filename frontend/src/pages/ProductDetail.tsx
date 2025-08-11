import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import ProductCard from '../components/UI/ProductCard';
import { ShoppingBagIcon, HeartIcon, TruckIcon, ArrowLeftIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
// Mock product data
const products = [{
  id: '1',
  name: 'Air Max Pulse',
  price: 159.99,
  images: ['https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
  category: 'Running',
  isNew: true,
  colors: ['Black', 'White', 'Red'],
  sizes: [7, 8, 9, 10, 11],
  description: "The Nike Air Max Pulse draws inspiration from London's music scene, bringing an underground touch to the iconic Air Max line. The textile-wrapped midsole and vacuum-sealed accents add a fresh look while the Air unit in the heel and responsive foam deliver comfort and cushioning.",
  features: ['Mesh and synthetic upper for breathability', 'Air-Sole unit in the heel for cushioning', 'Rubber outsole for traction and durability', 'Padded collar for comfort']
}
// More products would be defined here...
];
// Mock related products
const relatedProducts = [{
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
const ProductDetailPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product if not found
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(product.images[0]);
  const [error, setError] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState(false);
  const {
    addItem
  } = useCart();
  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor
    });
    // Show success message
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  return <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center text-gray-600 mb-6 hover:text-black">
        <ArrowLeftIcon size={16} className="mr-2" />
        Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img src={mainImage} alt={product.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => <button key={index} onClick={() => setMainImage(image)} className={`border rounded-md overflow-hidden ${mainImage === image ? 'border-black' : 'border-gray-200'}`}>
                <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-auto" />
              </button>)}
          </div>
        </div>
        {/* Product Info */}
        <div>
          {product.isNew && <div className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mb-2">
              NEW
            </div>}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-xl font-bold mb-4">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">
              Color: <span className="text-gray-600">{selectedColor}</span>
            </h2>
            <div className="flex gap-2">
              {product.colors.map(color => <button key={color} onClick={() => setSelectedColor(color)} className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`} style={{
              backgroundColor: color.toLowerCase()
            }} aria-label={color}></button>)}
            </div>
          </div>
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium">Size</h2>
              <button className="text-sm text-gray-600 underline">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 flex items-center justify-center rounded-md ${selectedSize === size ? 'bg-black text-white' : 'border border-gray-300 hover:border-black'}`}>
                  {size}
                </button>)}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          {/* Quantity */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Quantity</h2>
            <div className="flex border border-gray-300 rounded-md w-32">
              <button onClick={decrementQuantity} className="w-10 h-10 flex items-center justify-center border-r border-gray-300" disabled={quantity <= 1}>
                -
              </button>
              <div className="flex-1 h-10 flex items-center justify-center">
                {quantity}
              </div>
              <button onClick={incrementQuantity} className="w-10 h-10 flex items-center justify-center border-l border-gray-300">
                +
              </button>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button variant="primary" size="lg" fullWidth onClick={handleAddToCart}>
              <ShoppingBagIcon size={18} className="mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" fullWidth>
              <HeartIcon size={18} className="mr-2" />
              Add to Wishlist
            </Button>
          </div>
          {/* Success Message */}
          {addedToCart && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
              Item added to cart successfully!
            </div>}
          {/* Shipping Info */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex items-start mb-4">
              <TruckIcon size={20} className="mr-2 mt-1 text-gray-600" />
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-600">
                  Free standard shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
          {/* Features */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="font-bold text-lg mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => <li key={index} className="text-gray-700">
                  {feature}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} isNew={product.isNew} />)}
        </div>
      </div>
    </div>;
};
export default ProductDetailPage;