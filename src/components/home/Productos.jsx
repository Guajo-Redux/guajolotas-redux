import React from 'react'
import { Box, Grid, Heading, Stack, StackDivider, Text, VStack } from '@chakra-ui/layout';
import styled from 'styled-components'
import { Image } from '@chakra-ui/image';
// import { Link } from "react-router-dom"
import { Spinner } from 'react-bootstrap';
// import { useSelector } from 'react-redux';

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

const Productos = ({ productos }) => {

    if (productos === "") {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }

    return (
        <>
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
                direction={["column", "row"]}>
                <Stack>
                    {productos.map(producto => {
                        return (
                            // <Link to={`${section}/${producto.id}`}>
                            <StyledBoxProductos key={`${producto.id}`}>
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
        </>
    )
}

export default Productos