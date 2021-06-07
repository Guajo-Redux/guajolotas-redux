import React from 'react'
import styled from 'styled-components'
import CategorieCarrito from './CategorieCarrito'

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

const NavButton = styled.button`
    margin-top: 17px;
    width: 312px;
    height: 69px;
    text-align: center;
    border-radius: 40px;
    background-color: #FA4A0C;
    border: none;
    color: #F6F6F9;
`

const CarritoOpacityA = () => {

    return (
        <>
            <CategorieCarrito/>
            <NavFixed>
                <NavButton>Pagar</NavButton>
            </NavFixed>
        </>
    )
}

export default CarritoOpacityA
