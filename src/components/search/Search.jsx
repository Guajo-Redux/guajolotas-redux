import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
// import getProductoName from "../../selectors/getProductoName.jsx";
import { useForm } from '../../hooks/useForm';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../actions/productAction';
import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const StyledSearchContainer = styled(Container)`
    background: #F2F2F2;
    height: 100vh;
    font-family: 'Inter', sans-serif;
`
const StyledSearchInput = styled.input`
    width: 220px; 
    height: 60px; 
    border-radius: 40px;
    border: none;
    background: #E7E7E7;
    padding-left: 55px !important;
    padding-right: 0px !important; 
`
const StyledTextCancelar = styled(Col)`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
`
const StyledPcancelar = styled.p`
    font-size: 17px;
    font-weight: bold;
    margin-right: 24px;
    margin-top: 10px;
`
const StyledRowContainerMainImage = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    text-align: center;
`
const StyledResultadoOneSearch = styled.p`
    margin-top: 24px;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
`

const RealizarBusqueda = () => {
    const { search } = useSelector(state => state.products)
    return (
        <div style={{ textAlign: "-webkit-center" }}>

            {
                search.length < 1
                    ?
                    <>
                        <img src='https://i.ibb.co/CwB3fBC/vector-feather-search.png' alt="Icono de busqueda" />
                        <StyledResultadoOneSearch>Realizar una búsqueda</StyledResultadoOneSearch>
                    </>
                    :
                    search.map(producto => {
                        return (
                            <Box key={`${producto.id}`}>
                                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                    <Box w="30%" h="10" marginTop="-10px">
                                        <Image src={producto.imagen} alt="Guajalota verde" />
                                    </Box>
                                    <Box w="100%" h="10" marginLeft="-50px" marginTop="20px">
                                        <Heading fontSize="xl">{producto.nombreSabor}</Heading>
                                        <Text mt={4}>{producto.precio} MX</Text>
                                    </Box>
                                </Grid>
                            </Box>)
                    })
            }
        </div>
    )
}

const NoEncontrado = () => {
    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <img src='https://i.ibb.co/CwB3fBC/vector-feather-search.png' alt="Icono de busqueda" />
            <StyledResultadoOneSearch>No hay resultados</StyledResultadoOneSearch>
        </div>
    )
}

const Search = () => {

    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    const { uid } = useSelector(state => state.auth)

    const handleDataSearch = (e) => {
        e.preventDefault()
        console.log("Buscar", filter);
        dispatch(startSearch(filter.toLowerCase()))
    }

    return (
        <React.Fragment>
            <StyledSearchContainer fluid>
                <Row>
                    <Col xs={8} style={{ position: 'relative', margin: '0px', marginTop: '44px' }}>
                        <img src='https://i.ibb.co/ssJCP66/vector-search.png' style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '20px', marginLeft: '25px', color: 'black', bottom: '1px', }} alt="Icono de busqueda" />
                        <form onSubmit={handleDataSearch}>
                            < StyledSearchInput type='search' style={{ paddingLeft: '35px', paddingRight: '35px', }} placeholder='Sabor de guajolo...' name="search" onChange={(e) => {
                                setFilter(e.target.value)
                            }} />
                            <Button type="submit">Search</Button>
                        </form>
                    </Col>
                    <StyledTextCancelar xs={4}>
                        <Link to="/home"><StyledPcancelar>Cancelar</StyledPcancelar></Link>
                    </StyledTextCancelar>
                </Row>
                < StyledRowContainerMainImage>
                    <Col xs={12}>
                        {
                            <RealizarBusqueda />
                        }
                    </Col>
                </ StyledRowContainerMainImage>
            </StyledSearchContainer>
        </React.Fragment >
    )
}

export default Search
