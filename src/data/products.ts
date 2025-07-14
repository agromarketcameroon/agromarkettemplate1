import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Graines de Tomate Roma',
    description: 'Graines de tomate roma de haute qualité, idéales pour la culture commerciale. Variété résistante aux maladies avec excellent rendement.',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'graines',
    subcategory: 'légumes',
    stock: 150,
    rating: 4.5,
    reviews: 23,
    specifications: {
      'Variété': 'Roma',
      'Temps de germination': '7-14 jours',
      'Cycle de culture': '75-85 jours',
      'Rendement': '40-50 tonnes/hectare',
      'Résistance': 'Fusariose, Verticilliose'
    },
    features: [
      'Graines certifiées',
      'Taux de germination élevé',
      'Résistante aux maladies',
      'Excellent pour la transformation'
    ],
    isNew: true,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: '2',
    name: 'Engrais NPK 20-10-10',
    description: 'Engrais complet NPK 20-10-10 pour une croissance optimale des cultures. Formulation équilibrée pour tous types de sols.',
    price: 15000,
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'engrais',
    subcategory: 'chimiques',
    stock: 200,
    rating: 4.8,
    reviews: 45,
    specifications: {
      'Azote (N)': '20%',
      'Phosphore (P₂O₅)': '10%',
      'Potassium (K₂O)': '10%',
      'Conditionnement': 'Sac de 50kg',
      'Solubilité': 'Totalement soluble'
    },
    features: [
      'Formulation équilibrée',
      'Absorption rapide',
      'Améliore la croissance',
      'Augmente le rendement'
    ],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Houe Traditionnelle',
    description: 'Houe traditionnelle camerounaise en acier forgé avec manche en bois dur. Outil indispensable pour le travail du sol.',
    price: 8500,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'outils',
    subcategory: 'manuels',
    stock: 75,
    rating: 4.3,
    reviews: 18,
    specifications: {
      'Matériau': 'Acier forgé',
      'Longueur du manche': '120cm',
      'Poids': '1.2kg',
      'Largeur de la lame': '15cm',
      'Origine': 'Fabriqué au Cameroun'
    },
    features: [
      'Acier de qualité',
      'Manche ergonomique',
      'Durable et résistant',
      'Fabrication locale'
    ],
    isNew: true
  },
  {
    id: '4',
    name: 'Graines de Maïs Hybride',
    description: 'Graines de maïs hybride à haut rendement, adaptées au climat camerounais. Résistance aux parasites et aux maladies.',
    price: 12000,
    image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'graines',
    subcategory: 'céréales',
    stock: 100,
    rating: 4.7,
    reviews: 35,
    specifications: {
      'Variété': 'Hybride F1',
      'Cycle': '90-100 jours',
      'Rendement': '6-8 tonnes/hectare',
      'Résistance': 'Striure, Rouille',
      'Conditionnement': 'Sac de 25kg'
    },
    features: [
      'Variété hybride',
      'Haut rendement',
      'Résistant aux maladies',
      'Adapté au climat local'
    ],
    isFeatured: true
  },
  {
    id: '5',
    name: 'Système d\'Irrigation Goutte à Goutte',
    description: 'Kit complet d\'irrigation goutte à goutte pour 1000m². Économise l\'eau et améliore la productivité.',
    price: 45000,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'irrigation',
    subcategory: 'goutte-a-goutte',
    stock: 25,
    rating: 4.9,
    reviews: 12,
    specifications: {
      'Surface couverte': '1000m²',
      'Débit': '2-4 L/h par goutteur',
      'Pression': '0.5-3 bars',
      'Matériau': 'Polyéthylène PE',
      'Garantie': '2 ans'
    },
    features: [
      'Économie d\'eau 60%',
      'Installation facile',
      'Matériaux durables',
      'Maintenance réduite'
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: '6',
    name: 'Insecticide Bio Neem',
    description: 'Insecticide biologique à base d\'huile de neem. Traitement naturel contre les parasites des cultures.',
    price: 6500,
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'engrais',
    subcategory: 'biologiques',
    stock: 80,
    rating: 4.4,
    reviews: 28,
    specifications: {
      'Principe actif': 'Huile de neem 2%',
      'Dosage': '20ml/L d\'eau',
      'Conditionnement': 'Bidon de 1L',
      'Délai avant récolte': '3 jours',
      'Certification': 'Agriculture biologique'
    },
    features: [
      '100% naturel',
      'Sans résidus toxiques',
      'Respectueux de l\'environnement',
      'Efficace contre 200+ parasites'
    ]
  },
  {
    id: '7',
    name: 'Pulvérisateur à Dos 16L',
    description: 'Pulvérisateur à dos professionnel de 16 litres avec lance télescopique. Idéal pour les traitements phytosanitaires.',
    price: 18500,
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'outils',
    subcategory: 'pulverisation',
    stock: 35,
    rating: 4.2,
    reviews: 14,
    specifications: {
      'Capacité': '16 litres',
      'Pression': '0-4 bars',
      'Lance': 'Télescopique 50-85cm',
      'Matériau': 'Polyéthylène renforcé',
      'Poids': '2.8kg'
    },
    features: [
      'Réservoir résistant',
      'Pompe haute pression',
      'Lance réglable',
      'Bretelles confortables'
    ]
  },
  {
    id: '8',
    name: 'Compost Organique Premium',
    description: 'Compost organique 100% naturel, enrichi en nutriments. Améliore la structure du sol et la fertilité.',
    price: 4500,
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'engrais',
    subcategory: 'organiques',
    stock: 120,
    rating: 4.6,
    reviews: 31,
    specifications: {
      'Matière organique': '> 30%',
      'pH': '6.5-7.5',
      'Humidité': '< 35%',
      'Conditionnement': 'Sac de 40kg',
      'Certification': 'Agriculture biologique'
    },
    features: [
      'Améliore la structure du sol',
      'Rétention d\'eau',
      'Libération lente',
      'Respectueux de l\'environnement'
    ],
    isFeatured: true
  }
];