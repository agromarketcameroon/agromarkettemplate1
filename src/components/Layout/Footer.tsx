import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">AgroMarket</h3>
                <p className="text-sm text-gray-400">Marketplace Agricole</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos besoins agricoles au Cameroun. 
              Produits de qualité, livraison rapide, service client exceptionnel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/boutique" className="text-gray-300 hover:text-green-400 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-green-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="text-gray-300 hover:text-green-400 transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-gray-300 hover:text-green-400 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/boutique?category=graines" className="text-gray-300 hover:text-green-400 transition-colors">
                  Graines & Semences
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=engrais" className="text-gray-300 hover:text-green-400 transition-colors">
                  Engrais & Fertilisants
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=outils" className="text-gray-300 hover:text-green-400 transition-colors">
                  Outils Agricoles
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=irrigation" className="text-gray-300 hover:text-green-400 transition-colors">
                  Irrigation
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=frais" className="text-gray-300 hover:text-green-400 transition-colors">
                  Produits Frais
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">+237 690 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">contact@agromarket.cm</span>
              </div>
            </div>

            <h5 className="text-md font-semibold mb-3">Newsletter</h5>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AgroMarket. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/conditions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Conditions d'utilisation
            </Link>
            <Link to="/confidentialite" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Confidentialité
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};