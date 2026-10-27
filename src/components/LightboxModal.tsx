import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ServicePhoto, DEFAULT_GALLERY_FALLBACK } from '../data/servicesData';

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
  const isSingle = photos.length <= 1;

  const handlePhotoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const step = parseInt(img.getAttribute('data-err-step') || '0', 10);
    
    // Si es una infografía
    if (currentPhoto.src.includes('infografia')) {
      const match = currentPhoto.src.match(/\/([1-7])-serv\//);
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
    } else {
      // Si es una foto de galería
      const match = currentPhoto.src.match(/\/([1-7])-serv\//);
      if (match) {
        const servNum = match[1];
        const num = currentIndex + 1;
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
    }
    
    img.src = currentPhoto.fallback || DEFAULT_GALLERY_FALLBACK;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Barra superior */}
      <div className="w-full max-w-7xl flex items-center justify-between text-white py-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-green-400 font-bold block">
            {serviceTitle}
          </span>
          {!isSingle && (
            <p className="text-sm font-semibold text-slate-300">
              Foto {currentIndex + 1} de {photos.length}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Cerrar vista ampliada"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Área central con la imagen y controles de navegación */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-2 sm:my-4 overflow-hidden">
        {!isSingle && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all transform hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="relative max-h-[80vh] w-auto max-w-full flex flex-col items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            onError={handlePhotoError}
            className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
          {currentPhoto.caption && (
            <div className="mt-3 text-center text-slate-200 text-sm bg-black/60 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 max-w-2xl">
              {currentPhoto.caption}
            </div>
          )}
        </div>

        {!isSingle && (
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all transform hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Miniaturas inferiores solo cuando hay múltiples fotos */}
      {!isSingle ? (
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
              className={`w-14 h-14 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                idx === currentIndex ? 'border-green-400 scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={p.src}
                alt=""
                onError={(e) => {
                  e.currentTarget.src = p.fallback || DEFAULT_GALLERY_FALLBACK;
                }}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="py-2 text-xs text-slate-400">
          Haga clic fuera o presione la X para cerrar
        </div>
      )}
    </div>
  );
};
