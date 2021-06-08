import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import styled from 'styled-components'
import { Grid, GridItem } from '@chakra-ui/layout';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { starLogout, logout } from '../../actions/auth'
import { Link } from 'react-router-dom'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

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

const StyledLogoutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(starLogout())
    }

    const [isLoogedIn, setsIsLoogedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                // dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
        })

    }, [dispatch])


    return (
        <>
            <StyledGrid templateColumns="repeat(5, 1fr)" gap={4}>
                <StyledLogo><img src="https://i.ibb.co/xLYZydk/logo.png" alt="Imagen de logo" /></StyledLogo>
                <StyledLogoutContainer>
                    {
                        isLoogedIn ?
                            <div style={{ display: 'flex' }}>
                                <Link to='/perfil'>
                                    <div style={{ fontSize: '25px', opacity: '0.3' }}>
                                        <CgProfile />
                                    </div>
                                </Link>
                                <Link to="/carrito" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ margin: '0 30px' }}>
                                        <img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" />
                                    </div>
                                </Link>
                            </div>
                            :
                            <p></p>
                    }
                    {
                        !isLoogedIn ?
                            <Link to='/auth/login'>
                                <div style={{ fontSize: '25px', opacity: '0.3' }}>
                                    <RiLoginBoxLine />
                                </div>
                            </Link> :
                            <div onClick={handleLogout} style={{ fontSize: '25px', opacity: '0.3' }}> <RiLogoutBoxLine /> </div>
                    }
                </StyledLogoutContainer>

            </StyledGrid>
            <StyledTextEncabezado>Nada como una Guajolota para empezar el día</StyledTextEncabezado>
            {/* <Link to="/search"> */}
            <Col xs={8} style={{ position: 'relative', marginTop: '32px', paddingLeft: "0" }}>
                <img src='https://i.ibb.co/ssJCP66/vector-search.png' style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '20px', marginLeft: '25px', color: 'black', bottom: '1px', }} alt="Imagen del buscador" />
                <Link to="/busqueda">
                    < StyledSearchInput type='search' style={{ paddingLeft: '35px', paddingRight: '35px', }} placeholder='Sabor de guajolota, bebida...' name="searchText"
                        onClick={() => {
                        }} />
                </Link>
            </Col>
            {/* </Link> */}
        </>
    )
}

export default Header