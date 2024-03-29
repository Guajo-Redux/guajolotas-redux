import React, { Component, useState } from 'react';
import Header from '../../components/descripcion/Header.jsx';
import Cantidad from '../../components/descripcion/Cantidad';
import { ChakraProvider } from '@chakra-ui/react';
import styled from "styled-components"
import { Spinner } from 'react-bootstrap';
import Productos from '../../components/descripcion/Productos.jsx';
import Sabores from '../../components/descripcion/Sabores.jsx';
import Guajolocombo from '../../components/descripcion/Guajolocombo.jsx';
import BotonCarrito from '../../components/descripcion/BotonCarrito.jsx';

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

const Descripcion = () => {
    const [cantidad, setCantidad] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [comboProducto, setComboProducto] = useState(undefined)
    const [dataCart, setDataCart] = useState([])

    const modificarCantidad = (valor) => {
        setCantidad(parseFloat(valor))
    }

    const modificarPrecio = (valor) => {
        setPrecio(parseFloat(valor))
    }

    const traerArreglo = (valor) => {
        setComboProducto(valor)
    }


    return (
        <div style={{ position: "absolute", background: " #F2F2F2" }}>
            <ChakraProvider>
                <Header />
                <Productos />
                <Cantidad modificarCantidad={modificarCantidad} />
                <Sabores />
                <Guajolocombo traerArreglo={traerArreglo} modificarPrecio={modificarPrecio}/>
                <BotonCarrito cant={cantidad} comboProducto={comboProducto} precio={precio} />
            </ChakraProvider>
        </div>
    )
}

export default Descripcion