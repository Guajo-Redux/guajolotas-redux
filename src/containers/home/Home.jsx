// import React, { Component, useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import CategoriaProductos from '../../components/home/CategoriaProductos'
import Header from '../../components/home/Header'

const StyledHome = styled.header`
    padding: 24px 24px 24px 24px;
    background-color: #F2F2F2;
`

const Home = () => {
    
    return (
        <StyledHome>
            <Header />
            <CategoriaProductos />
        </StyledHome>
    )
}

export default Home