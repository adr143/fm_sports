import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import { UserIcon, PackageIcon, HeartIcon, CreditCardIcon, LogOutIcon } from 'lucide-react';
// Mock order history
const orderHistory = [{
  id: 'ORD12345',
  date: '2023-09-15',
  status: 'Delivered',
  total: 189.98,
  items: [{
    id: '1',
    name: 'Air Max Pulse',
    price: 159.99,
    quantity: 1,
    size: 10,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }]
}, {
  id: 'ORD12346',
  date: '2023-08-22',
  status: 'Delivered',
  total: 99.99,
  items: [{
    id: '3',
    name: 'Classic Leather',
    price: 99.99,
    quantity: 1,
    size: 9,
    color: 'White',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }]
}];
// Mock wishlist
const wishlistItems = [{
  id: '2',
  name: 'Ultra Boost 5.0',
  price: 189.99,
  image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: '7',
  name: 'Zoom Freak',
  price: 129.99,
  image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}];
const AccountPage = () => {
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{
      from: {
        pathname: '/account'
      }
    }} />;
  }
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                <UserIcon size={24} />
              </div>
              <div>
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <nav className="space-y-1">
              <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${activeTab === 'profile' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                <UserIcon size={20} />
                <span>Profile</span>
              </button>
              <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${activeTab === 'orders' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                <PackageIcon size={20} />
                <span>Orders</span>
              </button>
              <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${activeTab === 'wishlist' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                <HeartIcon size={20} />
                <span>Wishlist</span>
              </button>
              <button onClick={() => setActiveTab('payment')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-left ${activeTab === 'payment' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                <CreditCardIcon size={20} />
                <span>Payment Methods</span>
              </button>
              <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-md text-left">
                <LogOutIcon size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Profile Tab */}
          {activeTab === 'profile' && <div>
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-6 max-w-md">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="fullName" defaultValue={user?.name} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" defaultValue={user?.email} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input type="password" id="currentPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input type="password" id="newPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input type="password" id="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black" />
                    </div>
                  </div>
                </div>
                <div>
                  <Button variant="primary">Save Changes</Button>
                </div>
              </form>
            </div>}
          {/* Orders Tab */}
          {activeTab === 'orders' && <div>
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              {orderHistory.length > 0 ? <div className="space-y-6">
                  {orderHistory.map(order => <div key={order.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">
                            Placed on {order.date}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {order.status}
                          </span>
                          <Button variant="outline" size="sm" className="ml-4">
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        {order.items.map(item => <div key={item.id} className="flex items-center space-x-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                Size: {item.size} | Color: {item.color} | Qty:{' '}
                                {item.quantity}
                              </p>
                            </div>
                            <p className="font-medium">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>)}
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                          <p>Total</p>
                          <p className="font-bold">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>)}
                </div> : <div className="text-center py-12 border rounded-lg">
                  <PackageIcon size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                  <p className="text-gray-500 mb-6">
                    When you place your first order, it will appear here
                  </p>
                  <Button variant="primary" as="a" href="/products">
                    Start Shopping
                  </Button>
                </div>}
            </div>}
          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && <div>
              <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
              {wishlistItems.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map(item => <div key={item.id} className="border rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="font-bold mb-4">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="primary" size="sm" fullWidth>
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>)}
                </div> : <div className="text-center py-12 border rounded-lg">
                  <HeartIcon size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Your wishlist is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Save items you love to your wishlist
                  </p>
                  <Button variant="primary" as="a" href="/products">
                    Browse Products
                  </Button>
                </div>}
            </div>}
          {/* Payment Methods Tab */}
          {activeTab === 'payment' && <div>
              <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
              <div className="text-center py-12 border rounded-lg">
                <CreditCardIcon size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  No payment methods saved
                </h3>
                <p className="text-gray-500 mb-6">
                  Add a payment method for faster checkout
                </p>
                <Button variant="primary">Add Payment Method</Button>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default AccountPage;