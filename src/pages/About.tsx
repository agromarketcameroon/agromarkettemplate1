import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Connecter les agriculteurs camerounais aux meilleurs produits et services pour améliorer leur productivité et rentabilité.'
    },
    {
      icon: Users,
      title: 'Notre Vision',
      description: 'Être la première plateforme agricole du Cameroun, facilitant l\'accès aux ressources agricoles de qualité.'
    },
    {
      icon: Award,
      title: 'Nos Valeurs',
      description: 'Qualité, transparence, innovation et service client exceptionnel sont au cœur de notre engagement.'
    },
    {
      icon: Globe,
      title: 'Notre Impact',
      description: 'Contribuer au développement de l\'agriculture camerounaise en soutenant les producteurs locaux.'
    }
  ];

  const team = [
    {
      name: 'Jean-Baptiste Tchoua',
      role: 'Fondateur & CEO',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert en agriculture avec 15 ans d\'expérience dans le secteur agricole camerounais.'
    },
    {
      name: 'Marie Nkomo',
      role: 'Directrice Commerciale',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Spécialiste en développement commercial et relations avec les producteurs.'
    },
    {
      name: 'Paul Mballa',
      role: 'Responsable Logistique',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert en chaîne d\'approvisionnement et distribution au Cameroun.'
    },
    {
      name: 'Sophie Biya',
      role: 'Responsable Qualité',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ingénieure agronome spécialisée en contrôle qualité des produits agricoles.'
    }
  ];

  const timeline = [
    { year: '2009', event: 'Création d\'AgroMarket comme petite entreprise familiale' },
    { year: '2012', event: 'Expansion vers les 10 régions du Cameroun' },
    { year: '2015', event: 'Lancement du service de livraison à domicile' },
    { year: '2018', event: 'Ouverture du premier centre de distribution moderne' },
    { year: '2020', event: 'Digitalisation complète avec la plateforme en ligne' },
    { year: '2022', event: 'Partenariat avec plus de 500 producteurs locaux' },
    { year: '2024', event: 'Leadership sur le marché agricole numérique camerounais' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À Propos d'AgroMarket
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Depuis 2009, nous révolutionnons l'agriculture camerounaise en connectant 
              les agriculteurs aux meilleurs produits et services du marché.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-gray-600 mb-4">
                AgroMarket a été fondée en 2009 par Jean-Baptiste Tchoua, un ingénieur agronome 
                passionné par l'agriculture camerounaise. Constatant les difficultés des 
                agriculteurs à accéder aux produits de qualité, il a créé cette plateforme 
                pour faciliter leurs approvisionnements.
              </p>
              <p className="text-gray-600 mb-4">
                Aujourd'hui, nous sommes fiers de servir plus de 5,000 clients satisfaits 
                à travers les 10 régions du Cameroun. Notre engagement envers la qualité 
                et l'innovation nous a permis de devenir le leader du marché agricole digital.
              </p>
              <p className="text-gray-600">
                Nous continuons à investir dans la technologie et les partenariats 
                pour soutenir le développement durable de l'agriculture camerounaise.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Agriculture au Cameroun"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs & Engagements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos actions et décisions dans notre 
              mission de transformer l'agriculture camerounaise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée et expérimentée, dédiée à votre succès agricole.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Évolution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les étapes clés de notre parcours vers l'excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-800">{item.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez la Révolution Agricole
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Faites partie de la communauté AgroMarket et découvrez comment nous 
            pouvons vous aider à développer votre activité agricole.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/boutique"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Découvrir nos Produits
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};