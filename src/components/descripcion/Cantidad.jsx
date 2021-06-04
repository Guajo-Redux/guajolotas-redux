import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Contenedor = styled(Container)`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px;
        width: 190px;
        height: 72px;
        left: 85px;
        margin-top: 40px;
        background: #FFFFFF;
        box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
        border-radius: 20px;
        `

const BotonesCantidad = styled.button`
        background-color:transparent;
        border:none;
        `

const Cantidad = styled.h2`
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: #0D0D0D;
        margin: 0 32px 0 32px;
        `

function CounterDos({ modificarCantidad }) {

        const { state, incremento, decremento } = useCounter(0, modificarCantidad)

        return (
                <div>
                        <Contenedor>
                                {
                                        (state === 0)
                                                ?
                                                <img src="https://i.ibb.co/bQtPKQw/minus-circle-gray.png" alt="minus-circle-gray" border="0" />
                                                :
                                                <BotonesCantidad onClick={() => decremento()}>
                                                        <img src="https://i.ibb.co/wRnV6YJ/minus-circle.png" alt="minus-circle" border="0" />
                                                </BotonesCantidad>
                                }

                                <Cantidad>  {state} </Cantidad>
                                <BotonesCantidad onClick={() => incremento()}>
                                        <img src="https://i.ibb.co/gWVpXrD/plus-circle.png" alt="plus-circle" border="0" />
                                </BotonesCantidad>
                        </Contenedor>
                </div>
        )
}

export default CounterDos
