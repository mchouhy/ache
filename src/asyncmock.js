const myProducts = [
    { id: "1", categoryId: "textiles", name: "Almohadon Tusor", stock: 200, price: "60€", img: "../images/almohadon-tusor-2.jpg", description: "Almohadón de tusor teñido terminación con flecos y relleno de vellón siliconado. Medidas: 70 cm de largo x 50 cm de alto." },
    { id: "2", categoryId: "muebles", name: "Biblioteca Camaro", stock: 200, price: "2455€", img: "../images/biblioteca-camaro1.jpg", description: "Biblioteca con puertas y cajones en peteribí encerado y pulido. Medidas: 160 cm de largo x 40 cm de ancho x 230 cm de alto." },
    { id: "3", categoryId: "decoracion", name: "Espejo Sol", stock: 200, price: "100€", img: "../images/espejo-sol1.jpg", description: "Espejo de hierro con terminación dorada. Medidas disponibles: 80 cm, 100 cm o 120 cm de diámetro." },
    { id: "4", categoryId: "iluminacion", name: "Lámpara Magnolia", stock: 200, price: "160€", img: "../images/lampara-magnolia-chica-1.jpg", description: "Lámpara con estructura de mimbre y lienzo tenido color a definir. Medidas: 97 cm de diámetro" },
    { id: "5", categoryId: "textiles", name: "Manta Sillón Rayas", stock: 200, price: "90€", img: "../images/manta-rayas1-1.jpg", description: "Manta simple de tusor crudo estampado. Géneros estampados y teñidos artesanalmente." },
    { id: "6", categoryId: "muebles", name: "Mesa Goya Carrara", stock: 200, price: "850€", img: "../images/mesa-goya-carrara2.jpg", description: "Mesa de comedor base de peteribí macizo encerado y pulido con tapa de mármol de carrara de 2 cm de espesor. Medidas: 100cm de diámetro x 75 cm de alto." },
    { id: "7", categoryId: "decoracion", name: "Vela con Tapa", stock: 200, price: "30€", img: "../images/velacontapa1.jpg", description: "Vela de soja grande con tapa." },
    { id: "8", categoryId: "iluminacion", name: "Lámpara Sombrero", stock: 200, price: "150€", img: "../images/lampara-sombrero-1.jpg", description: "Lámpara artesanal de chapa color dorada." },
    { id: "9", categoryId: "muebles", name: "Banco Guayaba", stock: 200, price: "180€", img: "../images/banco-guayaba2.jpg", description: "Banco de petiribí encerado y pulido con respaldo." },
    { id: "10", categoryId: "muebles", name: "Banqueta Alta Burro", stock: 200, price: "135€", img: "../images/banqueta-burro1.jpg", description: "Banqueta con estructura de hierro y asiento en mimbre natural (sin colchón). Medidas: 43 cm de largo x 43 cm de ancho x 60 cm altura asiento // 97 cm altura total." },
    { id: "11", categoryId: "muebles", name: "Banqueta Pampa tapizada", stock: 200, price: "145€", img: "../images/pampa-tapizada1.jpg", description: "Banqueta de petiribí macizo con laca con asiento tapizado pana a definir. Medidas: 180 cm de largo x 45 cm de ancho x 40 cm de alto." },
    { id: "12", categoryId: "decoracion", name: "Hoja", price: "45€", stock: 200, img: "../images/deco-hoja1.jpg", description: "Hoja de cerámica hecha a mano. Productos fabricados artesanalmente. Las fotos son a modo de referencia, las medidas y colores pueden tener pequeñas variaciones." },
    { id: "13", categoryId: "decoracion", name: "Plato de comida x2", stock: 200, price: "29€", img: "../images/plato-postre-1.jpg", description: "Set x 2 platos de cerámica. Medidas: 25 cm de diámetro." },
    { id: "14", categoryId: "iluminacion", name: "Lámpara Azucena", stock: 200, price: "70€", img: "../images/lampara-azucena5.jpg", description: "Lámpara de cerámica hecha a mano con pantalla de arpillera. Medidas: 15 cm de diámetro x 57 cm de alto. Pantalla: 25 arriba x 30 abajo cm de diámetro." },
    { id: "15", categoryId: "textiles", name: "Almohadón Ikat", stock: 200, price: "30€", img: "../images/almoikat2.jpg", description: "Almohadón de tusor crudo estampado relleno de vellón siliconado. Medidas: 50 cm de largo x 50 cm de alto. Géneros estampados y teñidos artesanalmente. Las fotos son a modo de referencia, los colores pueden tener pequeñas variaciones." },
    { id: "16", categoryId: "iluminacion", name: "Lámpara Cardon", stock: 200, price: "40€", img: "../images/lampara-cardon1.jpg", description: "Lámpara con base de hierro dorada y pantalla de lino natural. Medidas: 13 cm de diámetro x 60 cm de alto. Pantalla: 35 cm de diámetro." },
    { id: "17", categoryId: "iluminacion", name: "Aplique Begonia", stock: 200, price: "60€", img: "../images/aplique-begonia.jpg", description: "Aplique de pared de arpillera y esterilla natural. Medidas: 26 cm de ancho x 35 cm de alto." },
    { id: "18", categoryId: "muebles", name: "Cómoda Mercedes", stock: 200, price: "650€", img: "../images/comoda-mercedes.jpg", description: "Cómoda de peteribí con laca con puertas machimbradas y un estante interno. Medidas disponibles: 180 cm de largo x 40 cm de ancho x 70 cm de alto; 220 cm de largo x 45 cm de ancho x 70 cm de alto; 250 cm de largo x 50 cm de ancho x 70 cm de alto." },
    { id: "19", categoryId: "muebles", name: "Sillón Panzón", stock: 200, price: "800€", img: "../images/sillon-panzon1.jpg", description: "Sillón tapizado en lienzo con funda en género a definir. Patas de petiribí. Medidas: 120 cm de diámetro x 70 cm de alto." }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myProducts);
        }, 200)
    })
}

export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = myProducts.find(item => item.id === id);
            resolve(product);
        }, 200)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categoryProducts = myProducts.filter(item => item.categoryId === categoryId);
            resolve(categoryProducts);
        }, 200)
    })
}