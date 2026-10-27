// ============================================================================
// DATOS MAESTROS DE SERVICIOS - BIOINTECH S.A.S.
// ============================================================================
// Las fotos e infografías están configuradas para que puedas reemplazarlas
// fácilmente desde el explorador de archivos de tu hosting o cPanel:
//
// Estructura de carpetas en tu servidor:
// https://biointech.co/2026/1-serv/foto-1.jpg ... foto-6.jpg + infografia.jpg
// https://biointech.co/2026/2-serv/foto-1.jpg ... foto-6.jpg + infografia.jpg
// ... hasta 7-serv!
//
// Fallback general para fotos que no existan:
// https://biointech.co/2026/images/biointech-galeria-v1.jpg
// ============================================================================

export interface ServicePhoto {
  id: string;
  src: string;        // Ruta en hosting (ej: https://biointech.co/2026/1-serv/foto-1.jpg)
  fallback: string;   // Fallback oficial de Biointech
  alt: string;
  caption?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailUrl: string;
  note: string;
  infographic: {
    src: string;      // Ruta en hosting (ej: https://biointech.co/2026/1-serv/infografia.jpg)
    fallback: string; // Banner infográfico de alta resolución (500px)
    alt: string;
    title: string;
    highlights: string[];
  };
  photos: ServicePhoto[];
}

export const DEFAULT_GALLERY_FALLBACK = "https://biointech.co/2026/images/biointech-galeria-v1.jpg";

export const WHATSAPP_CONSULTING_URL = 
  "https://api.whatsapp.com/send?phone=+573112888995&text=Vengo%20de%20la%20Web%20Biointech%20y%20deseo%20asesor%C3%ADa!";

export const VER_SERVICIOS_URL = 
  "https://biointech.co/2026/servicios.html#services";

export const getServiceWhatsAppUrl = (serviceTitle: string) => {
  return `https://api.whatsapp.com/send?phone=+573112888995&text=${encodeURIComponent(
    `Vengo de la Web Biointech y deseo solicitar el servicio de: ${serviceTitle}!`
  )}`;
};

