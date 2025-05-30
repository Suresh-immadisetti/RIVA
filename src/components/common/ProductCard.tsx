import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="inline-block px-2 py-1 bg-primary-700 text-xs text-white rounded mb-2">
              {product.category === "Water-ATM's" 
                ? 'Water ATM' 
                : product.category === 'RO-Control-Panels' 
                  ? 'RO Panel' 
                  : 'Accessory'
              }
            </div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-slate-600 mb-4 flex-1">
          {product.description}
        </p>
        <div className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <p key={index} className="text-sm text-slate-600 flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span>{feature.name}</span>
            </p>
          ))}
          {product.features.length > 3 && (
            <p className="text-sm text-primary-600">
              +{product.features.length - 3} more features
            </p>
          )}
        </div>
        <Link 
          to={`/products/${product.category}/${product.id}`}
          className="btn-primary w-full flex justify-center"
        >
          <span>View Details</span>
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;