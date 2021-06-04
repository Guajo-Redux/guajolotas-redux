import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import { useToast } from '@chakra-ui/toast'
import { Button } from '@chakra-ui/button'

const NavFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 101px;
  background-color: #F2F2F2;
  text-align: center;
  opacity: 1;
`

const NavButton = styled(Button)`
    margin-top: 17px !important;
    width: 312px !important;
    height: 69px !important;
    text-align: center !important;
    border-radius: 40px !important;
    background-color: #FA4A0C !important;
    border: none !important;
    font-family: Inter !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 17px !important;
    line-height: 21px !important;
    color: #F6F6F9 !important;
`

const BotonCarrito = (props) => {
    const toast = useToast()
    const agregarCarrito = async (e) => {
        e.preventDefault()

        if (parseInt(props.cant) === 0) {
            alert("No hay productos registrados")
        } else {

            const found1 = props.dataCart.find(element => element.id === props.especifico.id);

            if (found1 !== undefined) {

                const actualizarCantidad = {
                    nombre: props.especifico.nombre,
                    precio: props.especifico.precio,
                    imagen: props.especifico.imagen,
                    cantidad: found1.cantidad + props.cant
                }

                const url = `https://api-guajolotas.herokuapp.com/cart/${found1.id}`

                try {
                    const resultado = await axios.put(url, actualizarCantidad)

                    if (resultado.status === 200) {
                        toast({
                            title: "Actualizado",
                            description: "Su producto se actualizo correctamente",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                } catch {
                    toast({
                        title: "Problemas",
                        description: "No se pudo actualizar su producto",
                        status: "warning",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            } else {

                const nuevoProducto =
                {
                    nombre: props.especifico.nombre,
                    precio: props.especifico.precio,
                    imagen: props.especifico.imagen,
                    cantidad: props.cant,
                    id: props.especifico.id
                }

                const url = "https://api-guajolotas.herokuapp.com/cart"

                try {
                    const resultado = await axios.post(url, nuevoProducto)
                    if (resultado.status === 200) {
                        toast({
                            title: "Agregado",
                            description: "Su producto se agregó correctamente",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                } catch {
                    toast({
                        title: "Problemas",
                        description: "No se pudo agregar su producto",
                        status: "warning",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            }

            const found2 = props.dataCart.find(element => element.id === props.comboProducto.id);
            if (found2 !== undefined) {
                if (found2 !== undefined) {

                    const actualizarCantidad = {
                        nombre: props.comboProducto.nombre,
                        precio: props.comboProducto.precio,
                        imagen: props.comboProducto.imagen,
                        cantidad: found1.cantidad + props.cant
                    }

                    const url = `https://api-guajolotas.herokuapp.com/cart/${found1.id}`

                    try {
                        const resultado = await axios.put(url, actualizarCantidad)

                        if (resultado.status === 200) {
                            toast({
                                title: "Actualizado",
                                description: "Su producto se actualizo correctamente",
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    } catch {
                        toast({
                            title: "Problemas",
                            description: "No se pudo actualizar su producto",
                            status: "warning",
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                } else {

                    const comboPro =
                    {
                        nombre: props.comboProducto.nombre,
                        precio: props.comboProducto.precio,
                        imagen: props.comboProducto.imagen,
                        cantidad: 1,
                        id: props.comboProducto.id
                    }

                    const url = "https://api-guajolotas.herokuapp.com/cart"

                    try {
                        const resultado2 = await axios.post(url, comboPro)
                        if (resultado2.status === 200) {
                            toast({
                                title: "Agregado",
                                description: "Su producto se agregó correctamente",
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    } catch {
                        toast({
                            title: "Problemas",
                            description: "No se pudo agregar su producto",
                            status: "warning",
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                }
            }
        }
    }

    return (
        <div>
            <NavFixed>
                <NavButton onClick={agregarCarrito}>Agregar {props.cant} al carrito ${props.cant * props.especifico.precio + props.precio}.00</NavButton>
            </NavFixed>
        </div>
    )
}

export default BotonCarrito
