import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Factory, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';
import { Header } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { ServiceCard } from './components/ServiceCard';
import { 
  SERVICES_LIST, 
  WHATSAPP_CONSULTING_URL, 
  VER_SERVICIOS_URL 
} from './data/servicesData';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col">
      {/* 1ro. Header diseñado tal como en la imagen adjunta */}
      <Header />

      <main className="flex-grow pt-20">
        {/* ================================================================= */}
        {/* HERO SECTION BANNER */}
        {/* ================================================================= */}
        <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Paisaje de Casanare e instalaciones de bioremediación" 
              className="w-full h-full object-cover object-center opacity-70"
              src="http://biointech.co/2026/wp-content/uploads/banner-servicios-biointech-abonos-agenciamio-v12b-1.jpg" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center space-x-2 py-1 px-3.5 bg-secondary text-on-secondary text-xs font-black tracking-widest uppercase mb-6 rounded-md shadow">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Líderes en Biorremediación Industrial</span>
              </span>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-headline leading-[1.05] tracking-tighter mb-6">
                Proyectos y <br/>
                <span className="text-secondary-container">Soluciones</span> <br/>
                Ambientales
              </h1>

              <p className="text-lg sm:text-xl text-surface-container-lowest/90 mb-10 max-w-2xl font-light leading-relaxed">
                Experiencia comprobada en tratamiento de residuos industriales y recuperación de ecosistemas estratégicos con precisión científica.
              </p>

              {/* Botones del Hero con las URLs exactas requeridas */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Botón: Solicitar Asesoría (con icono WhatsApp) */}
                <a 
                  href={WHATSAPP_CONSULTING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-black text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group"
                >
                  <MessageCircle className="w-6 h-6 fill-white/20 transition-transform group-hover:scale-110" />
                  <span>Solicitar Asesoría</span>
                </a>

                {/* Botón: Ver Servicio */}
                <a 
                  href={VER_SERVICIOS_URL}
                  onClick={(e) => {
                    const el = document.getElementById('services');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '#services');
                    }
                  }}
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all active:scale-95"
                >
                  <span>Ver Servicios</span>
                  <ArrowUpRight className="w-5 h-5 text-secondary-container" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECCIÓN: QUIÉNES SOMOS (Tal como en image.png) */}
        {/* ================================================================= */}
        <QuienesSomos />

        {/* ================================================================= */}
        {/* LOS 7 SERVICIOS DE BIOINTECH */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Cabecera de la sección de servicios */}
            <div className="max-w-3xl mb-12">
              <span className="text-[#246D00] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-2">
                PORTAFOLIO OPERATIVO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002662] font-headline tracking-tight">
                Nuestros Servicios Especializados!
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                Cada servicio cuenta con galería fotográfica de Biointech S.A.S., verá cómo transformamos pasivos ambientales en activos ecológicos... .
              </p>
            </div>

            {/* Listado de los Servicios con separación superior de 52px */}
            <div className="space-y-[52px]">
              {SERVICES_LIST.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  isFirst={index === 0}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* BANNER DE PLANTA GUAYACÁN */}
        {/* ================================================================= */}
        <section className="py-24 bg-[#002662] text-white relative overflow-hidden" id="planta-guayacan">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-35 mix-blend-overlay pointer-events-none">
            <img 
              alt="Planta Guayacan Casanare" 
              className="w-full h-full object-cover" 
              src="http://biointech.co/2026/wp-content/uploads/banner-servicios-biointech-abonos-agenciamio-v12b-1.jpg" 
              referrerPolicy="no-referrer" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-secondary-container font-black tracking-widest text-xs uppercase mb-4 bg-white/10 px-3 py-1 rounded-md">
                Planta Insignia
              </span>

              {/* El título debe decir Planta Guayacan */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-headline mb-6 tracking-tighter">
                Planta Guayacan
              </h2>

              <p className="text-lg text-slate-200 mb-10 leading-relaxed">
                Ubicada en el corazón de Casanare, Colombia, Guayacán es el centro de biorremediación y tratamiento de pasivos industriales más avanzado de la región, diseñado para procesar grandes volúmenes con impacto positivo inmediato y economía circular.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-4 border-secondary-container pl-4">
                  <div className="text-4xl sm:text-5xl font-black text-secondary-container font-headline">400T</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 mt-1 font-bold">Capacidad Mensual</div>
                </div>
                <div className="border-l-4 border-secondary-container pl-4">
                  <div className="text-4xl sm:text-5xl font-black text-secondary-container font-headline">98%</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 mt-1 font-bold">Eficiencia en Biorremediación</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-secondary-container mb-10 font-bold">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Casanare, Colombia</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://biointech.co/2026/planta.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-opacity-90 transition-all shadow-lg active:scale-95"
                >
                  Ver Planta Completa
                </a>
                
                <a 
                  href={WHATSAPP_CONSULTING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-base transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* BANNER DE CONVERSIÓN FUERTE */}
        {/* ================================================================= */}
        <section className="py-20 bg-gradient-to-r from-secondary to-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-headline max-w-4xl mx-auto mb-8 leading-tight">
              ¿Necesita gestionar residuos industriales o recuperar áreas contaminadas?
            </h2>
            <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Obtenga asesoría directa con nuestros ingenieros especializados. Respuesta rápida con alcance y cotización a su medida.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={WHATSAPP_CONSULTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-white text-secondary hover:bg-slate-50 px-10 py-4 rounded-xl font-black text-lg shadow-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-6 h-6 fill-secondary/20" />
                <span>Solicitar Asesoría</span>
              </a>
              <a 
                href="https://biointech.co/2026/biointech.html#contacto" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-xl font-black text-lg transition-all"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* FORMULARIO DE CONTACTO E INFORMACIÓN */}
        {/* ================================================================= */}
        <section className="py-24 bg-white" id="contacto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Información corporativa */}
              <div className="lg:col-span-5">
                <span className="text-[#246D00] font-bold text-xs tracking-[0.25em] uppercase block mb-2">
                  ATENCIÓN INMEDIATA
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#002662] font-headline mb-6">
                  Hablemos de su proyecto
                </h2>
                <p className="text-slate-600 mb-10 text-base sm:text-lg leading-relaxed">
                  Nuestro equipo técnico y administrativo está listo para diseñar la solución ambiental que su empresa requiere en cualquier región del país.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <MapPin className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#002662] text-sm uppercase">Oficina Bogotá</p>
                      <p className="text-slate-600 text-sm">Calle 171 No. 55A-41</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Factory className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#002662] text-sm uppercase">Planta de Operaciones</p>
                      <p className="text-slate-600 text-sm">Planta Guayacán • Casanare, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Mail className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#002662] text-sm uppercase">Correo Electrónico</p>
                      <a href="mailto:analista.administrativo@biointech.co" className="text-slate-600 hover:text-[#002662] text-sm transition-colors">
                        analista.administrativo@biointech.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <Phone className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-[#002662] text-sm uppercase">Línea Telefónica & WhatsApp</p>
                      <a href="tel:+573160445790" className="text-slate-600 hover:text-[#002662] text-sm transition-colors block">
                        +57 316 044 5790
                      </a>
                      <a 
                        href={WHATSAPP_CONSULTING_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-600 font-bold text-xs hover:underline mt-0.5 inline-block"
                      >
                        +57 318 869 4845 (WhatsApp Asesoría Directa)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Requerimientos */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="text-xl font-black text-[#002662] font-headline mb-6">
                  Formulario de Solicitud de Servicios
                </h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Redirección inteligente con los datos del form hacia WhatsApp
                    const form = e.currentTarget;
                    const nombre = (form.elements.namedItem('nombre') as HTMLInputElement)?.value || '';
                    const empresa = (form.elements.namedItem('empresa') as HTMLInputElement)?.value || '';
                    const servicio = (form.elements.namedItem('servicio') as HTMLSelectElement)?.value || '';
                    const mensaje = (form.elements.namedItem('mensaje') as HTMLTextAreaElement)?.value || '';
                    
                    const text = encodeURIComponent(
                      `Hola Biointech! Mi nombre es ${nombre} de la empresa ${empresa}. Deseo cotizar el servicio de ${servicio}. Detalle: ${mensaje}`
                    );
                    window.open(`https://api.whatsapp.com/send?phone=+573188694845&text=${text}`, '_blank');
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Nombre Completo
                      </label>
                      <input 
                        name="nombre"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800" 
                        placeholder="Ej. Ing. Carlos Rodríguez" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Empresa / Razón Social
                      </label>
                      <input 
                        name="empresa"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800" 
                        placeholder="Nombre de la empresa" 
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Email Corporativo
                      </label>
                      <input 
                        name="email"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800" 
                        placeholder="email@empresa.com" 
                        type="email"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Teléfono / Celular
                      </label>
                      <input 
                        name="telefono"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800" 
                        placeholder="+57 300 000 0000" 
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Servicio Requerido
                    </label>
                    <select 
                      name="servicio"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800"
                    >
                      <option value="">Seleccione uno de los 7 servicios</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number}. {s.title}
                        </option>
                      ))}
                      <option value="Consultoría General y Proyecto Guayacán">
                        Proyecto Integral Planta Guayacán
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Mensaje / Descripción del Pasivo o Requerimiento
                    </label>
                    <textarea 
                      name="mensaje"
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002662] focus:ring-0 transition-all p-3 text-sm text-slate-800" 
                      placeholder="Indique volumen aproximado de residuo, ubicación del proyecto o detalles específicos..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#002662] hover:bg-[#003882] text-white py-4 rounded-xl font-black text-base transition-all shadow-lg hover:shadow-xl active:scale-95"
                  >
                    Enviar Solicitud
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* ================================================================= */}
      {/* FOOTER CORPORATIVO */}
      {/* ================================================================= */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="text-xl font-black tracking-tighter text-white font-headline">
                BIOINTECH S.A.S.
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              © 2026 Biointech S.A.S. • Precision Industrial & Ecological Stewardship.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <a href="https://biointech.co/2026/biointech.html" className="hover:text-white transition-colors">Inicio</a>
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
              className="hover:text-white transition-colors"
            >
              Servicios
            </a>
            <a href="https://biointech.co/2026/planta.html" className="hover:text-white transition-colors">Planta Guayacán</a>
            <a href="https://biointech.co/2026/proyectos.html" className="hover:text-white transition-colors">Proyectos</a>
            <a href="https://biointech.co/2026/biointech.html#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

      {/* ================================================================= */}
      {/* BOTÓN FLOTANTE WHATSAPP ASESORÍA DIRECTA */}
      {/* ================================================================= */}
      <a
        href={WHATSAPP_CONSULTING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        title="Solicitar Asesoría por WhatsApp"
        aria-label="Abrir chat de WhatsApp para asesoría"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 font-bold text-sm">
          Solicitar Asesoría
        </span>
      </a>
    </div>
  );
}
