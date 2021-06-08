import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
// import getProductoName from "../../selectors/getProductoName.jsx";
import { useForm } from '../../hooks/useForm';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"

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

const RealizarBusqueda = ({ productoFilter }) => {
    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <img src='https://i.ibb.co/CwB3fBC/vector-feather-search.png' alt="Icono de busqueda" />
            <StyledResultadoOneSearch>Realizar una búsqueda</StyledResultadoOneSearch>
            {/* <StyledBoxProductos key={`${productoFilter.id}`}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box w="100%" h="10" marginTop="-10px">
                        <StyledImageProducto src={productoFilter.imagen} alt="Guajalota verde" />
                    </Box>
                    <Box w="100%" h="10" marginLeft="-50px" marginTop="20px">
                        <StyledHeadign fontSize="xl">{productoFilter.sabor.nombreSabor}</StyledHeadign>
                        <StyledTextPrecio mt={4}>{productoFilter.precio} MX</StyledTextPrecio>
                    </Box>
                </Grid>
            </StyledBoxProductos> */}
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

const Search = ({ history }) => {
    // const [stateSearch, setSearch] = useState(true)
    // const location = useLocation();

    // const { palabra = '' } = queryString.parse(location.search)

    // const [formValues, handleInputChange] = useForm({
    //     searchText: palabra
    // })

    // const { searchText } = formValues

    // const productoFilter = useMemo(() => getProductoName(palabra), [palabra])

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     history.push(`?palabra=${searchText}`)
    // }

    return (
        <React.Fragment>
            <StyledSearchContainer fluid>
                <Row>
                    <Col xs={8} style={{ position: 'relative', margin: '0px', marginTop: '44px' }}>
                        <img src='https://i.ibb.co/ssJCP66/vector-search.png' style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '20px', marginLeft: '25px', color: 'black', bottom: '1px', }} alt="Icono de busqueda" />
                        <form >
                            < StyledSearchInput type='search' style={{ paddingLeft: '35px', paddingRight: '35px', }} placeholder='Sabor de guajolo...' name="searchText" />
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


            {/*<div className="row">

                 <h4> Results </h4>
<hr />

{
    (palabra === '')
    &&
    <div className="alert alert-info">
        Producto no encontrado
            </div>
}

{/* {
    (palabra !== '' && productoFilter.length === 0)
    &&
    <div className="alert alert-danger">
        Ese producto no lo conozco we {palabra}
    </div>
} */}

            {
                // productoFilter.map(p => (
                // <Productos
                //     key={p.id}
                //     {...p}
                // />


                // <StyledBoxProductos key={`${productoFilter.id}`}>
                //     <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                //         <Box w="100%" h="10" marginTop="-10px">
                //             <StyledImageProducto src={productoFilter.imagen} alt="Guajalota verde" />
                //         </Box>
                //         <Box w="100%" h="10" marginLeft="-50px" marginTop="20px">
                //             <StyledHeadign fontSize="xl">{productoFilter.sabor.nombreSabor}</StyledHeadign>
                //             <StyledTextPrecio mt={4}>{productoFilter.precio} MX</StyledTextPrecio>
                //         </Box>
                //     </Grid>
                // </StyledBoxProductos>

                // ))
            }
            {/* </div> */}
        </React.Fragment >
    )
}

export default Search
