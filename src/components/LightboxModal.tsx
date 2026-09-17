import React from 'react';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { ServicePhoto } from '../data/servicesData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: ServicePhoto[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  serviceTitle: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onPrev,
  onNext,
  serviceTitle
}) => {
  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-6 animate-in fade-in duration-200">
      {/* Barra superior */}
      <div className="w-full max-w-7xl flex items-center justify-between text-white py-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-green-400 font-bold">
            {serviceTitle}
          </span>
          <p className="text-sm font-semibold text-slate-300">
            Foto {currentIndex + 1} de {photos.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Cerrar vista ampliada"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Área central con la imagen y controles de navegación */}
      <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden">
        {photos.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all transform hover:scale-110"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="relative max-h-[75vh] w-auto max-w-full flex flex-col items-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            onError={(e) => {
              if (currentPhoto.fallback) {
                e.currentTarget.src = currentPhoto.fallback;
              }
            }}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
          {currentPhoto.caption && (
            <div className="mt-3 text-center text-slate-200 text-sm bg-black/50 px-4 py-1.5 rounded-full">
              {currentPhoto.caption}
            </div>
          )}
        </div>

        {photos.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all transform hover:scale-110"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Miniaturas inferiores */}
      <div className="w-full max-w-4xl overflow-x-auto py-2 flex space-x-2 justify-center">
        {photos.map((p, idx) => (
          <button
            key={p.id || idx}
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              } else if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              }
            }}
            className={`w-14 h-14 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
              idx === currentIndex ? 'border-green-400 scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={p.src}
              alt=""
              onError={(e) => {
                if (p.fallback) e.currentTarget.src = p.fallback;
              }}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
