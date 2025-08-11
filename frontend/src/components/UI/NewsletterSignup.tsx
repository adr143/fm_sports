import React, { useState } from 'react';
import Button from './Button';
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would send the email to a backend service
      setSubscribed(true);
      setEmail('');
    }
  };
  return <div>
      {subscribed ? <div className="text-green-400 mb-4">Thanks for subscribing!</div> : <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-white" />
          <Button type="submit" variant="primary" size="md">
            Subscribe
          </Button>
        </form>}
    </div>;
};
export default NewsletterSignup;