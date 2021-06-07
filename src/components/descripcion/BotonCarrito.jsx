import React from 'react'
import styled from 'styled-components'
import { useToast } from '@chakra-ui/toast'
import { Button } from '@chakra-ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { AddCarrito, startSaveCart } from '../../actions/cartAction'

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

const BotonCarrito = ({ cant, comboProducto, precio }) => {

    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.cart)

    const { active } = useSelector(state => state.products)

    const toast = useToast()

    const agregarCarrito = async (e) => {
        e.preventDefault()

        if (parseInt(cant) === 0) {
            alert("No hay productos registrados")
        } else {
            if (comboProducto === undefined) {
                const found1 = cart.find(element => element.nombre === active.nombre);

                if (found1 !== undefined) {
                    console.log('Actualizar');

                    const actCar = {
                        id: found1.id,
                        nombre: found1.nombre,
                        precio: found1.precio,
                        imagen: found1.imagen,
                        cantidad: found1.cantidad + cant
                    }

                    dispatch(startSaveCart(actCar))
                } else {
                    console.log('Agregar');

                    dispatch(AddCarrito(active.nombre, active.precio, active.imagen, cant))
                }
            } else {
                const found1 = cart.find(element => element.nombre === active.nombre);

                if (found1 !== undefined) {
                    console.log('Actualizar');

                    const actCar = {
                        id: found1.id,
                        nombre: found1.nombre,
                        precio: found1.precio,
                        imagen: found1.imagen,
                        cantidad: found1.cantidad + cant
                    }

                    dispatch(startSaveCart(actCar))
                } else {
                    console.log('Agregar');

                    dispatch(AddCarrito(active.nombre, active.precio, active.imagen, cant))
                }

                const found2 = cart.find(element => element.nombre === comboProducto.nombre);

                if (found2 !== undefined) {
                    console.log('Actualizar');

                    const actCar = {
                        id: found2.id,
                        nombre: found2.nombre,
                        precio: found2.precio,
                        imagen: found2.imagen,
                        cantidad: found2.cantidad + 1
                    }

                    dispatch(startSaveCart(actCar))
                } else {
                    dispatch(AddCarrito(comboProducto.nombre, comboProducto.precio, comboProducto.imagen, 1))
                }
            }
        }
    }

    return (
        <div>
            <NavFixed>
                <NavButton onClick={agregarCarrito}>Agregar {cant} al carrito ${cant * active.precio + precio}.00</NavButton>
            </NavFixed>
        </div>
    )
}

export default BotonCarrito
