import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom"
const Container = styled.div`
       margin: 24px;
`
const Titulo = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #0D0D0D;
    text-align: left;
`
const ContainerSabor = styled.div`
      margin-top:24px;
`

const ImgSabores = styled.img`
      width:64px;
      height:69px;
      display: block;
      margin-left:auto;
      margin-right:auto;
`
const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

const Sabores = (props) => {


    if (props.productos === undefined) {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }
    return (
        <Container style={{ textAlign: "center" }}>
            <Titulo>Sabor</Titulo>
            <ContainerSabor>
                <Row>
                    {
                        props.productos.map(guajolotas => {
                            return (
                                <Col xs={4} mb={5}>
                                    <Link to={`${guajolotas.id}`}>
                                        <button onClick={() => {
                                            setTimeout(() => {
                                                window.location.reload()
                                            }, 1);
                                        }}>
                                            {
                                                (guajolotas.id === props.especifico.id)
                                                    ?
                                                    <ImgSabores src={guajolotas.sabor.imagenSabor} alt={guajolotas.sabor.nombreSabor} border="0" />
                                                    :
                                                    <ImgSabores style={{ opacity: "0.2" }} src={guajolotas.sabor.imagenSabor} alt={guajolotas.sabor.nombreSabor} border="0" />
                                            }
                                        </button>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </ContainerSabor>
        </Container>
    )
}

export default Sabores
