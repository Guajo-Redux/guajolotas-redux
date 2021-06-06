import React from 'react'
import styled from 'styled-components'
import { useToast } from '@chakra-ui/toast'
import { Button } from '@chakra-ui/button'
import { useSelector } from 'react-redux'

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

const BotonCarrito = ({cant, dataCart, comboProducto, precio}) => {
    const {active} = useSelector(state => state.products)
    const toast = useToast()
    const agregarCarrito = async (e) => {
//         e.preventDefault()

//         if (parseInt(cant) === 0) {
//             alert("No hay productos registrados")
//         } else {

//             const found1 = dataCart.find(element => element.id === active.id);

//             if (found1 !== undefined) {

//                 const actualizarCantidad = {
//                     nombre: active.nombre,
//                     precio: active.precio,
//                     imagen: active.imagen,
//                     cantidad: found1.cantidad + props.cant
//                 }

//                 const url = `https://api-guajolotas.herokuapp.com/cart/${found1.id}`

//                 try {
//                     const resultado = await axios.put(url, actualizarCantidad)

//                     if (resultado.status === 200) {
//                         toast({
//                             title: "Actualizado",
//                             description: "Su producto se actualizo correctamente",
//                             status: "success",
//                             duration: 9000,
//                             isClosable: true,
//                         })
//                     }
//                 } catch {
//                     toast({
//                         title: "Problemas",
//                         description: "No se pudo actualizar su producto",
//                         status: "warning",
//                         duration: 9000,
//                         isClosable: true,
//                     })
//                 }
//             } else {

//                 const nuevoProducto =
//                 {
//                     nombre: active.nombre,
//                     precio: active.precio,
//                     imagen: active.imagen,
//                     cantidad: cant,
//                     id: active.id
//                 }

//                 const url = "https://api-guajolotas.herokuapp.com/cart"

//                 try {
//                     const resultado = await axios.post(url, nuevoProducto)
//                     if (resultado.status === 200) {
//                         toast({
//                             title: "Agregado",
//                             description: "Su producto se agregó correctamente",
//                             status: "success",
//                             duration: 9000,
//                             isClosable: true,
//                         })
//                     }
//                 } catch {
//                     toast({
//                         title: "Problemas",
//                         description: "No se pudo agregar su producto",
//                         status: "warning",
//                         duration: 9000,
//                         isClosable: true,
//                     })
//                 }
//             }

//             const found2 = dataCart.find(element => element.id === comboProducto.id);
//             if (found2 !== undefined) {
//                 if (found2 !== undefined) {

//                     const actualizarCantidad = {
//                         nombre: comboProducto.nombre,
//                         precio: comboProducto.precio,
//                         imagen: comboProducto.imagen,
//                         cantidad: found1.cantidad + cant
//                     }

//                     const url = `https://api-guajolotas.herokuapp.com/cart/${found1.id}`

//                     try {
//                         const resultado = await axios.put(url, actualizarCantidad)

//                         if (resultado.status === 200) {
//                             toast({
//                                 title: "Actualizado",
//                                 description: "Su producto se actualizo correctamente",
//                                 status: "success",
//                                 duration: 9000,
//                                 isClosable: true,
//                             })
//                         }
//                     } catch {
//                         toast({
//                             title: "Problemas",
//                             description: "No se pudo actualizar su producto",
//                             status: "warning",
//                             duration: 9000,
//                             isClosable: true,
//                         })
//                     }
//                 } else {

//                     const comboPro =
//                     {
//                         nombre: comboProducto.nombre,
//                         precio: comboProducto.precio,
//                         imagen: comboProducto.imagen,
//                         cantidad: 1,
//                         id: comboProducto.id
//                     }

//                     const url = "https://api-guajolotas.herokuapp.com/cart"

//                     try {
//                         const resultado2 = await axios.post(url, comboPro)
//                         if (resultado2.status === 200) {
//                             toast({
//                                 title: "Agregado",
//                                 description: "Su producto se agregó correctamente",
//                                 status: "success",
//                                 duration: 9000,
//                                 isClosable: true,
//                             })
//                         }
//                     } catch {
//                         toast({
//                             title: "Problemas",
//                             description: "No se pudo agregar su producto",
//                             status: "warning",
//                             duration: 9000,
//                             isClosable: true,
//                         })
//                     }
//                 }
//             }
//         }
    }

    return (
        <div>
            {/* <NavFixed>
                <NavButton onClick={agregarCarrito}>Agregar {cant} al carrito ${cant * active.precio + precio}.00</NavButton>
            </NavFixed> */}
        </div>
    )
}

export default BotonCarrito
