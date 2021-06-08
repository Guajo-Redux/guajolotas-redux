import React, { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
// import getProductoName from "../../selectors/getProductoName.jsx";
import { useForm } from '../../hooks/useForm';
import styled from 'styled-components';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { activeProduct, starCleanSearch, startSearch } from '../../actions/productAction';
import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { StackDivider } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/layout';

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



const StyledBoxProductos = styled(Box)`
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    background :#ffffff;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    width: 100%;
    height: 112px;
`

const StyledImageProducto = styled(Image)`
    width : 80px;
    height : auto;
`

const StyledHeadign = styled(Heading)`
    font-family: Inter !important;
    font-style: normal;
    font-weight: 600 !important;
    font-size: 17px !important;
    line-height: 21px !important;
    color: #0D0D0D;
`

const StyledTextPrecio = styled(Text)`
    font-family: Inter !important;
    font-style: normal;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #FA4A0C;
`
const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

const RealizarBusqueda = () => {
    const { search } = useSelector(state => state.products)
    // const dispatch = useDispatch()
    // const [checking, setChecking] = useState(true);
    // const handleClickProduct = (product) => {
    //     dispatch(
    //         activeProduct(product.id, {
    //             ...product
    //         })
    //     );

    // }
    // useEffect(() => {
    //     setChecking(false);
    // }, [setChecking])

    // if (checking) {
    //     return (
    //         <div>
    //             <Carga animation="border" role="status">
    //                 <span className="sr-only">Loading...</span>
    //             </Carga>
    //         </div>
    //     )
    // }
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
                    <VStack
                        divider={<StackDivider borderColor="gray.200" />}
                        align="stretch"
                        direction={["column", "row"]}>
                        <Stack>{
                            search.map(producto => {
                                return (

                                    // <Link to={`/descripcion/${producto.id}`}>
                                    <StyledBoxProductos
                                        // onClick={() => handleClickProduct(producto)}
                                        key={`home-${producto.id}`}>
                                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                            <Box w="100%" h="10" marginTop="-10px">
                                                <StyledImageProducto src={producto.imagen} alt="Guajalota verde" />
                                            </Box>
                                            <Box w="100%" h="10" marginLeft="-50px" marginTop="20px">
                                                <StyledHeadign fontSize="xl">{producto.nombreSabor}</StyledHeadign>
                                                <StyledTextPrecio mt={4}>{producto.precio} MX</StyledTextPrecio>
                                            </Box>
                                        </Grid>
                                    </StyledBoxProductos>
                                    // </Link>
                                )
                            })}
                        </Stack>
                    </VStack>

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
    const { search } = useSelector(state => state.products)
    const handleDataSearch = (e) => {
        e.preventDefault()
        dispatch(startSearch(filter.toLowerCase()))
    }

    const handleLimpiar = () => {
        dispatch(starCleanSearch())
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
                            {/* <Button type="submit">Search</Button> */}
                        </form>
                    </Col>
                    <StyledTextCancelar xs={4}>
                        <Link to="/home"><StyledPcancelar onClick={handleLimpiar}>Cancelar</StyledPcancelar></Link>
                    </StyledTextCancelar>
                </Row>
                < StyledRowContainerMainImage>
                    <Col xs={12}>
                        {
                            search ? <RealizarBusqueda /> : <NoEncontrado/>
                        }
                    </Col>
                </ StyledRowContainerMainImage>
            </StyledSearchContainer>
        </React.Fragment >
    )
}

export default Search
