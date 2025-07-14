import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className = '',
  viewMode = 'grid'
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (viewMode === 'list') {
    return (
      <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group ${className}`}>
        <Link to={`/produit/${product.id}`}>
          <div className="flex">
            <div className="relative w-48 h-48 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-2 space-y-1">
                {product.isNew && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    Nouveau
                  </span>
                )}
                {product.isOnSale && (
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Promo
                  </span>
                )}
              </div>

              {/* Stock status */}
              {product.stock === 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">Rupture de Stock</span>
                </div>
              )}
            </div>

            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                <div className="ml-4 text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {product.stock > 0 && product.stock <= 10 && (
                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      Stock limité
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`py-2 px-4 rounded-lg font-medium flex items-center space-x-2 transition-colors ${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{product.stock === 0 ? 'Rupture' : 'Ajouter'}</span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group ${className}`}>
      <Link to={`/produit/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {product.isNew && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Nouveau
              </span>
            )}
            {product.isOnSale && (
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                Promo
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col space-y-1">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <Eye className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Stock status */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Rupture de Stock</span>
            </div>
          )}
        </div>

        <div className="p-4">
          {/* Category */}
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          
          {/* Name */}
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {product.stock > 0 && product.stock <= 10 && (
              <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                Stock limité
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors ${
              product.stock === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.stock === 0 ? 'Rupture de Stock' : 'Ajouter au Panier'}</span>
          </button>
        </div>
      </Link>
    </div>
  );
};