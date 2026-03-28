import { galleryData } from './data/gallery';

export default function App() {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <a className="text-2xl font-black tracking-tighter text-primary dark:text-blue-400 font-headline" href="#">BIOINTECH</a>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-primary transition-opacity duration-300" href="#">Inicio</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-primary transition-opacity duration-300" href="#">Nosotros</a>
            <a className="text-secondary dark:text-green-400 font-bold border-b-2 border-secondary pb-1" href="#">Servicios</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-primary transition-opacity duration-300" href="#">Proyecto Guayacán</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-primary transition-opacity duration-300" href="#">Sistemas</a>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-md font-bold hover:opacity-80 transition-opacity">Contacto</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Aerial view Casanare" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqHFlXfi5mOFpN6wPaz4nJexZp2dhOOc6cJ9pgb0gn1cQhjqNo_3UQDwBblGnH7C_T2q_o0x-8MH2Cb4_f_wANg5hgsf7c_J36hD_YOzQFN54Jr3nZPPWNG_Gqjc5VJaAiApZg3d3tvX5eEfUITgLiDQ5iG2p62zjaYTNkFNqCliJIhLuyfzc0K5fbVOgwL2B5Jezl_1ZwZOXOufWXDSQ6d6hHdn5s9xAGJ_Mh4bhb7aizut1xaxrqVJ9aUeCwN-QjX_1fKuzuaA" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-secondary text-on-secondary text-xs font-bold tracking-widest uppercase mb-6 rounded">Líderes en Biorremediación</span>
            <h1 className="text-6xl md:text-8xl font-black text-white font-headline leading-tight tracking-tighter mb-8">
              Proyectos y <br/>
              <span className="text-secondary-container">Soluciones</span> <br/>
              Ambientales
            </h1>
            <p className="text-xl text-surface-container-lowest/80 mb-12 max-w-xl font-light leading-relaxed">
              Experiencia comprobada en tratamiento de residuos industriales y recuperación de ecosistemas estratégicos con precisión científica.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-lg shadow-xl hover:opacity-90 transition-all active:scale-95">Solicitar asesoría</button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all">Ver servicios</button>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
                <img alt="Laboratory tech" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KXMRPFyXdtw-br3NmhoJbM6TAsrAIw9N2R9fLTc5_njSpgfEwnA1Jnx_5bm2oDvQNNbvRJrwElQ4btCL0qJtVXnDjrQywaURdQxjge-FCIyCEa6vdP6E6UGWQM_0YdddPce2SF8DLZETUBENGGEgtXsJH-4eJKoplD79FJYCz9rMZZ_DHyrVF3LqclLHDD_yHgGxaSFuM98kx-9wmXqO91X2RmCHscduyC42rQKm5wOI1KnMCPnOLRyg-gOrISONKoHD4bXXGA" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden md:block">
                <div className="text-6xl font-black text-secondary-container mb-2 font-headline tracking-tighter">15+</div>
                <div className="text-on-primary text-sm font-bold uppercase tracking-widest">Años de Innovación</div>
              </div>
            </div>
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Experiencia e Integridad</h2>
              <h3 className="text-4xl md:text-5xl font-black text-on-surface font-headline mb-8 leading-tight">Ciencia aplicada a la sostenibilidad industrial.</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                En Biointech S.A.S., transformamos pasivos ambientales en activos ecológicos. Nuestra metodología integra tratamiento de residuos industriales de alta complejidad con procesos biotecnológicos de vanguardia, garantizando el cumplimiento normativo y resultados medibles en cada intervención.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-4 border-secondary pl-4">
                  <span className="block text-primary font-bold text-xl">Cumplimiento</span>
                  <span className="text-on-surface-variant text-sm">Estándares ISO y normatividad nacional.</span>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <span className="block text-primary font-bold text-xl">Innovación</span>
                  <span className="text-on-surface-variant text-sm">Laboratorios propios de biotecnología.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 space-y-32">
          
          {/* Service 1 */}
          <div className="space-y-12" id="service-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-primary font-headline tracking-tighter mb-4">01. Tratamiento de residuos industriales</h2>
                <p className="text-on-surface-variant text-lg">Operación de plantas especializadas y equipos de última generación para el manejo seguro de desechos químicos y mecánicos.</p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:bg-primary-container transition-colors shrink-0">Solicitar este servicio</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg hover-lift">
                <img className="w-full h-full object-cover" src={galleryData.service1[0].src} alt={galleryData.service1[0].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift">
                <img className="w-full h-full object-cover aspect-square" src={galleryData.service1[1].src} alt={galleryData.service1[1].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift">
                <img className="w-full h-full object-cover aspect-square" src={galleryData.service1[2].src} alt={galleryData.service1[2].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg hover-lift h-64">
                <img className="w-full h-full object-cover" src={galleryData.service1[3].src} alt={galleryData.service1[3].alt} referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="space-y-12" id="service-2">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-primary font-headline tracking-tighter mb-4">02. Biorremediación de suelos</h2>
                <p className="text-on-surface-variant text-lg">Recuperación de terrenos impactados por hidrocarburos mediante procesos biológicos in-situ y ex-situ.</p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:bg-primary-container transition-colors shrink-0">Solicitar este servicio</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift aspect-video col-span-2">
                <img className="w-full h-full object-cover" src={galleryData.service2[0].src} alt={galleryData.service2[0].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift aspect-square">
                <img className="w-full h-full object-cover" src={galleryData.service2[1].src} alt={galleryData.service2[1].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift aspect-square">
                <img className="w-full h-full object-cover" src={galleryData.service2[2].src} alt={galleryData.service2[2].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift aspect-video col-span-2">
                <img className="w-full h-full object-cover" src={galleryData.service2[3].src} alt={galleryData.service2[3].alt} referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="space-y-12" id="service-3">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-primary font-headline tracking-tighter mb-4">03. Tratamiento de lodos y aguas</h2>
                <p className="text-on-surface-variant text-lg">Sistemas avanzados de filtración y depuración para la gestión eficiente del recurso hídrico industrial.</p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:bg-primary-container transition-colors shrink-0">Solicitar este servicio</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift h-80">
                <img className="w-full h-full object-cover" src={galleryData.service3[0].src} alt={galleryData.service3[0].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg hover-lift h-80">
                <img className="w-full h-full object-cover" src={galleryData.service3[1].src} alt={galleryData.service3[1].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg hover-lift h-80">
                <img className="w-full h-full object-cover" src={galleryData.service3[2].src} alt={galleryData.service3[2].alt} referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="space-y-12" id="service-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant pb-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-primary font-headline tracking-tighter mb-4">04. Aprovechamiento de biocultivos</h2>
                <p className="text-on-surface-variant text-lg">Integración de biomasa y cultivos especializados para la regeneración orgánica y generación energética.</p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-bold hover:bg-primary-container transition-colors shrink-0">Solicitar este servicio</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="col-span-2 overflow-hidden rounded-xl shadow-lg hover-lift h-96">
                <img className="w-full h-full object-cover" src={galleryData.service4[0].src} alt={galleryData.service4[0].alt} referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-4 h-96">
                <div className="overflow-hidden rounded-xl shadow-lg hover-lift">
                  <img className="w-full h-full object-cover" src={galleryData.service4[1].src} alt={galleryData.service4[1].alt} referrerPolicy="no-referrer" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg hover-lift">
                  <img className="w-full h-full object-cover" src={galleryData.service4[2].src} alt={galleryData.service4[2].alt} referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 & 6 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8" id="service-5">
              <h2 className="text-4xl font-black text-primary font-headline tracking-tighter border-b border-outline-variant pb-4">05. Gestión integral</h2>
              <p className="text-on-surface-variant">Logística, transporte y operaciones terrestres para la disposición final certificada de residuos.</p>
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-lg shadow hover-lift aspect-square object-cover" src={galleryData.service5[0].src} alt={galleryData.service5[0].alt} referrerPolicy="no-referrer" />
                <img className="rounded-lg shadow hover-lift aspect-square object-cover" src={galleryData.service5[1].src} alt={galleryData.service5[1].alt} referrerPolicy="no-referrer" />
              </div>
              <button className="w-full bg-secondary text-on-secondary px-8 py-3 rounded-md font-bold hover:opacity-90">Ver Detalles de Gestión</button>
            </div>
            <div className="space-y-8" id="service-6">
              <h2 className="text-4xl font-black text-primary font-headline tracking-tighter border-b border-outline-variant pb-4">06. Recuperación ambiental</h2>
              <p className="text-on-surface-variant">Restauración de ecosistemas degradados, devolviendo la biodiversidad a áreas industriales clausuradas.</p>
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-lg shadow hover-lift aspect-square object-cover" src={galleryData.service6[0].src} alt={galleryData.service6[0].alt} referrerPolicy="no-referrer" />
                <img className="rounded-lg shadow hover-lift aspect-square object-cover" src={galleryData.service6[1].src} alt={galleryData.service6[1].alt} referrerPolicy="no-referrer" />
              </div>
              <button className="w-full bg-secondary text-on-secondary px-8 py-3 rounded-md font-bold hover:opacity-90">Ver Detalles de Recuperación</button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img alt="Proyecto Guayacan" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMewTgOfhub2WlSxZmzULB-b8_7jjSm-PB2F4WDDGhhHKYKeVd-gJHFrVfPsfAK5ElxClwnKjPq8IRE69teneoE828XskRlr4FHVxePPdynfg15qWnLe--MNpLcgP389W6-beeJMItrV8F_8VQxrCtZgDfXSzA3CTWk68H8ctAaUP2IfhiuLVZ58sUqwsIhMGctrsmjuCSjlUDrmPJC_chmGUmYJG0N-J_gKUMSoH6v5u-npSk7bgQZOLZzqybiAu5ZaRDFLxTgA" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-secondary-container font-black tracking-widest text-sm uppercase mb-6 block">Proyecto Insignia</span>
            <h2 className="text-6xl font-black font-headline mb-8 tracking-tighter">Proyecto Guayacán</h2>
            <p className="text-xl text-surface-container-highest/80 mb-12 leading-relaxed">
              Ubicado en el corazón de Casanare, Colombia, Guayacán es el centro de biorremediación más avanzado de la región, diseñado para procesar pasivos ambientales de gran escala con impacto positivo inmediato.
            </p>
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div className="space-y-2">
                <div className="text-5xl font-black text-secondary-container font-headline">400T</div>
                <div className="text-sm uppercase tracking-widest opacity-70">Capacidad Mensual</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-secondary-container font-headline">98%</div>
                <div className="text-sm uppercase tracking-widest opacity-70">Eficiencia en Biorremediación</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-secondary-container mb-12">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-bold tracking-tight">Casanare, Colombia</span>
            </div>
            <button className="bg-secondary text-on-secondary px-12 py-4 rounded-md font-bold text-lg hover:brightness-110 transition-all">Ver proyecto completo</button>
          </div>
        </div>
      </section>

      {/* Strong Conversion CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white font-headline max-w-4xl mx-auto mb-10 leading-tight">
            ¿Necesita gestionar residuos industriales o recuperar áreas contaminadas?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-secondary px-12 py-4 rounded-md font-black text-lg hover:bg-surface-container-low transition-all">Solicitar asesoría</button>
            <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-md font-black text-lg hover:bg-white/10 transition-all">Contactar ahora</button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black text-primary font-headline mb-8">Hablemos de su proyecto</h2>
              <p className="text-on-surface-variant mb-12 text-lg">Nuestro equipo técnico está listo para diseñar la solución ambiental que su empresa requiere.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                  <div>
                    <p className="font-bold text-primary">Oficina Bogotá</p>
                    <p className="text-on-surface-variant">Calle 171 No. 55A-41</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">factory</span>
                  <div>
                    <p className="font-bold text-primary">Planta de Operaciones</p>
                    <p className="text-on-surface-variant">Casanare, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
                  <div>
                    <p className="font-bold text-primary">Correo Electrónico</p>
                    <p className="text-on-surface-variant">analista.administrativo@biointech.co</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                  <div>
                    <p className="font-bold text-primary">Teléfono</p>
                    <p className="text-on-surface-variant">+57 3160445790</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl border border-outline-variant/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline">Nombre completo</label>
                    <input className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Ej. Juan Pérez" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline">Empresa</label>
                    <input className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Nombre de la empresa" type="text"/>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline">Email corporativo</label>
                    <input className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="email@empresa.com" type="email"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-outline">Teléfono</label>
                    <input className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="+57 300 000 0000" type="tel"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">Tipo de servicio</label>
                  <select className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3">
                    <option>Seleccione un servicio</option>
                    <option>Tratamiento de residuos</option>
                    <option>Biorremediación</option>
                    <option>Tratamiento de lodos/aguas</option>
                    <option>Biocultivos</option>
                    <option>Gestión Integral</option>
                    <option>Recuperación Ambiental</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline">Mensaje / Requerimiento</label>
                  <textarea className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Cuéntenos sobre su proyecto..." rows={4}></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-on-primary py-4 rounded-md font-black text-lg hover:bg-primary-container transition-all shadow-lg">Enviar Solicitud</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-200 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold text-white uppercase tracking-widest mb-2">BIOINTECH S.A.S.</div>
            <p className="text-slate-400 font-label text-sm">© 2024 Biointech S.A.S. Stewardship & Precision.</p>
          </div>
          <div className="flex gap-8 items-center flex-wrap justify-center">
            <a className="text-slate-400 hover:text-white transition-colors duration-200 text-sm" href="#">Privacidad</a>
            <a className="text-slate-400 hover:text-white transition-colors duration-200 text-sm" href="#">Términos</a>
            <a className="text-slate-400 hover:text-white transition-colors duration-200 text-sm" href="#">Contacto</a>
            <a className="text-slate-400 hover:text-white transition-colors duration-200 text-sm" href="#">Sostenibilidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
