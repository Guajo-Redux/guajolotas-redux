import { GridItem } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import { startLoadingProducts } from '../../actions/productAction';
import { useDispatch } from 'react-redux';
const Retorno = styled(GridItem)`
         margin-top:44px;
         margin-left:24px;
         width:24px;
         height:24px;
         `

const Carrito = styled(GridItem)`
         float: right;
         margin-top:44px;
         margin-right:24px;
         width:24px;
         height:24px;
         `

const Header = () => {
    const dispatch = useDispatch()
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <Retorno onClick={()=>{
                dispatch(startLoadingProducts("guajolotas"))
            }}>
                <Link to="/"><img src="https://i.ibb.co/ZGqLjJJ/vector-chevron-left.png" alt="vector-chevron-left" border="0" /></Link>
            </Retorno>
            <Carrito colStart={6} colEnd={7} h="10">
                <Link to="/carrito"><img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" /></Link>
            </Carrito>
        </Grid>
    )
}

export default Header
