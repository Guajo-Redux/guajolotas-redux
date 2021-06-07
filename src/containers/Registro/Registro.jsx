import React, { useState } from 'react'
import styled from 'styled-components';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/uiError'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import validator from 'validator'
import {Link} from 'react-router-dom'

const StyledFormContainer = styled(Form)`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    background: '#F2F2F2';
`
const StyledButtomSend = styled.button`
    background: #FA4A0C;
    border: none;
    border-radius: 40px;
    padding: 5px;
    color: #F6F6F9;
    width: 250px;
`
const StyledCheckLogin = styled(Button)`
    background: #FA4A0C;
    border: none;
    border-radius: 40px;
    color: #F6F6F9;
    width: 250px;
`
const Registro = () => {

    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.error);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        direction: ''
    })
    const { name, email, password, direction } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name, direction))
        }
    }

    const formValid = () => {

        if (name.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Rellena todos los campos',
            // })
            dispatch(setError(''))
            return false
        } else if (!validator.isEmail(email)) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Se requiere un email',
            // })
            dispatch(setError(''))
            return false
        } else if (password.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Ingresa una contraseña',
            // })
            dispatch(setError(''))
            return false
        }

        dispatch(removeError())
        return true
    }

    const envioRegistro = () => {
        console.log("Registro!!");
    }
    const cambiarEstado = () => {
        console.log('Estado!');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src='https://i.ibb.co/xLYZydk/logo.png' style={{ marginBottom: '10px' }} alt="Imagen del logo" width = '200px' height = '200px' />
            <h2 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '10px' }}>Bienvenido al Registro</h2>
            <StyledFormContainer className='container' onSubmit={handleSubmit} >
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <FaUserAlt style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="text" placeholder="Ingrese Usuario" onChange={handleInputChange} name="name" value={name} maxLength='10' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Contraseña</Form.Label>
                    <FaLock style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="password" placeholder="Ingrese Contraseña" onChange={handleInputChange} name="password" value={password} maxLength='16' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Correo Electrónico</Form.Label>
                    <MdEmail style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="email" placeholder="Ingrese Correo Electrónico" onChange={handleInputChange} name="email" value={email} style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Dirección</Form.Label>
                    <FaMapMarkerAlt
                        style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }}
                    />
                    <Form.Control type="text" placeholder="Ingrese Dirección" onChange={handleInputChange} name="direction" value={direction} maxLength='30' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <StyledButtomSend type='submit' >Enviar</StyledButtomSend>
            </StyledFormContainer>
            <Row>
                <Col xs={12} style={{ marginTop: '15px' }}>
                    <div to='/auth/login'>
                        <Link to='auth/login'>
                            <StyledCheckLogin variant='secondary' >
                                Ya tengo una Cuenta
                                </StyledCheckLogin>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Registro