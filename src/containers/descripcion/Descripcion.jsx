import React, { Component, useState } from 'react';
import Header from '../../components/descripcion/Header.jsx';
import Productos from '../../components/descripcion/Productos';
import Cantidad from '../../components/descripcion/Cantidad';
import Sabores from '../../components/descripcion/Sabores';
import Guajolocombo from '../../components/descripcion/Guajolocombo';
import BotonCarrito from '../../components/descripcion/BotonCarrito';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import styled from "styled-components"
import { Spinner } from 'react-bootstrap';

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

import React from 'react'

const Descripcion = () => {

    const [dataSlider, setDataSlider] = useState()
    const [cantidad, setCantidad] = useState()
    const [precio, setPrecio] = useState()
    const [comboProducto, setComboProducto] = useState()
    const [dataCart, setDataCart] = useState()

    return (
        <div>
            
        </div>
    )
}

export default Descripcion


export default class Descripcion extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         loading: true,
    //         data: undefined,
    //         error: null,
    //         dataSlider: [],
    //         cantidad: 0,
    //         precio: 0,
    //         comboProducto: [],
    //         dataCart: []
    //     }
    // }
    // fetchGuajalotaData = () => {
    //     this.setState({
    //         loading: true,
    //         error: null
    //     })

    //     axios
    //         .get(`https://api-guajolotas.herokuapp.com/${this.props.match.params.section}/${this.props.match.params.prodId}`)
    //         .then(res => {
    //             this.setState({
    //                 loading: false,
    //                 data: res.data
    //             })
    //         })
    //         .catch(res => {
    //             this.setState({
    //                 loading: false,
    //                 error: res.error
    //             })
    //         })
    // }

    // fetchDatosSlider = () => {
    //     this.setState({
    //         loading: true,
    //         error: null
    //     })

    //     axios
    //         .get(`https://api-guajolotas.herokuapp.com/${this.props.match.params.section}`)
    //         .then(res => {
    //             this.setState({
    //                 loading: false,
    //                 dataSlider: res.data
    //             })
    //         })
    //         .catch(res => {
    //             this.setState({
    //                 loading: false,
    //                 error: res.error
    //             })
    //         })

    // }

    // fetchDatosCart = () => {
    //     this.setState({
    //         loading: true,
    //         error: null
    //     })

    //     axios
    //         .get(`https://api-guajolotas.herokuapp.com/cart`)
    //         .then(res => {
    //             this.setState({
    //                 loading: false,
    //                 dataCart: res.data
    //             })
    //         })
    //         .catch(res => {
    //             this.setState({
    //                 loading: false,
    //                 error: res.error
    //             })
    //         })

    // }
    // componentDidMount() {
    //     this.fetchGuajalotaData();
    //     this.fetchDatosSlider();
    //     this.fetchDatosCart();
    // }

    modificarCantidad = (campo, valor) => {
        this.setState({ [campo]: parseFloat(valor) })
    }

    traerArreglo = (campo, valor) => {
        this.setState({ [campo]: valor })
    }

    render() {
        if (this.state.loading === true && this.state.data === undefined) {
            return (
                <div>
                    <Carga animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Carga>
                </div>)
        }

        if (this.state.error) {
            return <h1>No se ha podido cargar la pagina</h1>
        }
        return (
            <div style={{ position: "absolute", background: " #F2F2F2" }}>
                <ChakraProvider>
                    <Header />
                    <Productos productos={this.state.dataSlider} especifico={this.state.data} />
                    <Cantidad modificarCantidad={this.modificarCantidad} />
                    <Sabores productos={this.state.dataSlider} especifico={this.state.data} />
                    <Guajolocombo especifico={this.props.match.params.section} modificarCantidad={this.modificarCantidad} traerArreglo={this.traerArreglo} />
                    <BotonCarrito cant={this.state.cantidad} especifico={this.state.data} precio={this.state.precio} comboProducto={this.state.comboProducto} dataCart={this.state.dataCart} />
                </ChakraProvider>
            </div>
        )
    }
}
