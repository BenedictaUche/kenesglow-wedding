// import { useState } from "react";
import MarseilleImage from '/images/marseille.jpg'

const Marseille = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-abhaya text-slate-800">
      {/* Main image with luxurious overlay */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[600px] mb-16 overflow-hidden">
        <img
          src={MarseilleImage}
          alt="Marseille cityscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-center">MARSEILLE</h1>
        </div>
      </div>

      {/* Elegant divider */}
      <div className="flex justify-center mb-20">
        <div className="w-24 h-px bg-amber-300"></div>
      </div>

      {/* TYPICAL FOODS SECTION */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">TYPICAL FOODS YOU MUST TRY</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-8 tracking-wider leading-relaxed">
            Try ALL of the regional specialties — bouillabaisse <span className="text-amber-700 italic">(fish stew)</span>, pastis <span className="text-amber-700 italic">(anise liqueur)</span>, tapenade <span className="text-amber-700 italic">(olive spread)</span>,
            navettes <span className="text-amber-700 italic">(orange blossom cookies)</span>, and calissons <span className="text-amber-700 italic">(almond candies)</span>.
          </p>

          <p className="text-lg md:text-xl tracking-wider leading-relaxed">
            Other exquisite local delicacies include: panisse, aïoli, soupe au pistou, ratatouille, daube provençale, pieds paquets,
            fougasse, pissaladière, socca. <span className="italic">You won't be disappointed!</span>
          </p>
        </div>
      </div>

      {/* RESTAURANTS SECTION */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">RESTAURANTS</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Chez Fonfon</strong></p>
            <p className="text-slate-600 italic tracking-wide">Classic bouillabaisse in a charming fishing port</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">La Table de L'Olivier</strong></p>
            <p className="text-slate-600 italic tracking-wide">Elegant dining, contemporary Mediterranean cuisine</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">AM Restaurant</strong></p>
            <p className="text-slate-600 italic tracking-wide">Michelin-starred, innovative tasting menu — book in advance</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Le Petit Nice</strong></p>
            <p className="text-slate-600 italic tracking-wide">Fine dining with stunning sea views, 3 Michelin stars</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">La Mercerie</strong></p>
            <p className="text-slate-600 italic tracking-wide">Modern French cuisine in a chic, minimalist setting</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Café de l'Abbaye</strong></p>
            <p className="text-slate-600 italic tracking-wide">Casual dining with harbor views and excellent seafood</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">L'Épuisette</strong></p>
            <p className="text-slate-600 italic tracking-wide">Seafood restaurant with panoramic Mediterranean views</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Le Ventre de l'Architecte</strong></p>
            <p className="text-slate-600 italic tracking-wide">Creative cuisine in the iconic Le Corbusier building</p>
          </div>
        </div>
      </div>

      {/* TRADITIONAL FRENCH RESTAURANTS */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">TRADITIONAL FRENCH RESTAURANTS</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Chez Etienne</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">La Cantinetta</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Chez Jeannot</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Au Bain Marie</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Le Café des Épices</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Bistrot du Cours</p>
            </div>
          </div>
        </div>
      </div>

      {/* CAFÉS + BRUNCH */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">CAFÉS + BRUNCH</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Deep Coffee Roasters</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">La Caravelle</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Cup of Tea</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Café Borély</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Coogee</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROOFTOP BARS */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">ROOFTOP BARS</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">La Terrasse du MuCEM</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Rooftop R2</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Marsiglia Rooftop</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">Le Rowing Club</p>
            </div>
            <div className="py-3 px-2 border-b border-amber-200">
              <p className="text-lg md:text-xl tracking-wider">La Friche Belle de Mai</p>
            </div>
          </div>
        </div>
      </div>

      {/* SHOPPING */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">SHOPPING</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-lg md:text-xl tracking-wider font-medium mb-1">Les Terrasses du Port</p>
            <p className="text-lg md:text-xl tracking-wider font-medium mb-1">Centre Bourse</p>
            <p className="text-lg md:text-xl tracking-wider font-medium mb-1">Galeries Lafayette Marseille</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-50 p-6 shadow-sm">
              <p className="text-lg md:text-xl tracking-wider font-medium mb-2">Maison Empereur</p>
              <p className="text-slate-600 tracking-wide">Oldest hardware store in France, selling traditional Provençal home goods, soaps, and kitchen items.</p>
            </div>
            <div className="bg-slate-50 p-6 shadow-sm">
              <p className="text-lg md:text-xl tracking-wider font-medium mb-2">Les Arcenaulx</p>
              <p className="text-slate-600 tracking-wide">Beautiful bookstore and gift shop located in a historic building.</p>
            </div>
          </div>
        </div>
      </div>

      {/* THINGS TO DO */}
      <div className="mb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[6px] mb-12">THINGS TO DO</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Notre-Dame de la Garde</strong></p>
            <p className="text-slate-600 italic tracking-wide">Famous basilica with panoramic views of the city</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">MuCEM</strong></p>
            <p className="text-slate-600 italic tracking-wide">Museum of European and Mediterranean Civilizations with striking architecture</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Le Panier</strong></p>
            <p className="text-slate-600 italic tracking-wide">Historic quarter with colorful streets, shops, and cafés</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Calanques National Park</strong></p>
            <p className="text-slate-600 italic tracking-wide">Dramatic limestone cliffs and turquoise water — perfect for hiking</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Château d'If</strong></p>
            <p className="text-slate-600 italic tracking-wide">Island fortress made famous by "The Count of Monte Cristo"</p>
          </div>

          <div className="border-l-2 border-amber-200 pl-4 py-2">
            <p className="text-lg md:text-xl tracking-wider"><strong className="font-semibold">Vieux Port</strong></p>
            <p className="text-slate-600 italic tracking-wide">Old Port — heart of the city with boats, markets, and restaurants</p>
          </div>
        </div>
      </div>

      {/* Elegant divider */}
      <div className="flex justify-center mb-12">
        <div className="w-24 h-px bg-amber-300"></div>
      </div>
    </div>
  );
};

export default Marseille;
