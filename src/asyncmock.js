const myProducts = [
    { id: "1", categoryId: "textiles", name: "Almohadon Tusor", price: "60€", img: "./public/images/almohadon-tusor-2.jpg", description: "Almohadón de tusor teñido terminación con flecos y relleno de vellón siliconado. Medidas: 70 cm de largo x 50 cm de alto." },

    { id: "2", categoryId: "muebles", name: "Biblioteca Camaro", price: "2455€", img: "./public/images/biblioteca-camaro1.jpg", description: "Biblioteca con puertas y cajones en peteribí encerado y pulido. Medidas: 160 cm de largo x 40 cm de ancho x 230 cm de alto." },

    { id: "3", categoryId: "decoracion", name: "Espejo Sol", price: "100€", img: "./public/images/espejo-sol1.jpg", description: "Espejo de hierro con terminación dorada. Medidas disponibles: 80 cm, 100 cm o 120 cm de diámetro." },

    { id: "4", categoryId: "iluminacion", name: "Lámpara Magnolia", price: "160€", img: "./public/images/lampara-magnolia-chica-1.jpg", description: "Lámpara con estructura de mimbre y lienzo tenido color a definir. Medidas: 97 cm de diámetro" },

    { id: "5", categoryId: "textiles", name: "Manta Sillón Rayas", price: "90€", img: "./public/images/manta-rayas1-1.jpg", description: "Manta simple de tusor crudo estampado. Géneros estampados y teñidos artesanalmente." },

    { id: "6", categoryId: "muebles", name: "Mesa Goya Carrara", price: "850€", img: "./public/images/mesa-goya-carrara1-800x820.jpg", description: "Mesa de comedor base de peteribí macizo encerado y pulido con tapa de mármol de carrara de 2 cm de espesor. Medidas: 100cm de diámetro x 75 cm de alto." },

    { id: "7", categoryId: "decoracion", name: "Vela con Tapa", price: "30€", img: "./public/images/velacontapa1.jpg", description: "Vela de soja grande con tapa." },

    { id: "8", categoryId: "iluminacion", name: "Lámpara Sombrero", price: "150€", img: "./public/images/lampara-sombrero-1.jpg", description: "Lámpara artesanal de chapa color dorada." },

    { id: "9", categoryId: "muebles", name: "Banco Guayaba", price: "180€", img: "./public/images/banco-guayaba2.jpg", description: "Banco de petiribí encerado y pulido con respaldo." }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myProducts);
        }, 500)
    })
}