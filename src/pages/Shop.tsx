import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, Filter, Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ProductCard } from '../components/Common/ProductCard';
import { Breadcrumb } from '../components/Common/Breadcrumb';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { FilterOptions, SortOption } from '../types';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: undefined,
    subcategory: undefined,
    priceRange: [0, 100000],
    minRating: 0,
    inStock: false
  });
  const [sortBy, setSortBy] = useState('featured');

  // Initialize state from URL params on component mount
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || undefined;
    const urlSubcategory = searchParams.get('subcategory') || undefined;
    const urlMinPrice = parseInt(searchParams.get('minPrice') || '0');
    const urlMaxPrice = parseInt(searchParams.get('maxPrice') || '100000');
    const urlMinRating = parseInt(searchParams.get('minRating') || '0');
    const urlInStock = searchParams.get('inStock') === 'true';
    const urlSort = searchParams.get('sort') || 'featured';

    setSearchQuery(urlSearch);
    setFilters({
      category: urlCategory,
      subcategory: urlSubcategory,
      priceRange: [urlMinPrice, urlMaxPrice],
      minRating: urlMinRating,
      inStock: urlInStock
    });
    setSortBy(urlSort);
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('search', searchQuery);
    if (filters.category) params.set('category', filters.category);
    if (filters.subcategory) params.set('subcategory', filters.subcategory);
    if (filters.priceRange![0] > 0) params.set('minPrice', filters.priceRange![0].toString());
    if (filters.priceRange![1] < 100000) params.set('maxPrice', filters.priceRange![1].toString());
    if (filters.minRating && filters.minRating > 0) params.set('minRating', filters.minRating.toString());
    if (filters.inStock) params.set('inStock', 'true');
    if (sortBy !== 'featured') params.set('sort', sortBy);

    setSearchParams(params);
  }, [searchQuery, filters, sortBy, setSearchParams]);

  const sortOptions: SortOption[] = [
    { value: 'featured', label: 'Produits Populaires' },
    { value: 'price-low', label: 'Prix: Croissant' },
    { value: 'price-high', label: 'Prix: Décroissant' },
    { value: 'name', label: 'Nom: A-Z' },
    { value: 'rating', label: 'Mieux Notés' },
    { value: 'newest', label: 'Plus Récents' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter - search in name, description, and category
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory) {
      filtered = filtered.filter(product => product.subcategory === filters.subcategory);
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange![0] && 
        product.price <= filters.priceRange![1]
      );
    }

    // Rating filter
    if (filters.minRating && filters.minRating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.minRating!);
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.stock > 0);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      default: // featured
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      category: undefined,
      subcategory: undefined,
      priceRange: [0, 100000],
      minRating: 0,
      inStock: false
    });
    setSearchQuery('');
    setSortBy('featured');
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case 'search':
        setSearchQuery('');
        break;
      case 'category':
        handleFilterChange('category', undefined);
        handleFilterChange('subcategory', undefined); // Clear subcategory when category is cleared
        break;
      case 'subcategory':
        handleFilterChange('subcategory', undefined);
        break;
      case 'price':
        handleFilterChange('priceRange', [0, 100000]);
        break;
      case 'rating':
        handleFilterChange('minRating', 0);
        break;
      case 'stock':
        handleFilterChange('inStock', false);
        break;
    }
  };

  // Get subcategories for selected category
  const availableSubcategories = useMemo(() => {
    if (!filters.category) return [];
    const category = categories.find(c => c.slug === filters.category);
    return category?.subcategories || [];
  }, [filters.category]);

  const breadcrumbItems = [
    { label: 'Boutique' },
    ...(filters.category ? [{ 
      label: categories.find(c => c.slug === filters.category)?.name || '',
      path: `/boutique?category=${filters.category}`
    }] : []),
    ...(filters.subcategory ? [{ 
      label: filters.subcategory 
    }] : [])
  ];

  // Active filters count
  const activeFiltersCount = [
    searchQuery,
    filters.category,
    filters.subcategory,
    filters.priceRange![0] > 0 || filters.priceRange![1] < 100000,
    filters.minRating && filters.minRating > 0,
    filters.inStock
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Boutique AgroMarket
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              {searchQuery && ` pour "${searchQuery}"`}
            </p>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="flex mt-4 lg:mt-0">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Rechercher des produits..."
                className="w-full lg:w-80 px-4 py-2 pl-10 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
            >
              Rechercher
            </button>
          </form>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Filtres actifs:</span>
              
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Recherche: "{searchQuery}"
                  <button
                    onClick={() => removeFilter('search')}
                    className="ml-2 h-4 w-4 text-green-600 hover:text-green-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {categories.find(c => c.slug === filters.category)?.name}
                  <button
                    onClick={() => removeFilter('category')}
                    className="ml-2 h-4 w-4 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.subcategory && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                  {filters.subcategory}
                  <button
                    onClick={() => removeFilter('subcategory')}
                    className="ml-2 h-4 w-4 text-purple-600 hover:text-purple-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {(filters.priceRange![0] > 0 || filters.priceRange![1] < 100000) && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                  Prix: {filters.priceRange![0].toLocaleString()} - {filters.priceRange![1].toLocaleString()} FCFA
                  <button
                    onClick={() => removeFilter('price')}
                    className="ml-2 h-4 w-4 text-orange-600 hover:text-orange-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.minRating && filters.minRating > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                  {filters.minRating}+ étoiles
                  <button
                    onClick={() => removeFilter('rating')}
                    className="ml-2 h-4 w-4 text-yellow-600 hover:text-yellow-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {filters.inStock && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  En stock
                  <button
                    onClick={() => removeFilter('stock')}
                    className="ml-2 h-4 w-4 text-green-600 hover:text-green-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Tout effacer
              </button>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
              {activeFiltersCount > 0 && (
                <span className="bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View mode */}
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filtres</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-red-600 hover:text-red-700 transition-colors"
                  >
                    Effacer tout
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Catégories</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={!filters.category}
                      onChange={() => handleFilterChange('category', undefined)}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-sm">Toutes les catégories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.slug}
                        checked={filters.category === category.slug}
                        onChange={(e) => {
                          handleFilterChange('category', e.target.value);
                          handleFilterChange('subcategory', undefined); // Reset subcategory
                        }}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs text-gray-500 ml-auto">({category.productCount})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategories */}
              {availableSubcategories.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Sous-catégories</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="subcategory"
                        value=""
                        checked={!filters.subcategory}
                        onChange={() => handleFilterChange('subcategory', undefined)}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm">Toutes</span>
                    </label>
                    {availableSubcategories.map(subcategory => (
                      <label key={subcategory} className="flex items-center">
                        <input
                          type="radio"
                          name="subcategory"
                          value={subcategory}
                          checked={filters.subcategory === subcategory}
                          onChange={(e) => handleFilterChange('subcategory', e.target.value)}
                          className="mr-2 text-green-600"
                        />
                        <span className="text-sm capitalize">{subcategory}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix (FCFA)</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Prix minimum</label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={filters.priceRange![0]}
                      onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange![1]])}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-600">{filters.priceRange![0].toLocaleString()} FCFA</span>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Prix maximum</label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={filters.priceRange![1]}
                      onChange={(e) => handleFilterChange('priceRange', [filters.priceRange![0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-600">{filters.priceRange![1].toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Note minimum</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="minRating"
                      value="0"
                      checked={filters.minRating === 0}
                      onChange={() => handleFilterChange('minRating', 0)}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-sm">Toutes les notes</span>
                  </label>
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="minRating"
                        value={rating}
                        checked={filters.minRating === rating}
                        onChange={(e) => handleFilterChange('minRating', parseInt(e.target.value))}
                        className="mr-2 text-green-600"
                      />
                      <span className="text-sm">{rating}+ étoiles</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="mr-2 text-green-600"
                  />
                  <span className="text-sm">En stock uniquement</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">Aucun produit trouvé</p>
                  {searchQuery && (
                    <p className="text-gray-400">
                      Aucun résultat pour "{searchQuery}"
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Suggestions:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Vérifiez l'orthographe de votre recherche</li>
                    <li>• Essayez des mots-clés plus généraux</li>
                    <li>• Réduisez le nombre de filtres appliqués</li>
                  </ul>
                </div>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Effacer tous les filtres
                  </button>
                )}
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};