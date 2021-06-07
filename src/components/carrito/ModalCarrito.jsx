import React, { useRef } from 'react'
import {
    Modal
} from 'react-bootstrap'
import {
    Image,
    Text,
    useToast
} from "@chakra-ui/react"
import useCounter from '../../hooks/useCounter.jsx'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletingCart, startSaveCart } from '../../actions/cartAction.js'

const HeaderModal = styled(Modal.Header)`
    flex-direction: column;
    align-items: center;
`

const TextModal1 = styled(Text)`
    font-weight: bold;
    font-size: 17px;
    margin-top: 16px;
`

const TextModal2 = styled(Text)`
    margin-top: 8px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #FA4A0C;
`

const BodyModal = styled(Modal.Body)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 0 60px;
    border-radius: 20px;
    margin-bottom: 20px;
`

const TextModal3 = styled(Text)`
    font-size: 22px;
    font-weight: bold;
    line-height: 27px;
    margin: 0 32px;
`

const FooterModal = styled(Modal.Footer)`
    flex-direction: column-reverse;
`

const ButtonModal3 = styled.button`
    width: 264px;
    height: 45px;
    background: #FA4A0C;
    border-radius: 40px;
    font-weight: bold;
    color: white;
`

const ButtonModal4 = styled.button`
    color: #FA4A0C;
    font-weight: bold;
`

const ModalCarrito = ({ handleClose }) => {

    const dispatch = useDispatch()

    const { active: cart } = useSelector(state => state.cart)

    const { state, incremento, decremento } = useCounter(cart.cantidad)

    const cantidadRef = useRef('')

    const toast = useToast()

    const editarCantidad = async (e) => {

        const nuevaCantidad = cantidadRef.current.textContent

        if (parseInt(nuevaCantidad) === 0) {

            dispatch(startDeletingCart(cart.id))

            handleClose()

        } else {

            const actCar = {
                id: cart.id,
                nombre: cart.nombre,
                precio: cart.precio,
                imagen: cart.imagen,
                cantidad: parseInt(nuevaCantidad)
            }

            console.log(actCar);

            dispatch(startSaveCart(actCar))

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }

    return (
        <div className="holaa3">
            <HeaderModal>
                <Image boxSize="80px" src={cart.imagen} alt={cart.nombre} />
                <TextModal1>{cart.nombre}</TextModal1>
                <TextModal2>${cart.precio * state} MXN</TextModal2>
            </HeaderModal>
            <BodyModal>
                {
                    (state === 0)
                        ?
                        <Image boxSize="40px" src="https://i.ibb.co/bQtPKQw/minus-circle-gray.png" alt="minus-circle-gray" />
                        :
                        <button onClick={decremento}><Image src="https://i.ibb.co/wRnV6YJ/minus-circle.png" alt="minus-circle" /></button>
                }
                <TextModal3 ref={cantidadRef}>{state}</TextModal3>
                <button onClick={incremento}><Image src="https://i.ibb.co/gWVpXrD/plus-circle.png" alt="plus-circle" /></button>
            </BodyModal>
            <FooterModal>

                <ButtonModal4 onClick={handleClose}>
                    Cerrar
                </ButtonModal4>
                {
                    (state === cart.cantidad)
                        ?
                        <ButtonModal3 onClick={handleClose} style={{ opacity: '0.5' }}>
                            Actualizar
                        </ButtonModal3>
                        :
                        <ButtonModal3 onClick={editarCantidad}>
                            Actualizar
                        </ButtonModal3>
                }
            </FooterModal>
        </div>
    )
}

export default ModalCarrito