export const SERVICES_LIST: ServiceItem[] = [
  // --------------------------------------------------------------------------
  // 01. Biorremediación
  // --------------------------------------------------------------------------
  {
    id: "servicio-1",
    number: "01",
    title: "Biorremediación",
    shortDescription: 
      "Consorcio de bacterias Nativas. Determinamos un consorcio de bacterias nativas no patógenos y altamente biodegradadoras, para la aplicación en suelos contaminados.",
    detailUrl: "https://biointech.co/2026/servicios.html#biorremediacion",
    note: 
      "Nota técnica: Proceso certificado de biorremediación acelerada que restablece la microbiota y equilibrio ecológico de suelos impactados por \"metales\" pesados y lodos aceitosos. Garantizamos reducción verificable de TPHs y entrega de terrenos conformes a la normatividad ambiental vigente con trazabilidad analítica de laboratorio.",
    infographic: {
      src: "https://biointech.co/2026/1-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de biorremediación de suelos",
      title: "Ciclo de Biorremediación In-Situ y Ex-Situ Biointech",
      highlights: [
        "Aislamiento y multiplicación de bacterias degradadoras nativas",
        "Bioestimulación controlada: aireación mecánica y balance C:N:P",
        "Monitoreo analítico periódico de TPHs y pH hasta límites permisibles"
      ]
    },
    photos: [
      {
        id: "s1-1",
        src: "https://biointech.co/2026/1-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Operación de biorremediación en campo",
        caption: "Planta y celdas de tratamiento biológico en Casanare"
      },
      {
        id: "s1-2",
        src: "https://biointech.co/2026/1-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Pruebas técnicas de suelo y remediación",
        caption: "Muestreo y monitoreo de TPHs in-situ"
      },
      {
        id: "s1-3",
        src: "https://biointech.co/2026/1-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Consorcios bacterianos en laboratorio",
        caption: "Bioaumento con cepas altamente degradadoras"
      },
      {
        id: "s1-4",
        src: "https://biointech.co/2026/1-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Vista aérea de celdas de tratamiento",
        caption: "Manejo masivo de pasivos de hidrocarburos"
      },
      {
        id: "s1-5",
        src: "https://biointech.co/2026/1-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Maquinaria pesada y equipo técnico en acondicionamiento de biopilas",
        caption: "Equipo Biointech en volteo mecánico y oxigenación programada"
      },
      {
        id: "s1-6",
        src: "https://biointech.co/2026/1-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Análisis microbiológico de control",
        caption: "Verificación de recuentos bacterianos UFC/g"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 02. Fitorremediación y Biocultivos
  // --------------------------------------------------------------------------
  {
    id: "servicio-2",
    number: "02",
    title: "Fitorremediación y Biocultivos",
    shortDescription: 
      "Implementación de especies vegetales hiperacumuladoras y biocultivos agronómicos para la estabilización, extracción de metales y enriquecimiento orgánico de áreas intervenidas por la industria.",
    detailUrl: "https://biointech.co/2026/servicios.html#fitorremediacion",
    note: 
      "Nota técnica: Solución de fitoextracción y fitoestabilización basada en especies botánicas seleccionadas. Induce la biotransformación radicular de compuestos complejos mientras promueve la reincorporación de materia vegetal al suelo, mitigando la erosión y reconstituyendo la biodiversidad nativa regional.",
    infographic: {
      src: "https://biointech.co/2026/2-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de fitorremediación y biocultivos industriales",
      title: "Proceso Botánico de Fitorremediación & Biocultivos",
      highlights: [
        "Rizofiltración y degradación de contaminantes en zona radicular",
        "Captura de metales pesados en biomasa aérea no comestible",
        "Generación de abonos verdes y coberturas protectoras del suelo"
      ]
    },
    photos: [
      {
        id: "s2-1",
        src: "https://biointech.co/2026/2-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Cultivos de girasoles para fitoextracción",
        caption: "Plantaciones de biocultivos con fines de fitorremediación"
      },
      {
        id: "s2-2",
        src: "https://biointech.co/2026/2-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Transformación de biomasa y compostaje",
        caption: "Aprovechamiento agronómico de biomasa residual"
      },
      {
        id: "s2-3",
        src: "https://biointech.co/2026/2-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Integración de energía renovable en proyectos verdes",
        caption: "Sistemas sustentables en campo Casanare"
      },
      {
        id: "s2-4",
        src: "https://biointech.co/2026/2-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Extensión de biocultivos en restauración",
        caption: "Campos restaurados con vegetación densa"
      },
      {
        id: "s2-5",
        src: "https://biointech.co/2026/2-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Sistemas radiculares densos",
        caption: "Rizorrefuerzo con pasto vetiver"
      },
      {
        id: "s2-6",
        src: "https://biointech.co/2026/2-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Semilleros forestales nativos",
        caption: "Propagación de árboles de la Orinoquía"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 03. Deshidratación de lodos con geocontenedores
  // --------------------------------------------------------------------------
  {
    id: "servicio-3",
    number: "03",
    title: "Deshidratación de lodos con geocontenedores",
    shortDescription: 
      "Tecnología geotextil de alta resistencia para el confinamiento, drenaje y deshidratación eficiente de lodos industriales de perforación, fondos de fosa y sedimentos aceitosos.",
    detailUrl: "https://biointech.co/2026/servicios.html#deshidratacion-lodos",
    note: 
      "Nota técnica: Los geocontenedores tubulares de polipropileno retienen hasta un 99% de sólidos finos mediante filtración continua. Reducen el volumen de lodos en más del 80%, disminuyendo drásticamente costos logísticos de transporte y facilitando la disposición final segura en campo.",
    infographic: {
      src: "https://biointech.co/2026/3-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de deshidratación con geocontenedores",
      title: "Esquema Operativo Geotextil de Alta Capacidad",
      highlights: [
        "Dosificación automatizada de floculantes y polímeros de alto peso molecular",
        "Llenado y drenaje pasivo sin consumo energético continuo",
        "Consolidación de torta de lodo deshidratado para manejo seguro"
      ]
    },
    photos: [
      {
        id: "s3-1",
        src: "https://biointech.co/2026/3-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Instalación de geocontenedores en plataforma",
        caption: "Plataforma de geocontenedores para secado masivo"
      },
      {
        id: "s3-2",
        src: "https://biointech.co/2026/3-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Válvulas y bombas de inyección a geotextil",
        caption: "Sistemas de bombeo de lodos con polímeros"
      },
      {
        id: "s3-3",
        src: "https://biointech.co/2026/3-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Confinamiento seguro de lodos deshidratados",
        caption: "Acopio y reducción volumétrica certificada"
      },
      {
        id: "s3-4",
        src: "https://biointech.co/2026/3-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Tanques de recolección de efluentes clarificados",
        caption: "Recuperación de agua para circuito cerrado"
      },
      {
        id: "s3-5",
        src: "https://biointech.co/2026/3-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Llenado a presión controlada",
        caption: "Manifold de inyección con manómetros"
      },
      {
        id: "s3-6",
        src: "https://biointech.co/2026/3-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Geotextil permeable de poro micrométrico",
        caption: "Estructura tejida resistente a radiación UV"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 04. Unidad de termo centrifugado para recuperación de aceites. UTC
  // --------------------------------------------------------------------------
  {
    id: "servicio-4",
    number: "04",
    title: "Unidad de termo centrifugado para recuperación de aceites. UTC",
    shortDescription: 
      "Tecnología térmica de alto rendimiento y centrifugación trifásica continua para recuperar crudo comercializable a partir de borras aceitosas y emulsiones de fondo de tanque.",
    detailUrl: "https://biointech.co/2026/servicios.html#termo-centrifugado",
    note: 
      "Nota técnica: La unidad UTC combina calentamiento indirecto por vapor y fuerza centrífuga de alta velocidad para romper emulsiones muy estables. Separa con máxima precisión el hidrocarburo puro apto para refinería (BS&W < 1%), agua clarificada para reuso y sólidos inertes para biorremediación, generando retorno económico para el operador.",
    infographic: {
      src: "https://biointech.co/2026/4-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de Unidad de Termo Centrifugado UTC",
      title: "Planta de Separación Trifásica UTC Biointech",
      highlights: [
        "Calentamiento controlado a 85°C con inyección de desemulsificantes verdes",
        "Decanter centrífugo trifásico de alta aceleración G",
        "Recuperación del 95% del hidrocarburo con especificación comercial"
      ]
    },
    photos: [
      {
        id: "s4-1",
        src: "https://biointech.co/2026/4-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Unidad móvil UTC en operación industrial",
        caption: "Planta modular de termo centrifugado en campo"
      },
      {
        id: "s4-2",
        src: "https://biointech.co/2026/4-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Panel de control automático y válvulas de proceso",
        caption: "Instrumentación y monitoreo SCADA en tiempo real"
      },
      {
        id: "s4-3",
        src: "https://biointech.co/2026/4-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Tanques térmicos de acondicionamiento de borras",
        caption: "Cámaras de calentamiento por serpentín indirecto"
      },
      {
        id: "s4-4",
        src: "https://biointech.co/2026/4-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Líneas de descarga de hidrocarburo comercial",
        caption: "Salida de crudo limpio directo a tanques de entrega"
      },
      {
        id: "s4-5",
        src: "https://biointech.co/2026/4-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Rotor de decanter centrífugo en acero inoxidable",
        caption: "Mecánica de alta precisión para lodos abrasivos"
      },
      {
        id: "s4-6",
        src: "https://biointech.co/2026/4-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Generador de calor y caldera marina",
        caption: "Vapor a presión para calentamiento indirecto"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 05. Tratamiento de Aguas
  // --------------------------------------------------------------------------
  {
    id: "servicio-5",
    number: "05",
    title: "Tratamiento de Aguas",
    shortDescription: 
      "Sistemas integrales de filtración, clarificación fisicoquímica, flotación DAF y purificación terciaria para la reutilización segura y vertimiento conforme de aguas industriales y de producción.",
    detailUrl: "https://biointech.co/2026/servicios.html#tratamiento-aguas",
    note: 
      "Nota técnica: Nuestras plantas modulares compactas eliminan hasta un 99.8% de hidrocarburos totales (TPH), sólidos suspendidos totales (SST), grasas y metales pesados disueltos. Cumplimos los más exigentes estándares de vertimiento.",
    infographic: {
      src: "https://biointech.co/2026/5-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de plantas de tratamiento de aguas residuales industriales",
      title: "Flujograma Fisicoquímico & Terciario de Aguas Biointech",
      highlights: [
        "Separación gravimétrica API y celdas de flotación por aire disuelto (DAF)",
        "Coagulación-floculación con polielectrólitos de última generación",
        "Filtración multimedia terciaria y carbón activado con monitoreo continuo"
      ]
    },
    photos: [
      {
        id: "s5-1",
        src: "https://biointech.co/2026/5-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Tanques de clarificación y sedimentación",
        caption: "Batería de tanques de depuración de aguas industriales"
      },
      {
        id: "s5-2",
        src: "https://biointech.co/2026/5-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Filtros multimedia y carbón activado",
        caption: "Tren de pulimento para agua clarificada cristalina"
      },
      {
        id: "s5-3",
        src: "https://biointech.co/2026/5-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Manifold hidráulico de recirculación",
        caption: "Válvulas motorizadas y control de presión"
      },
      {
        id: "s5-4",
        src: "https://biointech.co/2026/5-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Área de almacenamiento de químicos dosificadores",
        caption: "Inyección dosificada de polímeros y coagulantes"
      },
      {
        id: "s5-5",
        src: "https://biointech.co/2026/5-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Celda DAF con microburbujas",
        caption: "Flotación eficiente de aceites emulsionados"
      },
      {
        id: "s5-6",
        src: "https://biointech.co/2026/5-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Sensores de turbidez y conductividad",
        caption: "Lectura continua con transmisión remota de datos"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 06. Gestión INTEGRAL
  // --------------------------------------------------------------------------
  {
    id: "servicio-6",
    number: "06",
    title: "Gestión INTEGRAL",
    shortDescription: 
      "Servicio total de logística, transporte especializado con flota propia, clasificación, valorización y disposición final certificada de residuos peligrosos (RESPEL) y convencionales.",
    detailUrl: "https://biointech.co/2026/servicios.html#gestion-integral",
    note: 
      "Nota técnica: Acompañamiento ambiental de principio a fin conforme al Decreto 1076. Proporcionamos vehículos vacuum presurizados, camiones estacas y furgones certificados con trazabilidad satelital GPS, manifiestos de transporte únicos y actas de disposición con blindaje jurídico para su empresa.",
    infographic: {
      src: "https://biointech.co/2026/6-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de gestión integral de residuos peligrosos RESPEL",
      title: "Cadena de Custodia & Gestión Integral RESPEL Biointech",
      highlights: [
        "Clasificación y etiquetado normativo en punto de origen",
        "Transporte certificado con pólizas de responsabilidad ambiental",
        "Certificados oficiales de disposición final y valorización"
      ]
    },
    photos: [
      {
        id: "s6-1",
        src: "https://biointech.co/2026/6-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Flota de camiones y vehículos especializados",
        caption: "Flota propia equipada para transporte de sustancias peligrosas"
      },
      {
        id: "s6-2",
        src: "https://biointech.co/2026/6-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Contenedores de acopio seguro de residuos",
        caption: "Recipientes herméticos y señalización UN homologada"
      },
      {
        id: "s6-3",
        src: "https://biointech.co/2026/6-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Áreas industriales recuperadas y restauradas",
        caption: "Recuperación de locaciones con estándar ecológico"
      },
      {
        id: "s6-4",
        src: "https://biointech.co/2026/6-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Revegetación en zona de disposición final",
        caption: "Ecosistemas rehabilitados tras la gestión de pasivos"
      },
      {
        id: "s6-5",
        src: "https://biointech.co/2026/6-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Personal técnico con EPP de seguridad",
        caption: "Protocolos estrictos de HSE y respuesta a emergencias"
      },
      {
        id: "s6-6",
        src: "https://biointech.co/2026/6-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Vehículo tipo Vacuum en succión de lodos",
        caption: "Extracción limpia sin emisiones ni derrames"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 07. Certificaciones Biointech
  // --------------------------------------------------------------------------
  {
    id: "servicio-7",
    number: "07",
    title: "Certificaciones Biointech",
    shortDescription: 
      "Sistemas de gestión integral acreditados bajo normas ISO 9001, ISO 14001 e ISO 45001, licencias ambientales vigentes y emisión de certificados oficiales de disposición final con validez jurídica.",
    detailUrl: "https://biointech.co/2026/servicios.html#certificaciones",
    note: 
      "Nota técnica: Nuestras operaciones cuentan con permisos ambientales otorgados por Corporinoquia y autoridades nacionales competentes. Emitimos certificados de disposición final, aprovechamiento y remediación con firma técnica y código de trazabilidad analítica, brindando total tranquilidad jurídica y tributaria a su empresa.",
    infographic: {
      src: "https://biointech.co/2026/7-serv/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de certificaciones y licencias ambientales Biointech",
      title: "Matriz Integrada de Calidad & Cumplimiento Normativo",
      highlights: [
        "Certificación ISO 9001:2015, ISO 14001:2015 y ISO 45001:2018",
        "Licencias ambientales y planes de manejo vigentes (PMA)",
        "Laboratorios asociados acreditados bajo norma ISO/IEC 17025"
      ]
    },
    photos: [
      {
        id: "s7-1",
        src: "https://biointech.co/2026/7-serv/foto-1.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Laboratorio y control de calidad",
        caption: "Verificación científica y ensayos certificados"
      },
      {
        id: "s7-2",
        src: "https://biointech.co/2026/7-serv/foto-2.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Auditorías de calidad y seguridad industrial",
        caption: "Auditorías periódicas de cumplimiento ISO"
      },
      {
        id: "s7-3",
        src: "https://biointech.co/2026/7-serv/foto-3.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Emisión de certificados ambientales y trazabilidad",
        caption: "Documentación oficial con valor legal ante entes de control"
      },
      {
        id: "s7-4",
        src: "https://biointech.co/2026/7-serv/foto-4.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Infraestructura corporativa certificada",
        caption: "Estándares corporativos de primer nivel"
      },
      {
        id: "s7-5",
        src: "https://biointech.co/2026/7-serv/foto-5.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Revisión técnica de expedientes ambientales",
        caption: "Ingenieros especializados en legislación ambiental"
      },
      {
        id: "s7-6",
        src: "https://biointech.co/2026/7-serv/foto-6.jpg",
        fallback: DEFAULT_GALLERY_FALLBACK,
        alt: "Capacitación continua en seguridad y medio ambiente",
        caption: "Cultura de excelencia y cero accidentes"
      }
    ]
  }
];
