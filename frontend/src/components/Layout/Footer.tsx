import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
import NewsletterSignup from '../UI/NewsletterSignup';
const Footer = () => {
  return <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FM SPORTS</h3>
            <p className="text-gray-300 mb-4">
              Premium footwear for athletes and sneaker enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-gray-300" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-gray-300" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=running" className="text-gray-300 hover:text-white">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/products?category=basketball" className="text-gray-300 hover:text-white">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="/products?category=training" className="text-gray-300 hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/products?category=lifestyle" className="text-gray-300 hover:text-white">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/order-info" className="text-gray-300 hover:text-white">
                  Order Info
                </Link>
              </li>
              <li>
                <Link to="/order-info#shipping" className="text-gray-300 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/order-info#returns" className="text-gray-300 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/order-info#faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers, free giveaways, and new release
              notifications.
            </p>
            <NewsletterSignup />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FM Sports. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;