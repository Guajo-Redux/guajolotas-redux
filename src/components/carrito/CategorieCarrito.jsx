import React, { useState } from 'react'
import {
    Flex,
    Spacer,
    Image,
    Text
} from "@chakra-ui/react"
import {
    Modal, Spinner
} from 'react-bootstrap'
import styled from 'styled-components'
import ModalCarrito from './ModalCarrito'
import { useDispatch, useSelector } from 'react-redux'
import { activeCart } from '../../actions/cartAction'
// import '../../style/carrito/styleCarrito.css'

const DivCart = styled.div`
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
`

const DivCCart = styled.div`
    text-align: center;
    margin-bottom: 16px;
`

const ButtonCCart = styled.button`
    width: 300px;
    background-color: transparent;
    border: none;
    text-align: left;
`

const TotalCCart = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 16px;
    width: 312px;
    height: 53px;
    background: #ffffff;
    box-shadow: 0px 10px 40px rgb(0 0 0 / 3%);
    border-radius: 20px;
`

const TextCCart1 = styled(Text)`
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
`

const TextDivNameCant = styled.div`
    margin: 12px;
`

const TextPName = styled(Text)`
    font-size: 12px;
    font-weight: bold;
`

const TextPCant = styled(Text)`
    color: #FA4A0C;
    font-weight: bold;
    font-size: 12px;
`

const TextPPrecio = styled(Text)`
    margin: 15px 0;
    color: #FA4A0C;
    font-weight: bold;
    font-size: 14px;
`

const ModalCCart = styled(Modal)`
    display: flex !important;
    justify-content: center;
    align-items: center;
`

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

let i = {}

const CategorieCarrito = () => {    
    
    let acum = 0
    let precio
    let cantidad
    
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch()
    
    const { cart } = useSelector(state => state.cart)

    const handleClickCart = (cart) => {
        dispatch(
            activeCart(cart.id, {
                ...cart
            })
        );
        setShow(true)
    }

    const handleClose = () => setShow(false);

    cart.forEach(crt => {
        precio = crt.precio
        cantidad = crt.cantidad
        acum += (precio * cantidad)
    })

    return (
        <DivCart style={{ marginBottom: '35%' }}>
            {
                cart.map(crt => {
                    return (
                        <DivCCart key={`"cart"-${crt.nombre}`}>
                            <ButtonCCart onClick={() =>
                                handleClickCart(crt)
                            }
                            >
                                <Flex>
                                    <Image boxSize="56px" src={crt.imagen} alt={crt.nombre} />
                                    <TextDivNameCant>
                                        <TextPName id={crt.id}>{crt.nombre}</TextPName>
                                        <TextPCant>x{crt.cantidad}</TextPCant>
                                    </TextDivNameCant>
                                    <Spacer />
                                    <TextPPrecio>${crt.precio * crt.cantidad} MXN</TextPPrecio>
                                </Flex>
                            </ButtonCCart>
                        </DivCCart>
                    )
                })
            }
            <hr />
            <TotalCCart>
                <TextCCart1>Total</TextCCart1>
                <TextCCart1 style={{ color: "#FA4A0C" }}>$
                        {acum} MXN
                    </TextCCart1>
            </TotalCCart>
            <ModalCCart show={show} onHide={handleClose} >
                <ModalCarrito handleClose={handleClose} />
            </ModalCCart>
        </DivCart>
    )
}

export default CategorieCarrito