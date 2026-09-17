// ============================================================================
// DATOS MAESTROS DE SERVICIOS - BIOINTECH S.A.S.
// ============================================================================
// Las fotos e infografías están configuradas para que puedas reemplazarlas
// fácilmente desde el explorador de archivos de tu hosting o cPanel:
//
// Estructura de carpetas en tu servidor (carpeta public):
// /images/servicios/servicio-1/foto-1.jpg ... foto-10.jpg + infografia.jpg
// /images/servicios/servicio-2/foto-1.jpg ... foto-10.jpg + infografia.jpg
// ... hasta servicio-7!
//
// Cada imagen cuenta con un 'fallback' automático en alta resolución, por lo que
// se visualizará de forma impecable antes y después de subir tus propios archivos.
// ============================================================================

export interface ServicePhoto {
  id: string;
  src: string;        // Ruta en hosting (ej: /images/servicios/servicio-1/foto-1.jpg)
  fallback: string;   // Imagen fotográfica de alta resolución demostrativa
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
    src: string;      // Ruta en hosting (ej: /images/servicios/servicio-1/infografia.jpg)
    fallback: string; // Banner infográfico de alta resolución (500px)
    alt: string;
    title: string;
    highlights: string[];
  };
  photos: ServicePhoto[];
}

export const WHATSAPP_CONSULTING_URL = 
  "https://api.whatsapp.com/send?phone=+573188694845&text=Vengo%20de%20la%20Web%20Biointech%20y%20deseo%20asesor%C3%ADa!";

export const VER_SERVICIOS_URL = 
  "https://biointech.co/2026/servicios.html#services";

