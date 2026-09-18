import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  LayoutGrid, 
  SlidersHorizontal,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { ServiceItem, getServiceWhatsAppUrl } from '../data/servicesData';
import { LightboxModal } from './LightboxModal';

interface ServiceCardProps {
  service: ServiceItem;
  isFirst?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isFirst = false }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // WhatsApp de solicitud de servicio
  const serviceWhatsAppUrl = getServiceWhatsAppUrl(service.title);

  const handlePhotoError = (e: React.SyntheticEvent<HTMLImageElement, Event>, photo: (typeof service.photos)[0], index: number) => {
    const img = e.currentTarget;
    const step = parseInt(img.getAttribute('data-err-step') || '0', 10);
    
    const match = photo.src.match(/\/([1-7])-serv\//);
    if (match) {
      const servNum = match[1];
      const num = index + 1;
      if (step === 0) {
        img.setAttribute('data-err-step', '1');
        img.src = `https://biointech.co/2026/${servNum}-serv/${num}.jpg`;
        return;
      } else if (step === 1) {
        img.setAttribute('data-err-step', '2');
        img.src = `https://biointech.co/2026/${servNum}-serv/foto${num}.jpg`;
        return;
      } else if (step === 2) {
        img.setAttribute('data-err-step', '3');
        img.src = `https://biointech.co/2026/${servNum}-serv/foto-${num}.png`;
        return;
      }
    }
    
    if (photo.fallback) {
      img.src = photo.fallback;
    }
  };

  const handleInfographicError = (e: React.SyntheticEvent<HTMLImageElement, Event>, src: string, fallback?: string) => {
    const img = e.currentTarget;
    const step = parseInt(img.getAttribute('data-err-step') || '0', 10);
    
    const match = src.match(/\/([1-7])-serv\//);
    if (match) {
      const servNum = match[1];
      if (step === 0) {
        img.setAttribute('data-err-step', '1');
        img.src = `https://biointech.co/2026/${servNum}-serv/infografia.png`;
        return;
      } else if (step === 1) {
        img.setAttribute('data-err-step', '2');
        img.src = `https://biointech.co/2026/${servNum}-serv/infografia.jpeg`;
        return;
      }
    }
    
    if (fallback) {
      img.src = fallback;
    }
  };

  return (
    <article 
      id={service.id}
      className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 transition-all hover:shadow-md ${
        isFirst ? 'mt-0' : 'mt-[52px]'
      }`}
    >
      {/* 01 & 02: Título y descripción (Sin botón Ver Detalle) */}
      <div className="border-b border-slate-200/80 pb-6 mb-8">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-secondary font-black text-xl md:text-2xl font-headline">
              {service.number}.
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002662] font-headline tracking-tight">
              {service.title}
            </h2>
          </div>
          {/* Descripción del servicio */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* 04: Galería de fotos - Barra de controles Grid / Carrusel */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Galería Fotográfica ({service.photos.length} fotos)
          </span>
        </div>

        {/* Alternador de vista: Grid 4 vs Carrusel 10 */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-[#002662] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Vista de 4 fotos principales en cuadrícula"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cuadrícula (4)</span>
          </button>
          <button
            onClick={() => setViewMode('carousel')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'carousel'
                ? 'bg-white text-[#002662] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Ver todas las fotos en carrusel horizontal deslizante"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Carrusel ({service.photos.length})</span>
          </button>
        </div>
      </div>

      {/* Modo 1: GRID de 4 fotos */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {service.photos.slice(0, 4).map((photo, idx) => (
            <div
              key={photo.id || idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-square cursor-pointer hover-lift"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                onError={(e) => handlePhotoError(e, photo, idx)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-white text-xs font-medium line-clamp-1">
                  {photo.caption || photo.alt}
                </span>
                <span className="text-green-300 text-[11px] font-bold flex items-center mt-1">
                  <Maximize2 className="w-3 h-3 mr-1" /> Ampliar foto
                </span>
              </div>

              {/* Botón "+ Fotos" en la 4ta foto para acceder a las demás */}
              {idx === 3 && service.photos.length > 4 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('carousel');
                  }}
                  className="absolute top-3 right-3 bg-black/75 hover:bg-[#002662] text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all shadow"
                >
                  +{service.photos.length - 4} fotos
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modo 2: Carrusel Horizontal deslizable (hasta 10 fotos) */}
      {viewMode === 'carousel' && (
        <div className="relative mb-8 group/carousel">
          {/* Botones de navegación de carrusel */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 text-[#002662] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#002662] hover:text-white transition-all transform hover:scale-105 active:scale-95"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 text-[#002662] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#002662] hover:text-white transition-all transform hover:scale-105 active:scale-95"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Contenedor con scroll horizontal fluido y snap */}
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {service.photos.map((photo, idx) => (
              <div
                key={photo.id || idx}
                onClick={() => openLightbox(idx)}
                className="w-72 sm:w-80 md:w-96 shrink-0 snap-start group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-[4/3] cursor-pointer hover-lift"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onError={(e) => handlePhotoError(e, photo, idx)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badge indicador de número de foto */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {idx + 1} / {service.photos.length}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-white text-sm font-semibold line-clamp-2">
                    {photo.caption || photo.alt}
                  </span>
                  <span className="text-green-300 text-xs font-bold flex items-center mt-1.5">
                    <Maximize2 className="w-3.5 h-3.5 mr-1" /> Click para ampliar
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-2">
            Desliza horizontalmente para ver las {service.photos.length} fotos de {service.title}
          </p>
        </div>
      )}

      {/* 05: Texto tipo nota descriptiva de 3 renglones */}
      <div className="bg-[#F0F4FA] border-l-4 border-secondary p-5 sm:p-6 rounded-r-2xl mb-8">
        <p className="text-slate-700 text-sm md:text-base leading-relaxed line-clamp-3">
          {service.note}
        </p>
      </div>

      {/* 06: Infografía en JPG tipo banner de 500px de alto */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#002662]">
              Infografía de Proceso Operativo (500px)
            </h4>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Archivo: {service.infographic.src}
          </span>
        </div>

        {/* Banner contenedor con altura exacta de 500px */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-950">
          <img
            src={service.infographic.src}
            alt={service.infographic.alt}
            onError={(e) => handleInfographicError(e, service.infographic.src, service.infographic.fallback)}
            className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
          />
          
          {/* Barra superior técnica sutil (sin banner inferior que tape la infografía) */}
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-start pointer-events-none bg-gradient-to-b from-black/60 to-transparent">
            <span className="bg-secondary/90 backdrop-blur-md text-white text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-md shadow pointer-events-auto">
              ESQUEMA TÉCNICO • SERVICIO {service.number}
            </span>

            <button
              type="button"
              onClick={() => {
                openLightbox(0);
              }}
              className="bg-black/40 hover:bg-black/60 text-white backdrop-blur-md p-2.5 rounded-xl transition-all pointer-events-auto shadow"
              title="Ampliar infografía"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 06b: Botón "Solicitar Servicio" */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="text-xs text-slate-500 text-center sm:text-left">
          ¿Interesado en implementar este servicio? Nuestro equipo de ingenieros en Casanare y Bogotá está a su disposición.
        </div>

        <a
          href={serviceWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span>Solicitar Servicio</span>
        </a>
      </div>

      {/* Lightbox para ampliar fotos */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        photos={service.photos}
        currentIndex={activePhotoIndex}
        onPrev={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : service.photos.length - 1))}
        onNext={() => setActivePhotoIndex((prev) => (prev < service.photos.length - 1 ? prev + 1 : 0))}
        serviceTitle={service.title}
      />
    </article>
  );
};
