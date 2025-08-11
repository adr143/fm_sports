import React from 'react';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew
}) => {
  return <Link to={`/products/${id}`} className="group">
      <div className="relative overflow-hidden rounded-md mb-3">
        <img src={image} alt={name} className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-300" />
        {isNew && <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1">
            NEW
          </div>}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm mb-1">{category}</h3>
        <h2 className="font-medium text-lg mb-1">{name}</h2>
        <p className="font-bold">${price.toFixed(2)}</p>
      </div>
    </Link>;
};
export default ProductCard;