import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/Home';
import ProductCatalogPage from './pages/ProductCatalog';
import ProductDetailPage from './pages/ProductDetail';
import LookbookPage from './pages/Lookbook';
import OrderInfoPage from './pages/OrderInfo';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import AccountPage from './pages/Account';
import CartPage from './pages/Cart';
import WhatsAppChat from './components/UI/WhatsAppChat';
import ProtectedRoute from './components/UI/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
export function App() {
  return <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductCatalogPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/lookbook" element={<LookbookPage />} />
                <Route path="/order-info" element={<OrderInfoPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/account" element={<ProtectedRoute>
                      <AccountPage />
                    </ProtectedRoute>} />
              </Routes>
            </main>
            <WhatsAppChat />
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>;
}