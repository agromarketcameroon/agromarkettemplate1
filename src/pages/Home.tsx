import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, ShoppingBag, Truck, CheckCircle } from 'lucide-react';
import { ProductCard } from '../components/Common/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

export const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
  const stats = [
    { icon: Users, label: 'Clients Satisfaits', value: '5,000+' },
    { icon: ShoppingBag, label: 'Produits Disponibles', value: '500+' },
    { icon: Truck, label: 'Livraisons Réussies', value: '10,000+' },
    { icon: CheckCircle, label: 'Années d\'Expérience', value: '15+' }
  ];

  const testimonials = [
    {
      name: 'Jean Mballa',
      location: 'Yaoundé',
      text: 'Excellent service! J\'ai trouvé tout ce dont j\'avais besoin pour ma ferme. Livraison rapide et produits de qualité.',
      rating: 5
    },
    {
      name: 'Marie Tchoua',
      location: 'Douala',
      text: 'AgroMarket a révolutionné ma façon d\'acheter mes produits agricoles. Interface simple et prix compétitifs.',
      rating: 5
    },
    {
      name: 'Paul Nkomo',
      location: 'Bamenda',
      text: 'Service client exceptionnel. L\'équipe est très professionnelle et toujours disponible pour aider.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Votre Marketplace Agricole au Cameroun
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Découvrez une gamme complète de produits agricoles de qualité. 
                Graines, engrais, outils et plus encore pour maximiser vos rendements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/boutique"
                  className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Découvrir la Boutique
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/a-propos"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  En Savoir Plus
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agriculture au Cameroun"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Catégories de Produits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez notre large gamme de produits agricoles organisés par catégories 
              pour vous faciliter la recherche.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                to={`/boutique?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.productCount} produits</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Produits Populaires
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos produits les plus populaires, sélectionnés pour leur qualité 
              et leur rapport qualité-prix exceptionnel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/boutique"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Voir Tous les Produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits à travers le Cameroun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez Informé de Nos Actualités
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir les dernières offres, 
            nouveaux produits et conseils agricoles.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};