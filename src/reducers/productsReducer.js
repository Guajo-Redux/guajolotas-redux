import { types } from '../types/types';

const initialState = {
    products: [
        {
            "id": "guajo-0",
            "nombre": "Guajolota de Tamal Verde",
            "precio": 25,

            "nombreSabor": "Verde",
            "imagenSabor": "https://i.ibb.co/crTNfY4/s-verde.png",

            "imagen": "https://i.ibb.co/0y5fZTK/g-verdex4.png"
        },
        {
            "id": "guajo-1",
            "nombre": "Guajolota de Tamal de Mole",
            "precio": 25,

            "nombreSabor": "Mole",
            "imagenSabor": "https://i.ibb.co/BNfgp20/s-mole.png",

            "imagen": "https://i.ibb.co/q17LRqL/g-molex4.png"
        },
        {
            "id": "guajo-2",
            "nombre": "Guajolota de Tamal de Rajas",
            "precio": 25,

            "nombreSabor": "Rajas",
            "imagenSabor": "https://i.ibb.co/x6vgZZj/s-rajas.png",

            "imagen": "https://i.ibb.co/vh4kR8C/g-rajasx4.png"
        },
        {
            "id": "guajo-3",
            "nombre": "Guajolota de Tamal de Piña",
            "precio": 25,

            "nombreSabor": "Piña",
            "imagenSabor": "https://i.ibb.co/tb4qQm2/s-pina.png",

            "imagen": "https://i.ibb.co/VwMLXyg/g-pi-ax4.png"
        },
        {
            "id": "guajo-4",
            "nombre": "Guajolota de Tamal de Pasas",
            "precio": 25,

            "nombreSabor": "Pasas",
            "imagenSabor": "https://i.ibb.co/crjppmH/s-pasas.png",

            "imagen": "https://i.ibb.co/YPHFzRC/g-pasasx4.png"
        },
        {
            "id": "guajo-5",
            "nombre": "Guajolota de Tamal de Guayaba",
            "precio": 25,

            "nombreSabor": "Guayaba",
            "imagenSabor": "https://i.ibb.co/KFhQmYT/s-guayaba.png",

            "imagen": "https://i.ibb.co/HzH8f48/g-guayabax4.png"
        }
    ],
    active: null
}


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productsLoad:
            return {
                ...state,
                products: [...action.payload]
            }
        
        default:
            return state
    }
}

export default productsReducer
