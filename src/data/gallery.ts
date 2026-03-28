// ============================================================================
// CONFIGURACIÓN DE GALERÍA DE SERVICIOS
// ============================================================================
// Aquí puedes alimentar las fotos de cada servicio.
// 
// INSTRUCCIONES PARA USAR FOTOS LOCALES:
// 1. Crea una carpeta llamada "images" dentro de la carpeta "public" de tu proyecto.
// 2. Dentro de "images", crea carpetas para cada servicio (ej. "servicio-1", "servicio-2").
// 3. Guarda tus fotos en esas carpetas.
// 4. Cambia las URLs de abajo por la ruta local. 
//    Ejemplo: src: "/images/servicio-1/foto1.jpg"
// ============================================================================

export const galleryData = {
  service1: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVg5whn8Jvp7WmKVRfnrpXYGiA2aLhJR-IGqmEdWFgto-AEpC39Z4dDqJB9on8kBU91RrpTiP70k1bgsEFpXKTdIsoqliTPIqSSz43rz6ldZRMGas-QxgBfjHWYmov7UyWetr8Ka_2uGPqbqt4DejFv7EKqe8DCcXxwUgfAageXH5Lf21VMjlC2cAE3IQ_fZCxJJBu1wb_jvYRdRVwMVeVsQ8cPqYU69pGl2kJmlOQWujv2HVoRL_veOBK40KVniKO-6YfaTPgIA", alt: "Planta de tratamiento de residuos" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qOv9-nfFTo-gNc0dvOuDjbLFQBCyCKFWUpC4kP5aVd4HfSBgQj07QjXJPKqKzvIC5JLQDIwr2sx65RLCmrj0QKbWg-zC0U-1JseAy94nwW1AS_uKaokji_G500WleloGYIRCNgqzS8LMTZEcKpiMeE22Xy884_sbXfQBaQGl8EKvLujCQfZUS4fJYrONp_qSxhn5o3Jym9n6pReAQE-ftXwNruliuEKlQqFrHUdABsUfkY9XFrh1XcgPX7mowX3bxVDndzceAA", alt: "Equipos industriales" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PoNdhprWbGUwy_gIW7PjEdrpoABzcT25zoZTtXL_xKCCi8igjeBXjENPp89Dan412b2cyYDNdLrhkcTulOKvlfGb11LqAZwhS7FQIa2122wsqDqtGVbkwM_NSQepk6JmsH5cAw1qp7TbovL5XvpObGCWX6HsgEI7YXIh3SamdOvNFsQo-sFinXsM-aqyiwYX4ZbYqd4kwJOMe6yLUjRlIq0m_A6V-wxYVuOezLAlpj-OIBj7ITKjJ1ftd4Ls4derXsQzoCR8Ig", alt: "Almacenamiento químico" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6YORpeYmEL83mo-4cZw6C6h4jfHUZGMiZqQm5AHJfSSOWWG6AYWoAKJg3EgWGyNAYejoLWuvtApsI82uTvjo4k31jHUIHXf52QWwm1zKiG3QNUh-nXJZX7znBj5VcfVN0tPxXvcVwZlw4lFomWXT2NbTF4ktNDcwp0Ym4fOw_IRusz-DtBRkOHeseuxFhEAk7UPPrmdrlcsfutQvOAjYxwdJy70FSYWixMmMfJN8WJQaJkeHaS2Ch_-68wDq1Tzi1ZJfma1d1TQ", alt: "Gestión de residuos" }
  ],
  service2: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz8oNdj9Rpnc8Xs8j966gckMKxCbpH7D7VOBtTqmC9VRorjzl0du7kHlmQT3OloYfpuTtbLn9hgGG6PctIBLpca7UJQanfli4kn-_ixTs6sRLKXeJ0lOG3_RY5cMtUqstxxM_ENTqzIsGSu025y14TkZk1_Y5Uirok2XV3P-lsw9ZmZjdZQrBg4a2cw7hBira5X_r6eSeCFDvjLlwlSvfRgo-2PjJ80ikzj0a47zJbOsl35AIaNaph0ifl6bO1-qVmCqidjp3PJg", alt: "Pruebas de suelo" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjxyhyCfbYPh8yARin4E7ULus1IXoVUfpFvMF_7bDqhi4SNCd6r0bq52fWVF6ZScu7_oLaMzGhtn2li_GwGGlzDG3S_3gdJrrLcsMXS1WpmDx32VyZp75lJesxCvFrhdggl7J5B4pB3W64jO16pHjJiRcBjRKdQ4Undz6a7zJI-Nn4WcrNVzzraJIM8lTZ3wqAMhdBFnuWVBDasZO54nXzVvIXHd9hRfaeR6PDoN5nieC9hsKEDb7kMIgI3qdoxig0VJcx_4zDnQ", alt: "Cultivo biológico" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3GNtGWaIORzVJjEMEUsNvGaLGjNvU7hFuTABjD-5wHZ1Lgq5bO0V3XFzkPUTZul4agw0jG4sYKRxxbEIgGFn0NnI725Qn2GSCjqs74WU9Z_aoQbSalmplZY8D0p47YJ4ux6mieNgfWzQd28QB2vfTMxq6W4guCbuhEuB5zY45Cm8f13OOPrpui07QBwyqQYtJasmF-i9BaHCTB0vIP9BHFhcD2PiPCVQIXCG47mdRp16OuIzazIX6BXIFiBrZzilrLa1k9kq7tg", alt: "Área de tratamiento" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiHPzomFg_gwHZjkpCk2Qy943iN1KB7qIH4o88hRWvsZqowC5KNNc4k9RSqdsIFect8zmCsY9erj28yxovF8J7mLAOH8kWC92Hhs7TL_L_A9gMSz1Ub_S7WXvPk5TQI7tNbxeGQmQhxeUYhm5qgF-lCtPPHpDQQSG9d10rwmz4KfkiY4VLTJLw4gkb0yDJZC2KLSao33sROUqb1b3FMVyRsiqptrp-6iMDuYxZuhVQdXmN2I2ewx5HjDZ-NlnC2JhBjg1J-_u-VQ", alt: "Vista aérea de celdas" }
  ],
  service3: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaoZ4LYeYiZNtB_TIz_W8MWnmIRFbU6N9PQiBZ3clT1UYGZNvN10zqE38jm4hjZ9ZJB4jXhh38-ZoAyb_JAnhdXHwAZCzumZyJnm2BI4pMueHJlQmJGZ2Vnbya6dF7C_Qdjiig_tTlD6_zKM4_hhzS7bO49TV3psPT5xYnG6HwXdA_vUeYu5Afv8y9mqiWTI2lW9DTsrmVLiviMAKTj9OBJIzMYJ5WW887Id5djU7WVSDFQHXpR86Kxw5fa3PBb1B5GfDPAv7rXw", alt: "Tanques de tratamiento" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1S3OnOU04HnGENA2sgI-ya8DJzVIyvK94wryaFSxts4ppQHG70AWxQ1uCZokYyjuMZlBNIA52-cXtOV1tu7uGf5v91KWIyWTYvXT-p34Csqq9y8WrY7lUQNQSvttgogSJKfQwuzHGhBJHjUxHKiR0yzHkwG2PgnGs8ib8aBGqF6Ki7zXG1HUbCvMXDM9-Hzd1jzaQie5kBjTJNKXsCNGHM5sOZhA1-zvMEyW5iAWYBGmB380m-PpchRZR4gCMSqYrz7W0eo4r8Q", alt: "Proceso de filtración" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpv2SpoWbNu-C7Z9_80fq-1lGFZVCD4CjWipw_sgjXLKFFbNHj86NYdqEv09Omps90kXg1xypQlGb_OhprLyhggzCt5GgkHeRYjM-W8AAThwKoc3xTI1mrboAZezoq4Ipd20LD3i0hrza9QBrB3hvj-Kd8ktNp6X-u4NidQJWEAhrGJ0Un0IA7steGZ3rrdh3sn7zPZU8Ft2KuboXVpkUWidnCoDOG2WkAXgW2z51PirsHjvGOagPx-WmOF1mH1LgACNkt4EjFtA", alt: "Sistema de válvulas" }
  ],
  service4: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiQcr14hhp21fIfP_Ce3GBnhGYwnH_er-qO-Uq9Tg6jLG_vV5F7nMI2-GV60U7QC9yj49t7n59MnKJTSNRXRaXulvaSjt_YtjO0vUCAQZ2nhI72BMe3sWVR1mJO3uhw0JOlOO7CVWUp3p6UOlz8JQRHZKmFCbxz65xVaLW0jp_i9b_TfjOppFUR2NLk3D0-aVsh7z4pnLqlXwS_ZY6aX1jn8D1x4Hlk7BhDsUah2zYddVpNRETCeBtLn8eEUMFqT3Y_ShTh3-YdA", alt: "Campo de girasoles" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWvCheUi91OWUc2J3M3onQx7jFjtrQsvK8k0ck3ZsJZJDzNMV9pUCTjHLdo2XqI1Cf5MgFO8I2i4LZomnJhq3DQQgqJXtVClMEP1U2U5F271Qp-Lsu4Bx4ecUjN55dML9Q4kH3eT42Y7TTATnTwAJpZJMVMSK0boM536kNJrb8fVeVNgi2IuZEJmHB1vb3S3PzDrh8Yl8MuVmIrcKo63whFdY9-J-vFxOlzr9GtfRtBmHumTBSY-S2lqSO_SW_BzGJ_Wwc3_csQ", alt: "Procesamiento de biomasa" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEQ0UPBW2KiZwUHP74blXULgHA2NCKadHYM9ODrj-NiiEt3I10Ll9HQpAiEhvcaADClxy1Z_ihe3FKt4x9XdAx7Vv94qPg2bhQywQi7TKLjlgpyXeRXOgMnICe35u_RcCCRpixLh4rHDjIbrQ8Uyv1ww04SEjyj6kSr27DrM_WHuAzl6qzXbtgd2Dux6IUr0PlaIuGn7TrnvJErHzZyXYer9m12QCOFUhh1qs3K3F3QLQ8OnpIiQU7L6xJs2xrYBySXV_sg3yTvQ", alt: "Energía renovable" }
  ],
  service5: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZpBKZlPhldsJVDuDvFYlM7FExYzCTFUpzd2EB3GHx25d-DPQTGygiWwvCiVHDjRxll2vpdvB5qUYLT2_hZfUMS2MontK0L7HwtsO7qxMqbS7v7GcI8-J7DhQjxJilruxiA2z4uoYjbG6cqwgJU8a-9-WLpyfQG_kL1h4r45YaSbLrJs563HaGk0j6mA4Rogv43Pmch9XuugBGD1nuIItb09vbHmbrMo6tYraK3XGOW302GUF-k6VxF6WiqN5MOySyd9DrcWFvQ", alt: "Logística y transporte" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfpCh8ocbn61IqEyGjFSZLwl_qlBKM2rJ9QYUXMG2K_2bPQwdHXiRtb_Ok5_3qkwMBktXKO6kYBlZbkYyHhFF63ENlwnEo9faDtKe0dS63QreLv5wTnK0A5efYw9EQw0WsacZ3JsU2pGvSjVBDdGM-xQS8xDPcarGYCQf5rHVLCFCBHdbknvUXCutk7IXz-hPMJyo10lQYyDFCGi3hR2xTCOVUUpc1V-bWbfC_NLHVWizqwNXP0cmePhJU6g36ZzLSdxgd25CLxg", alt: "Equipos de seguridad" }
  ],
  service6: [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs4EPMVtzrw8X0gYGesj5yb_ITnpucOe43UoD8Z9x7tCeuFey9clgOC2kK3EkepvxUrKxAmhG5s-qN70k32S3XljYP-dohQ_pE2P6bl8R0OnUmoxMhMgklr2mfKijpz3uaw9JmF--zR5a5G1f2FNO-ZjFSORQWszYv6jaMEpGve6CgqlqJeGfy0AfXoEC4WWGO6lGP1sizWqNquDq9usk8zTLtWWb4ubPtJcUAzkbBqkA_U4KszXLAovr6-Wy6UMTlP76axCDwUQ", alt: "Bosque recuperado" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7MtyY1fLeUV-ylZgedxGCfykn1Cb5sL_Txma6eaA4SnKkwVDHuZWrsuQMu6OpSHu4Wy0TfT3vhY8VftrzODt7haPjaeVllLsV9WKFpRrihRkDxR0Uq5doCvs1yIAF3Ya075FV1AYTM4zJjarUUYBRzehFC-YrzEy6whcUNS9yP6htW0fsHOzYSzIapSbg5l9pM5bkhNIkezmFmIEdsG-5w7hX88O_B6O89Krz1EIHC0MEHnFiRgeCMAfp2pspZ5OpWE8hAuBHg", alt: "Comparación de terreno" }
  ]
};
