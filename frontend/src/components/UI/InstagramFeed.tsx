import React from 'react';
const InstagramFeed = () => {
  // Mock Instagram posts
  const instagramPosts = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://instagram.com'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://instagram.com'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://instagram.com'
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://instagram.com'
  }];
  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Follow Us on Instagram</h2>
          <p className="text-gray-600 text-center max-w-md">
            Tag @fmsports in your photos for a chance to be featured
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map(post => <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src={post.image} alt="Instagram post" className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <InstagramIcon />
                  </div>
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>;
export default InstagramFeed;