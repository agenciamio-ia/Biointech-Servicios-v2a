import React from 'react';
import { Leaf, Eye } from 'lucide-react';

export const QuienesSomos: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Imagen con tarjeta flotante 20+ Años */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/4.2]">
              <img
                src="https://biointech.co/2026/wp-content/uploads/16a-equipo-biointech-1-scaled.jpg"
                alt="Equipo Biointech en planta de tratamiento de hidrocarburos y lodos"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Tarjeta flotante superpuesta (como en image.png) */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 md:right-4 bg-[#EEF4FD] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/80 max-w-[280px] sm:max-w-[320px]">
              <div className="text-4xl sm:text-5xl font-black text-[#002662] font-headline tracking-tight">
                20+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 mt-2 leading-snug">
                Años de excelencia en gestión ambiental
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido editorial, Misión y Visión */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <span className="text-[#246D00] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
              QUIÉNES SOMOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002662] font-headline leading-[1.15] tracking-tight mb-6">
              Compromiso con la Precisión Industrial
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Biointech S.A.S. nace de la necesidad de armonizar los procesos industriales pesados con la preservación de nuestros ecosistemas. No solo tratamos residuos; redefinimos la economía circular a través de la ciencia y la tecnología de vanguardia.
            </p>

            {/* Tarjeta de Misión */}
            <div className="space-y-4">
              <div className="bg-[#F0F4FA] rounded-2xl p-6 sm:p-7 border border-slate-100 flex items-start space-x-5 transition-transform hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-[#246D00]">
                  <Leaf className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#002662] mb-1 font-headline">
                    Misión
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Transformar pasivos ambientales en activos productivos mediante innovación técnica constante.
                  </p>
                </div>
              </div>

              {/* Tarjeta de Visión */}
              <div className="bg-[#F0F4FA] rounded-2xl p-6 sm:p-7 border border-slate-100 flex items-start space-x-5 transition-transform hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-[#246D00]">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#002662] mb-1 font-headline">
                    Visión
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Ser el referente latinoamericano en biotecnología aplicada al tratamiento de residuos industriales para 2030.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
