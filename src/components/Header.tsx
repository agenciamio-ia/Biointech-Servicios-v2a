import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONSULTING_URL } from '../data/servicesData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="https://biointech.co/2026/biointech.html" 
          className="flex items-center space-x-3 transition-transform hover:scale-[1.01]"
          title="Biointech S.A.S."
        >
          <img 
            src="https://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png" 
            alt="Logo Biointech S.A.S." 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback visual si el logo remoto tarda en responder
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.fallback-logo-text')) {
                const textSpan = document.createElement('span');
                textSpan.className = 'fallback-logo-text text-2xl font-black tracking-tighter text-[#002662] font-headline';
                textSpan.innerText = 'BIOINTECH';
                parent.appendChild(textSpan);
              }
            }}
          />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          <a 
            href="https://biointech.co/2026/biointech.html" 
            className="text-slate-800 hover:text-[#002662] font-semibold text-sm tracking-wide uppercase transition-colors"
          >
            Inicio
          </a>
          <a 
            href="https://biointech.co/2026/biointech.html" 
            className="text-slate-800 hover:text-[#002662] font-semibold text-sm tracking-wide uppercase transition-colors"
          >
            Nosotros
          </a>
          <a 
            href="https://biointech.co/2026/servicios.html#services" 
            onClick={(e) => {
              const el = document.getElementById('services');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#services');
              }
            }}
            className="text-[#246D00] font-bold text-sm tracking-wide uppercase transition-colors"
          >
            Servicios
          </a>
          <a 
            href="https://biointech.co/2026/planta.html" 
            className="text-slate-800 hover:text-[#002662] font-semibold text-sm tracking-wide uppercase transition-colors"
          >
            Planta
          </a>
          {/* Botón Proyectos con borde píldora tal como en la imagen */}
          <a 
            href="https://biointech.co/2026/proyectos.html" 
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-4 py-1.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200"
          >
            Proyectos
          </a>
          {/* Botón Contacto sólido azul oscuro */}
          <a 
            href="https://biointech.co/2026/biointech.html#contacto" 
            className="bg-[#002662] hover:bg-[#003882] text-white px-6 py-2.5 rounded-md font-bold text-sm tracking-wider uppercase transition-all shadow hover:shadow-md active:scale-95"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href={WHATSAPP_CONSULTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
            title="WhatsApp Asesoría"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#002662] focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <a 
            href="https://biointech.co/2026/biointech.html" 
            className="block py-2 text-slate-800 font-bold text-sm uppercase hover:text-[#002662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="https://biointech.co/2026/biointech.html" 
            className="block py-2 text-slate-800 font-bold text-sm uppercase hover:text-[#002662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          <a 
            href="https://biointech.co/2026/servicios.html#services" 
            className="block py-2 text-[#246D00] font-black text-sm uppercase"
            onClick={(e) => {
              setMobileMenuOpen(false);
              const el = document.getElementById('services');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#services');
              }
            }}
          >
            Servicios
          </a>
          <a 
            href="https://biointech.co/2026/planta.html" 
            className="block py-2 text-slate-800 font-bold text-sm uppercase hover:text-[#002662]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Planta
          </a>
          <a 
            href="https://biointech.co/2026/proyectos.html" 
            className="block py-2 text-slate-900 border-2 border-slate-900 rounded-md text-center font-bold text-sm uppercase hover:bg-slate-900 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proyectos
          </a>
          <a 
            href="https://biointech.co/2026/biointech.html#contacto" 
            className="block py-3 text-white bg-[#002662] rounded-md text-center font-bold text-sm uppercase shadow"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};