export const getServiceWhatsAppUrl = (serviceTitle: string) => {
  return `https://api.whatsapp.com/send?phone=+573188694845&text=${encodeURIComponent(
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
    title: "Bio remediación",
    shortDescription: 
      "Tratamiento biológico in-situ y ex-situ para la descontaminación y degradación acelerada de hidrocarburos en suelos mediante consorcios bacterianos especializados y control paramétrico riguroso.",
    detailUrl: "https://biointech.co/2026/servicios.html#bioremedacion",
    note: 
      "Nota técnica: Proceso certificado de biorremediación acelerada que restablece la microbiota y equilibrio ecológico de suelos impactados por crudos pesados y lodos aceitosos. Garantizamos reducción verificable de TPHs y entrega de terrenos conformes a la normatividad ambiental vigente con trazabilidad analítica de laboratorio.",
    infographic: {
      src: "/images/servicios/servicio-1/infografia.jpg",
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
        src: "/images/servicios/servicio-1/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVg5whn8Jvp7WmKVRfnrpXYGiA2aLhJR-IGqmEdWFgto-AEpC39Z4dDqJB9on8kBU91RrpTiP70k1bgsEFpXKTdIsoqliTPIqSSz43rz6ldZRMGas-QxgBfjHWYmov7UyWetr8Ka_2uGPqbqt4DejFv7EKqe8DCcXxwUgfAageXH5Lf21VMjlC2cAE3IQ_fZCxJJBu1wb_jvYRdRVwMVeVsQ8cPqYU69pGl2kJmlOQWujv2HVoRL_veOBK40KVniKO-6YfaTPgIA",
        alt: "Operación de biorremediación en campo",
        caption: "Planta y celdas de tratamiento biológico en Casanare"
      },
      {
        id: "s1-2",
        src: "/images/servicios/servicio-1/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz8oNdj9Rpnc8Xs8j966gckMKxCbpH7D7VOBtTqmC9VRorjzl0du7kHlmQT3OloYfpuTtbLn9hgGG6PctIBLpca7UJQanfli4kn-_ixTs6sRLKXeJ0lOG3_RY5cMtUqstxxM_ENTqzIsGSu025y14TkZk1_Y5Uirok2XV3P-lsw9ZmZjdZQrBg4a2cw7hBira5X_r6eSeCFDvjLlwlSvfRgo-2PjJ80ikzj0a47zJbOsl35AIaNaph0ifl6bO1-qVmCqidjp3PJg",
        alt: "Pruebas técnicas de suelo y remediación",
        caption: "Muestreo y monitoreo de TPHs in-situ"
      },
      {
        id: "s1-3",
        src: "/images/servicios/servicio-1/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjxyhyCfbYPh8yARin4E7ULus1IXoVUfpFvMF_7bDqhi4SNCd6r0bq52fWVF6ZScu7_oLaMzGhtn2li_GwGGlzDG3S_3gdJrrLcsMXS1WpmDx32VyZp75lJesxCvFrhdggl7J5B4pB3W64jO16pHjJiRcBjRKdQ4Undz6a7zJI-Nn4WcrNVzzraJIM8lTZ3wqAMhdBFnuWVBDasZO54nXzVvIXHd9hRfaeR6PDoN5nieC9hsKEDb7kMIgI3qdoxig0VJcx_4zDnQ",
        alt: "Consorcios bacterianos en laboratorio",
        caption: "Bioaumento con cepas altamente degradadoras"
      },
      {
        id: "s1-4",
        src: "/images/servicios/servicio-1/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiHPzomFg_gwHZjkpCk2Qy943iN1KB7qIH4o88hRWvsZqowC5KNNc4k9RSqdsIFect8zmCsY9erj28yxovF8J7mLAOH8kWC92Hhs7TL_L_A9gMSz1Ub_S7WXvPk5TQI7tNbxeGQmQhxeUYhm5qgF-lCtPPHpDQQSG9d10rwmz4KfkiY4VLTJLw4gkb0yDJZC2KLSao33sROUqb1b3FMVyRsiqptrp-6iMDuYxZuhVQdXmN2I2ewx5HjDZ-NlnC2JhBjg1J-_u-VQ",
        alt: "Vista aérea de celdas de tratamiento",
        caption: "Manejo masivo de pasivos de hidrocarburos"
      },
      {
        id: "s1-5",
        src: "/images/servicios/servicio-1/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        alt: "Maquinaria pesada en acondicionamiento de biopilas",
        caption: "Volteo mecánico y oxigenación programada"
      },
      {
        id: "s1-6",
        src: "/images/servicios/servicio-1/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        alt: "Análisis microbiológico de control",
        caption: "Verificación de recuentos bacterianos UFC/g"
      },
      {
        id: "s1-7",
        src: "/images/servicios/servicio-1/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        alt: "Inoculación de nutrientes biológicos",
        caption: "Aplicación de micronutrientes y surfactantes verdes"
      },
      {
        id: "s1-8",
        src: "/images/servicios/servicio-1/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
        alt: "Recuperación de textura del suelo",
        caption: "Suelo estabilizado apto para revegetación"
      },
      {
        id: "s1-9",
        src: "/images/servicios/servicio-1/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        alt: "Monitoreo instrumental de gases",
        caption: "Control de emisiones y compuestos orgánicos volátiles"
      },
      {
        id: "s1-10",
        src: "/images/servicios/servicio-1/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
        alt: "Entrega de suelo libre de hidrocarburos",
        caption: "Cierre de proyecto con certificación ambiental"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 02. Fitoremediación y Biocultivos
  // --------------------------------------------------------------------------
  {
    id: "servicio-2",
    number: "02",
    title: "Fitoremediación y Biocultivos",
    shortDescription: 
      "Implementación de especies vegetales hiperacumuladoras y biocultivos agronómicos para la estabilización, extracción de metales y enriquecimiento orgánico de áreas intervenidas por la industria.",
    detailUrl: "https://biointech.co/2026/servicios.html#fitoremediacion",
    note: 
      "Nota técnica: Solución de fitoextracción y fitoestabilización basada en especies botánicas seleccionadas como Helianthus annuus y pasto Vetiver. Induce la biotransformación radicular de compuestos complejos mientras promueve la reincorporación de materia vegetal al suelo, mitigando la erosión y reconstituyendo la biodiversidad nativa regional.",
    infographic: {
      src: "/images/servicios/servicio-2/infografia.jpg",
      fallback: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80",
      alt: "Infografía técnica de fitoremediación y biocultivos industriales",
      title: "Proceso Botánico de Fitoremediación & Biocultivos",
      highlights: [
        "Rizofiltración y degradación de contaminantes en zona radicular",
        "Captura de metales pesados en biomasa aérea no comestible",
        "Generación de abonos verdes y coberturas protectoras del suelo"
      ]
    },
    photos: [
      {
        id: "s2-1",
        src: "/images/servicios/servicio-2/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiQcr14hhp21fIfP_Ce3GBnhGYwnH_er-qO-Uq9Tg6jLG_vV5F7nMI2-GV60U7QC9yj49t7n59MnKJTSNRXRaXulvaSjt_YtjO0vUCAQZ2nhI72BMe3sWVR1mJO3uhw0JOlOO7CVWUp3p6UOlz8JQRHZKmFCbxz65xVaLW0jp_i9b_TfjOppFUR2NLk3D0-aVsh7z4pnLqlXwS_ZY6aX1jn8D1x4Hlk7BhDsUah2zYddVpNRETCeBtLn8eEUMFqT3Y_ShTh3-YdA",
        alt: "Cultivos de girasoles para fitoextracción",
        caption: "Plantaciones de biocultivos con fines de fitorremediación"
      },
      {
        id: "s2-2",
        src: "/images/servicios/servicio-2/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWvCheUi91OWUc2J3M3onQx7jFjtrQsvK8k0ck3ZsJZJDzNMV9pUCTjHLdo2XqI1Cf5MgFO8I2i4LZomnJhq3DQQgqJXtVClMEP1U2U5F271Qp-Lsu4Bx4ecUjN55dML9Q4kH3eT42Y7TTATnTwAJpZJMVMSK0boM536kNJrb8fVeVNgi2IuZEJmHB1vb3S3PzDrh8Yl8MuVmIrcKo63whFdY9-J-vFxOlzr9GtfRtBmHumTBSY-S2lqSO_SW_BzGJ_Wwc3_csQ",
        alt: "Transformación de biomasa y compostaje",
        caption: "Aprovechamiento agronómico de biomasa residual"
      },
      {
        id: "s2-3",
        src: "/images/servicios/servicio-2/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEQ0UPBW2KiZwUHP74blXULgHA2NCKadHYM9ODrj-NiiEt3I10Ll9HQpAiEhvcaADClxy1Z_ihe3FKt4x9XdAx7Vv94qPg2bhQywQi7TKLjlgpyXeRXOgMnICe35u_RcCCRpixLh4rHDjIbrQ8Uyv1ww04SEjyj6kSr27DrM_WHuAzl6qzXbtgd2Dux6IUr0PlaIuGn7TrnvJErHzZyXYer9m12QCOFUhh1qs3K3F3QLQ8OnpIiQU7L6xJs2xrYBySXV_sg3yTvQ",
        alt: "Integración de energía renovable en proyectos verdes",
        caption: "Sistemas sustentables en campo Casanare"
      },
      {
        id: "s2-4",
        src: "/images/servicios/servicio-2/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3GNtGWaIORzVJjEMEUsNvGaLGjNvU7hFuTABjD-5wHZ1Lgq5bO0V3XFzkPUTZul4agw0jG4sYKRxxbEIgGFn0NnI725Qn2GSCjqs74WU9Z_aoQbSalmplZY8D0p47YJ4ux6mieNgfWzQd28QB2vfTMxq6W4guCbuhEuB5zY45Cm8f13OOPrpui07QBwyqQYtJasmF-i9BaHCTB0vIP9BHFhcD2PiPCVQIXCG47mdRp16OuIzazIX6BXIFiBrZzilrLa1k9kq7tg",
        alt: "Extensión de biocultivos en restauración",
        caption: "Campos restaurados con vegetación densa"
      },
      {
        id: "s2-5",
        src: "/images/servicios/servicio-2/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
        alt: "Sistemas radiculares densos",
        caption: "Rizorrefuerzo con pasto vetiver"
      },
      {
        id: "s2-6",
        src: "/images/servicios/servicio-2/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
        alt: "Semilleros forestales nativos",
        caption: "Propagación de árboles de la Orinoquía"
      },
      {
        id: "s2-7",
        src: "/images/servicios/servicio-2/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
        alt: "Cosecha de biomasa para bioenergía",
        caption: "Corte periódico y confinamiento controlado"
      },
      {
        id: "s2-8",
        src: "/images/servicios/servicio-2/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
        alt: "Corredor biológico consolidado",
        caption: "Atracción de fauna e insectos polinizadores"
      },
      {
        id: "s2-9",
        src: "/images/servicios/servicio-2/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
        alt: "Análisis de acumulación foliar",
        caption: "Evaluación de absorción en tejidos vegetales"
      },
      {
        id: "s2-10",
        src: "/images/servicios/servicio-2/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
        alt: "Paisaje restaurado y productivo",
        caption: "Sostenibilidad de largo plazo garantizada"
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
      "Nota técnica: Los geocontenedores tubulares de polipropileno de alta tenacidad retienen hasta un 99% de sólidos finos mediante filtración gravimétrica continua. Reducen el volumen de lodos en más del 80%, disminuyendo drásticamente costos logísticos de transporte y facilitando la disposición final segura en campo.",
    infographic: {
      src: "/images/servicios/servicio-3/infografia.jpg",
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
        src: "/images/servicios/servicio-3/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6YORpeYmEL83mo-4cZw6C6h4jfHUZGMiZqQm5AHJfSSOWWG6AYWoAKJg3EgWGyNAYejoLWuvtApsI82uTvjo4k31jHUIHXf52QWwm1zKiG3QNUh-nXJZX7znBj5VcfVN0tPxXvcVwZlw4lFomWXT2NbTF4ktNDcwp0Ym4fOw_IRusz-DtBRkOHeseuxFhEAk7UPPrmdrlcsfutQvOAjYxwdJy70FSYWixMmMfJN8WJQaJkeHaS2Ch_-68wDq1Tzi1ZJfma1d1TQ",
        alt: "Instalación de geocontenedores en plataforma",
        caption: "Plataforma de geocontenedores para secado masivo"
      },
      {
        id: "s3-2",
        src: "/images/servicios/servicio-3/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qOv9-nfFTo-gNc0dvOuDjbLFQBCyCKFWUpC4kP5aVd4HfSBgQj07QjXJPKqKzvIC5JLQDIwr2sx65RLCmrj0QKbWg-zC0U-1JseAy94nwW1AS_uKaokji_G500WleloGYIRCNgqzS8LMTZEcKpiMeE22Xy884_sbXfQBaQGl8EKvLujCQfZUS4fJYrONp_qSxhn5o3Jym9n6pReAQE-ftXwNruliuEKlQqFrHUdABsUfkY9XFrh1XcgPX7mowX3bxVDndzceAA",
        alt: "Válvulas y bombas de inyección a geotextil",
        caption: "Sistemas de bombeo de lodos con polímeros"
      },
      {
        id: "s3-3",
        src: "/images/servicios/servicio-3/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PoNdhprWbGUwy_gIW7PjEdrpoABzcT25zoZTtXL_xKCCi8igjeBXjENPp89Dan412b2cyYDNdLrhkcTulOKvlfGb11LqAZwhS7FQIa2122wsqDqtGVbkwM_NSQepk6JmsH5cAw1qp7TbovL5XvpObGCWX6HsgEI7YXIh3SamdOvNFsQo-sFinXsM-aqyiwYX4ZbYqd4kwJOMe6yLUjRlIq0m_A6V-wxYVuOezLAlpj-OIBj7ITKjJ1ftd4Ls4derXsQzoCR8Ig",
        alt: "Confinamiento seguro de lodos deshidratados",
        caption: "Acopio y reducción volumétrica certificada"
      },
      {
        id: "s3-4",
        src: "/images/servicios/servicio-3/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaoZ4LYeYiZNtB_TIz_W8MWnmIRFbU6N9PQiBZ3clT1UYGZNvN10zqE38jm4hjZ9ZJB4jXhh38-ZoAyb_JAnhdXHwAZCzumZyJnm2BI4pMueHJlQmJGZ2Vnbya6dF7C_Qdjiig_tTlD6_zKM4_hhzS7bO49TV3psPT5xYnG6HwXdA_vUeYu5Afv8y9mqiWTI2lW9DTsrmVLiviMAKTj9OBJIzMYJ5WW887Id5djU7WVSDFQHXpR86Kxw5fa3PBb1B5GfDPAv7rXw",
        alt: "Tanques de recolección de efluentes clarificados",
        caption: "Recuperación de agua para circuito cerrado"
      },
      {
        id: "s3-5",
        src: "/images/servicios/servicio-3/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        alt: "Llenado a presión controlada",
        caption: "Manifold de inyección con manómetros"
      },
      {
        id: "s3-6",
        src: "/images/servicios/servicio-3/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
        alt: "Geotextil permeable de poro micrométrico",
        caption: "Estructura tejida resistente a radiación UV"
      },
      {
        id: "s3-7",
        src: "/images/servicios/servicio-3/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
        alt: "Canal perimetral de lixiviados",
        caption: "Canalización hermética y segura del agua filtrada"
      },
      {
        id: "s3-8",
        src: "/images/servicios/servicio-3/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        alt: "Muestra de lodo seco consolidado",
        caption: "Humedad residual menor al 25%"
      },
      {
        id: "s3-9",
        src: "/images/servicios/servicio-3/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
        alt: "Desmontaje y transporte de sólidos",
        caption: "Carga mecanizada hacia disposición certificada"
      },
      {
        id: "s3-10",
        src: "/images/servicios/servicio-3/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
        alt: "Área recuperada post-deshidratación",
        caption: "Cero impacto residual en locación industrial"
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
      "Nota técnica: La unidad UTC combina calentamiento indirecto por vapor y fuerza centrífuga de alta velocidad para romper emulsiones tenaces. Separa con máxima precisión el hidrocarburo puro apto para refinería (BS&W < 1%), agua clarificada para reuso y sólidos inertes para biorremediación, generando retorno económico para el operador.",
    infographic: {
      src: "/images/servicios/servicio-4/infografia.jpg",
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
        src: "/images/servicios/servicio-4/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpv2SpoWbNu-C7Z9_80fq-1lGFZVCD4CjWipw_sgjXLKFFbNHj86NYdqEv09Omps90kXg1xypQlGb_OhprLyhggzCt5GgkHeRYjM-W8AAThwKoc3xTI1mrboAZezoq4Ipd20LD3i0hrza9QBrB3hvj-Kd8ktNp6X-u4NidQJWEAhrGJ0Un0IA7steGZ3rrdh3sn7zPZU8Ft2KuboXVpkUWidnCoDOG2WkAXgW2z51PirsHjvGOagPx-WmOF1mH1LgACNkt4EjFtA",
        alt: "Unidad móvil UTC en operación industrial",
        caption: "Planta modular de termo centrifugado en campo"
      },
      {
        id: "s4-2",
        src: "/images/servicios/servicio-4/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1S3OnOU04HnGENA2sgI-ya8DJzVIyvK94wryaFSxts4ppQHG70AWxQ1uCZokYyjuMZlBNIA52-cXtOV1tu7uGf5v91KWIyWTYvXT-p34Csqq9y8WrY7lUQNQSvttgogSJKfQwuzHGhBJHjUxHKiR0yzHkwG2PgnGs8ib8aBGqF6Ki7zXG1HUbCvMXDM9-Hzd1jzaQie5kBjTJNKXsCNGHM5sOZhA1-zvMEyW5iAWYBGmB380m-PpchRZR4gCMSqYrz7W0eo4r8Q",
        alt: "Panel de control automático y válvulas de proceso",
        caption: "Instrumentación y monitoreo SCADA en tiempo real"
      },
      {
        id: "s4-3",
        src: "/images/servicios/servicio-4/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaoZ4LYeYiZNtB_TIz_W8MWnmIRFbU6N9PQiBZ3clT1UYGZNvN10zqE38jm4hjZ9ZJB4jXhh38-ZoAyb_JAnhdXHwAZCzumZyJnm2BI4pMueHJlQmJGZ2Vnbya6dF7C_Qdjiig_tTlD6_zKM4_hhzS7bO49TV3psPT5xYnG6HwXdA_vUeYu5Afv8y9mqiWTI2lW9DTsrmVLiviMAKTj9OBJIzMYJ5WW887Id5djU7WVSDFQHXpR86Kxw5fa3PBb1B5GfDPAv7rXw",
        alt: "Tanques térmicos de acondicionamiento de borras",
        caption: "Cámaras de calentamiento por serpentín indirecto"
      },
      {
        id: "s4-4",
        src: "/images/servicios/servicio-4/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qOv9-nfFTo-gNc0dvOuDjbLFQBCyCKFWUpC4kP5aVd4HfSBgQj07QjXJPKqKzvIC5JLQDIwr2sx65RLCmrj0QKbWg-zC0U-1JseAy94nwW1AS_uKaokji_G500WleloGYIRCNgqzS8LMTZEcKpiMeE22Xy884_sbXfQBaQGl8EKvLujCQfZUS4fJYrONp_qSxhn5o3Jym9n6pReAQE-ftXwNruliuEKlQqFrHUdABsUfkY9XFrh1XcgPX7mowX3bxVDndzceAA",
        alt: "Líneas de descarga de hidrocarburo comercial",
        caption: "Salida de crudo limpio directo a tanques de entrega"
      },
      {
        id: "s4-5",
        src: "/images/servicios/servicio-4/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
        alt: "Rotor de decanter centrífugo en acero inoxidable",
        caption: "Mecánica de alta precisión para lodos abrasivos"
      },
      {
        id: "s4-6",
        src: "/images/servicios/servicio-4/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
        alt: "Generador de calor y caldera marina",
        caption: "Vapor a presión para calentamiento indirecto"
      },
      {
        id: "s4-7",
        src: "/images/servicios/servicio-4/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
        alt: "Prueba de centrífuga de laboratorio BS&W",
        caption: "Comprobación de porcentaje de agua y sedimentos"
      },
      {
        id: "s4-8",
        src: "/images/servicios/servicio-4/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
        alt: "Torre de enfriamiento de condensados",
        caption: "Eficiencia energética y recirculación térmica"
      },
      {
        id: "s4-9",
        src: "/images/servicios/servicio-4/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=800&q=80",
        alt: "Descarga de torta mineral seca",
        caption: "Sólidos libres de crudo libre para biorremediación"
      },
      {
        id: "s4-10",
        src: "/images/servicios/servicio-4/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80",
        alt: "Tanque de almacenamiento de aceite recuperado",
        caption: "Despacho de crudo comercial certificado"
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
      "Nota técnica: Nuestras plantas modulares compactas eliminan hasta un 99.8% de hidrocarburos totales (TPH), sólidos suspendidos totales (SST), grasas y metales pesados disueltos. Cumplimos los más exigentes estándares de vertimiento (Resolución 0631 y normativas internacionales), priorizando esquemas de economía circular con vertimiento cero.",
    infographic: {
      src: "/images/servicios/servicio-5/infografia.jpg",
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
        src: "/images/servicios/servicio-5/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaoZ4LYeYiZNtB_TIz_W8MWnmIRFbU6N9PQiBZ3clT1UYGZNvN10zqE38jm4hjZ9ZJB4jXhh38-ZoAyb_JAnhdXHwAZCzumZyJnm2BI4pMueHJlQmJGZ2Vnbya6dF7C_Qdjiig_tTlD6_zKM4_hhzS7bO49TV3psPT5xYnG6HwXdA_vUeYu5Afv8y9mqiWTI2lW9DTsrmVLiviMAKTj9OBJIzMYJ5WW887Id5djU7WVSDFQHXpR86Kxw5fa3PBb1B5GfDPAv7rXw",
        alt: "Tanques de clarificación y sedimentación",
        caption: "Batería de tanques de depuración de aguas industriales"
      },
      {
        id: "s5-2",
        src: "/images/servicios/servicio-5/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1S3OnOU04HnGENA2sgI-ya8DJzVIyvK94wryaFSxts4ppQHG70AWxQ1uCZokYyjuMZlBNIA52-cXtOV1tu7uGf5v91KWIyWTYvXT-p34Csqq9y8WrY7lUQNQSvttgogSJKfQwuzHGhBJHjUxHKiR0yzHkwG2PgnGs8ib8aBGqF6Ki7zXG1HUbCvMXDM9-Hzd1jzaQie5kBjTJNKXsCNGHM5sOZhA1-zvMEyW5iAWYBGmB380m-PpchRZR4gCMSqYrz7W0eo4r8Q",
        alt: "Filtros multimedia y carbón activado",
        caption: "Tren de pulimento para agua clarificada cristalina"
      },
      {
        id: "s5-3",
        src: "/images/servicios/servicio-5/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpv2SpoWbNu-C7Z9_80fq-1lGFZVCD4CjWipw_sgjXLKFFbNHj86NYdqEv09Omps90kXg1xypQlGb_OhprLyhggzCt5GgkHeRYjM-W8AAThwKoc3xTI1mrboAZezoq4Ipd20LD3i0hrza9QBrB3hvj-Kd8ktNp6X-u4NidQJWEAhrGJ0Un0IA7steGZ3rrdh3sn7zPZU8Ft2KuboXVpkUWidnCoDOG2WkAXgW2z51PirsHjvGOagPx-WmOF1mH1LgACNkt4EjFtA",
        alt: "Manifold hidráulico de recirculación",
        caption: "Válvulas motorizadas y control de presión"
      },
      {
        id: "s5-4",
        src: "/images/servicios/servicio-5/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PoNdhprWbGUwy_gIW7PjEdrpoABzcT25zoZTtXL_xKCCi8igjeBXjENPp89Dan412b2cyYDNdLrhkcTulOKvlfGb11LqAZwhS7FQIa2122wsqDqtGVbkwM_NSQepk6JmsH5cAw1qp7TbovL5XvpObGCWX6HsgEI7YXIh3SamdOvNFsQo-sFinXsM-aqyiwYX4ZbYqd4kwJOMe6yLUjRlIq0m_A6V-wxYVuOezLAlpj-OIBj7ITKjJ1ftd4Ls4derXsQzoCR8Ig",
        alt: "Área de almacenamiento de químicos dosificadores",
        caption: "Inyección dosificada de polímeros y coagulantes"
      },
      {
        id: "s5-5",
        src: "/images/servicios/servicio-5/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1574689231350-0a2524f2b189?auto=format&fit=crop&w=800&q=80",
        alt: "Celda DAF con microburbujas",
        caption: "Flotación eficiente de aceites emulsionados"
      },
      {
        id: "s5-6",
        src: "/images/servicios/servicio-5/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80",
        alt: "Sensores de turbidez y conductividad",
        caption: "Lectura continua con transmisión remota de datos"
      },
      {
        id: "s5-7",
        src: "/images/servicios/servicio-5/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80",
        alt: "Comparativo de agua cruda vs tratada",
        caption: "Reducción visual y fisicoquímica total"
      },
      {
        id: "s5-8",
        src: "/images/servicios/servicio-5/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        alt: "Módulo de desinfección UV y ozono",
        caption: "Tratamiento bacteriológico para reuso agrícola o riego"
      },
      {
        id: "s5-9",
        src: "/images/servicios/servicio-5/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
        alt: "Punto de vertimiento regulado con caudalímetro",
        caption: "Aforo volumétrico y toma de muestras oficiales"
      },
      {
        id: "s5-10",
        src: "/images/servicios/servicio-5/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        alt: "Laguna de almacenamiento de agua tratada",
        caption: "Reserva hídrica limpia en armonía ambiental"
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
      src: "/images/servicios/servicio-6/infografia.jpg",
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
        src: "/images/servicios/servicio-6/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZpBKZlPhldsJVDuDvFYlM7FExYzCTFUpzd2EB3GHx25d-DPQTGygiWwvCiVHDjRxll2vpdvB5qUYLT2_hZfUMS2MontK0L7HwtsO7qxMqbS7v7GcI8-J7DhQjxJilruxiA2z4uoYjbG6cqwgJU8a-9-WLpyfQG_kL1h4r45YaSbLrJs563HaGk0j6mA4Rogv43Pmch9XuugBGD1nuIItb09vbHmbrMo6tYraK3XGOW302GUF-k6VxF6WiqN5MOySyd9DrcWFvQ",
        alt: "Flota de camiones y vehículos especializados",
        caption: "Flota propia equipada para transporte de sustancias peligrosas"
      },
      {
        id: "s6-2",
        src: "/images/servicios/servicio-6/foto-2.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfpCh8ocbn61IqEyGjFSZLwl_qlBKM2rJ9QYUXMG2K_2bPQwdHXiRtb_Ok5_3qkwMBktXKO6kYBlZbkYyHhFF63ENlwnEo9faDtKe0dS63QreLv5wTnK0A5efYw9EQw0WsacZ3JsU2pGvSjVBDdGM-xQS8xDPcarGYCQf5rHVLCFCBHdbknvUXCutk7IXz-hPMJyo10lQYyDFCGi3hR2xTCOVUUpc1V-bWbfC_NLHVWizqwNXP0cmePhJU6g36ZzLSdxgd25CLxg",
        alt: "Contenedores de acopio seguro de residuos",
        caption: "Recipientes herméticos y señalización UN homologada"
      },
      {
        id: "s6-3",
        src: "/images/servicios/servicio-6/foto-3.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs4EPMVtzrw8X0gYGesj5yb_ITnpucOe43UoD8Z9x7tCeuFey9clgOC2kK3EkepvxUrKxAmhG5s-qN70k32S3XljYP-dohQ_pE2P6bl8R0OnUmoxMhMgklr2mfKijpz3uaw9JmF--zR5a5G1f2FNO-ZjFSORQWszYv6jaMEpGve6CgqlqJeGfy0AfXoEC4WWGO6lGP1sizWqNquDq9usk8zTLtWWb4ubPtJcUAzkbBqkA_U4KszXLAovr6-Wy6UMTlP76axCDwUQ",
        alt: "Áreas industriales recuperadas y restauradas",
        caption: "Recuperación de locaciones con estándar ecológico"
      },
      {
        id: "s6-4",
        src: "/images/servicios/servicio-6/foto-4.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7MtyY1fLeUV-ylZgedxGCfykn1Cb5sL_Txma6eaA4SnKkwVDHuZWrsuQMu6OpSHu4Wy0TfT3vhY8VftrzODt7haPjaeVllLsV9WKFpRrihRkDxR0Uq5doCvs1yIAF3Ya075FV1AYTM4zJjarUUYBRzehFC-YrzEy6whcUNS9yP6htW0fsHOzYSzIapSbg5l9pM5bkhNIkezmFmIEdsG-5w7hX88O_B6O89Krz1EIHC0MEHnFiRgeCMAfp2pspZ5OpWE8hAuBHg",
        alt: "Revegetación en zona de disposición final",
        caption: "Ecosistemas rehabilitados tras la gestión de pasivos"
      },
      {
        id: "s6-5",
        src: "/images/servicios/servicio-6/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
        alt: "Personal técnico con EPP de seguridad",
        caption: "Protocolos estrictos de HSE y respuesta a emergencias"
      },
      {
        id: "s6-6",
        src: "/images/servicios/servicio-6/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        alt: "Vehículo tipo Vacuum en succión de lodos",
        caption: "Extracción limpia sin emisiones ni derrames"
      },
      {
        id: "s6-7",
        src: "/images/servicios/servicio-6/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=80",
        alt: "Gestión documental y manifiestos de carga",
        caption: "Auditoría ambiental y trazabilidad en línea"
      },
      {
        id: "s6-8",
        src: "/images/servicios/servicio-6/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        alt: "Báscula camionera electrónica certificada",
        caption: "Pesaje exacto de entrada y salida de materiales"
      },
      {
        id: "s6-9",
        src: "/images/servicios/servicio-6/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        alt: "Entrega de certificados oficiales",
        caption: "Garantía de cierre ante autoridades ambientales"
      },
      {
        id: "s6-10",
        src: "/images/servicios/servicio-6/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        alt: "Centro de control de operaciones",
        caption: "Monitoreo satelital 24/7 de la cadena de valor"
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
      src: "/images/servicios/servicio-7/infografia.jpg",
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
        src: "/images/servicios/servicio-7/foto-1.jpg",
        fallback: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0KXMRPFyXdtw-br3NmhoJbM6TAsrAIw9N2R9fLTc5_njSpgfEwnA1Jnx_5bm2oDvQNNbvRJrwElQ4btCL0qJtVXnDjrQywaURdQxjge-FCIyCEa6vdP6E6UGWQM_0YdddPce2SF8DLZETUBENGGEgtXsJH-4eJKoplD79FJYCz9rMZZ_DHyrVF3LqclLHDD_yHgGxaSFuM98kx-9wmXqO91X2RmCHscduyC42rQKm5wOI1KnMCPnOLRyg-gOrISONKoHD4bXXGA",
        alt: "Laboratorio y control de calidad",
        caption: "Verificación científica y ensayos certificados"
      },
      {
        id: "s7-2",
        src: "/images/servicios/servicio-7/foto-2.jpg",
        fallback: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        alt: "Auditorías de calidad y seguridad industrial",
        caption: "Auditorías periódicas de cumplimiento ISO"
      },
      {
        id: "s7-3",
        src: "/images/servicios/servicio-7/foto-3.jpg",
        fallback: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        alt: "Emisión de certificados ambientales y trazabilidad",
        caption: "Documentación oficial con valor legal ante entes de control"
      },
      {
        id: "s7-4",
        src: "/images/servicios/servicio-7/foto-4.jpg",
        fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        alt: "Infraestructura corporativa certificada",
        caption: "Estándares corporativos de primer nivel"
      },
      {
        id: "s7-5",
        src: "/images/servicios/servicio-7/foto-5.jpg",
        fallback: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        alt: "Revisión técnica de expedientes ambientales",
        caption: "Ingenieros especializados en legislación ambiental"
      },
      {
        id: "s7-6",
        src: "/images/servicios/servicio-7/foto-6.jpg",
        fallback: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        alt: "Capacitación continua en seguridad y medio ambiente",
        caption: "Cultura de excelencia y cero accidentes"
      },
      {
        id: "s7-7",
        src: "/images/servicios/servicio-7/foto-7.jpg",
        fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        alt: "Sello de compromiso con la sostenibilidad",
        caption: "Liderazgo en biotecnología aplicada"
      },
      {
        id: "s7-8",
        src: "/images/servicios/servicio-7/foto-8.jpg",
        fallback: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        alt: "Salón de juntas y comités de calidad",
        caption: "Mejora continua e innovación constante"
      },
      {
        id: "s7-9",
        src: "/images/servicios/servicio-7/foto-9.jpg",
        fallback: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
        alt: "Garantía de cumplimiento con autoridades CAR",
        caption: "Respaldo normativo transparente"
      },
      {
        id: "s7-10",
        src: "/images/servicios/servicio-7/foto-10.jpg",
        fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        alt: "Visión sostenible 2030",
        caption: "Compromiso de Biointech con el futuro ambiental"
      }
    ]
  }
];
