import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Row, Image, Col } from 'react-bootstrap'

const RowBoots = styled(Row)`
    text-align: center;
    width: 100%;
    padding: 40px 30px;
`

const ArrowVector = styled(Image)`
    width: 24px;
    height: 24px;
    float: left;
`

const TextMenu = styled.h3`
    font-weight: bold;
    font-size: 17px;
`

const Header = () => {
    return (
        <>
            <RowBoots className="container fluid">
                <Col xs={2}>
                    <Link to = "/"><ArrowVector src="https://i.ibb.co/XCfZxLf/vector-chevron-leftx4.png" alt="Vector Arrow" /></Link>
                </Col>
                <Col xs={10}>
                    <TextMenu>Carrito</TextMenu>
                </Col>
            </RowBoots>
        </>
    )
}

export default Header
