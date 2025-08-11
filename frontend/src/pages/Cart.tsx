import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import { TrashIcon, ArrowLeftIcon, LockIcon } from 'lucide-react';
const CartPage = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    clearCart
  } = useCart();
  const {
    isAuthenticated
  } = useAuth();
  const navigate = useNavigate();
  const shipping = subtotal >= 100 ? 0 : 5.99;
  const total = subtotal + shipping;
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login', {
        state: {
          from: {
            pathname: '/checkout'
          }
        }
      });
    } else {
      // In a real app, this would navigate to the checkout page
      alert('Proceeding to checkout...');
    }
  };
  const handleQuantityChange = (id: string, size: number, color: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, size, color, newQuantity);
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {items.length > 0 ? <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="border-b pb-4 mb-4 hidden md:flex">
              <div className="w-2/5">
                <span className="font-medium">Product</span>
              </div>
              <div className="w-1/5 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="w-1/5 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="w-1/5 text-right">
                <span className="font-medium">Total</span>
              </div>
            </div>
            {items.map(item => <div key={`${item.id}-${item.size}-${item.color}`} className="flex flex-col md:flex-row items-center py-6 border-b">
                {/* Product Info */}
                <div className="w-full md:w-2/5 flex mb-4 md:mb-0">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="ml-4">
                    <Link to={`/products/${item.id}`} className="font-medium hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size}
                    </p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <button onClick={() => removeItem(item.id, item.size, item.color)} className="text-sm text-red-600 flex items-center mt-2 hover:text-red-800 md:hidden">
                      <TrashIcon size={14} className="mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
                {/* Price */}
                <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
                  <span className="md:hidden font-medium mr-2">Price:</span>$
                  {item.price.toFixed(2)}
                </div>
                {/* Quantity */}
                <div className="w-full md:w-1/5 flex justify-center mb-4 md:mb-0">
                  <div className="flex border border-gray-300 rounded-md">
                    <button onClick={() => handleQuantityChange(item.id, item.size, item.color, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center border-r border-gray-300">
                      -
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center">
                      {item.quantity}
                    </div>
                    <button onClick={() => handleQuantityChange(item.id, item.size, item.color, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center border-l border-gray-300">
                      +
                    </button>
                  </div>
                </div>
                {/* Total */}
                <div className="w-full md:w-1/5 text-right flex justify-between md:block">
                  <span className="md:hidden font-medium">Total:</span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button onClick={() => removeItem(item.id, item.size, item.color)} className="text-gray-500 hidden md:inline-block hover:text-red-600" aria-label="Remove item">
                    <TrashIcon size={18} />
                  </button>
                </div>
              </div>)}
            <div className="flex justify-between mt-6">
              <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-black">
                <ArrowLeftIcon size={16} className="mr-2" />
                Continue Shopping
              </Link>
              <button onClick={clearCart} className="text-red-600 hover:text-red-800">
                Clear Cart
              </button>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Promo Code
                </label>
                <div className="flex">
                  <input type="text" id="promoCode" className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-black focus:border-black" placeholder="Enter code" />
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300">
                    Apply
                  </button>
                </div>
              </div>
              <Button variant="primary" size="lg" fullWidth onClick={handleCheckout}>
                <LockIcon size={16} className="mr-2" />
                Checkout
              </Button>
              <div className="mt-6">
                <h3 className="font-medium mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div> : <div className="text-center py-16 border rounded-lg">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBagIcon size={32} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Browse our
            collection to find your perfect pair.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>}
    </div>;
};
const ShoppingBagIcon = ({
  size,
  className
}: {
  size: number;
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>;
export default CartPage;