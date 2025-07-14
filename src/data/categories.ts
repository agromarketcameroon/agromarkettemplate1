import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Graines et Semences',
    slug: 'graines',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Graines certifiées pour légumes, fruits et céréales',
    productCount: 45,
    subcategories: ['légumes', 'fruits', 'céréales', 'légumineuses']
  },
  {
    id: '2',
    name: 'Engrais et Fertilisants',
    slug: 'engrais',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Engrais organiques et chimiques pour tous types de cultures',
    productCount: 32,
    subcategories: ['chimiques', 'organiques', 'biologiques', 'micronutriments']
  },
  {
    id: '3',
    name: 'Outils Agricoles',
    slug: 'outils',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Outils manuels et mécaniques pour l\'agriculture',
    productCount: 28,
    subcategories: ['manuels', 'mécaniques', 'pulverisation', 'récolte']
  },
  {
    id: '4',
    name: 'Système d\'Irrigation',
    slug: 'irrigation',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Solutions d\'irrigation moderne pour optimiser l\'eau',
    productCount: 18,
    subcategories: ['goutte-a-goutte', 'aspersion', 'pompes', 'accessoires']
  },
  {
    id: '5',
    name: 'Produits Frais',
    slug: 'frais',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Légumes et fruits frais directement du producteur',
    productCount: 25,
    subcategories: ['légumes', 'fruits', 'tubercules', 'épices']
  },
  {
    id: '6',
    name: 'Préparation du Sol',
    slug: 'sol',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Amendements et produits pour préparer le sol',
    productCount: 15,
    subcategories: ['amendements', 'substrats', 'paillis', 'pH']
  }
];