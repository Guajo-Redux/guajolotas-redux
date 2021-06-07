import React from 'react'
import styled from 'styled-components'

const DivFC = styled.div`
    width: 100%;
	height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 324px;
`

const ImgFC = styled.img`
    width: 150px;
    margin-right: 30px;
`

const H2FC = styled.h2`
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    margin: 24px 0;
`

const FondoCarrito = () => {
    return (
        <DivFC>
            <ImgFC src="https://i.ibb.co/TTLS7GL/shop-cart.png" alt="Sin Productos" />
            <H2FC>No hay productos</H2FC>
        </DivFC>
    )
}

export default FondoCarrito
