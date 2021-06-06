import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Col, Row, Form, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { Button } from '@chakra-ui/react';
import { useForm } from '../../hooks/useForm';
import { FcGoogle } from 'react-icons/fc';
import { login, startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';


// Estilos 
const StyledFormContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh; 
    background: #F2F2F2;
`

const StyledButtom = styled.button`
    background: #FA4A0C;
    border: none;
    border-radius: 40px;
    padding: 5px 15px;
    margin-top: 10px;
    color: white;
    width: 250px;
`
const StyleButtonContainer = styled(Col)`
    text-align: center;
    margin-top: 20px;
    width:300px;
`
const StyledButtonGoogle = styled(Button)`
    background: #FAF8F7;
    color: black;
    width: 100% !important;
    border: none;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold;
    font-size: 15px;
`

const StyledFormMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const Login = () => {

    // Autenticación
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    // Aca hay que cambiar ui por error 
    const loading = useSelector(state => state.ui)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }


    return (
        <StyledFormContainer>
            <img src='https://i.ibb.co/xLYZydk/logo.png' style={{ marginBottom: '10px' }} alt="Imagen del logo" />
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: '23px', fontWeight: 'bold' }} className='mt-2 mb-4'>Iniciar Sesión</h1>
                </Col>
            </Row>
            <StyledFormMainContainer className='container'>
                {/* Nombre de usuario */}
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <FaUserAlt
                        style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }}
                    />
                    <Form.Control type="text" placeholder="Ingrese Usuario" id='user' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                </Form.Group>
                {/* Contraseña */}
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
                    <FaLock
                        style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }}
                    />
                    <Form.Control type="password" placeholder="Ingrese Contraseña" id='password' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                </Form.Group>
                <StyledButtom >Entrar
                </StyledButtom>
                <Row>
                    <StyleButtonContainer xs={12}>
                        <StyledButtonGoogle variant="primary" type='submit'
                            onClick={handleGoogleLogin}

                        >
                            <div style={{ padding: '10px' }}>
                                <FcGoogle />
                            </div>
                                                Continuar con Google
                        </StyledButtonGoogle>
                        <Row>
                            <Link to='/auth/registro' >
                                <Col xs={12} style={{ marginTop: '30px', }}>
                                    <Button variant='secondary'>
                                        Crear una Nueva Cuenta
                                </Button>

                                </Col>
                            </Link>
                        </Row>
                    </StyleButtonContainer>
                </Row>
            </StyledFormMainContainer>
        </StyledFormContainer>
    )
}

export default Login
