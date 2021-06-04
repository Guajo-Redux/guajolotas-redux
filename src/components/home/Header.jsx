import React from 'react'
import styled from 'styled-components'
// import { Link } from "react-router-dom"
import { Grid, GridItem } from '@chakra-ui/layout';
import { Col } from 'react-bootstrap';

const StyledTextEncabezado = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    color: #0D0D0D;
    margin-top: 32px;
`
const StyledLogo = styled(GridItem)`
    width:64px;
    height:64px;
`

const StyledCarrito = styled(GridItem)`
    float: right;
    margin-top:24px;
    width:24px;
    height:24px;
`

const StyledGrid = styled(Grid)`
    justify-content: space-between !important;
    display: flex !important;
`
const StyledSearchInput = styled.input`
    width: 312px; 
    height: 60px; 
    border-radius: 40px;
    border: none;
    background: #E7E7E7;
    padding-left: 55px !important;
    padding-right: 0px !important; 
`
const Header = () => {

    return (
        <>
            <StyledGrid templateColumns="repeat(5, 1fr)" gap={4}>
                <StyledLogo><img src="https://i.ibb.co/xLYZydk/logo.png" alt="Imagen de logo" /></StyledLogo>
                {/* <Link to="/cart"> */}
                    <StyledCarrito colStart={6} colEnd={7} h="10"><img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" /></StyledCarrito>
                    {/* </Link> */}
            </StyledGrid>
            <StyledTextEncabezado>Nada como una Guajolota para empezar el día</StyledTextEncabezado>
            {/* <Link to="/search"> */}
                <Col xs={8} style={{ position: 'relative', marginTop: '32px', paddingLeft: "0" }}>
                    <img src='https://i.ibb.co/ssJCP66/vector-search.png' style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '20px', marginLeft: '25px', color: 'black', bottom: '1px', }} alt="Imagen del buscador" />

                    < StyledSearchInput type='search' style={{ paddingLeft: '35px', paddingRight: '35px', }} placeholder='Sabor de guajolota, bebida...' name="searchText"
                        onClick={() => {
                        }} />
                </Col>
            {/* </Link> */}
        </>
    )
}

export default Header