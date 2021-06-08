import React, { useState, useRef } from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, Button, ButtonGroup, Stack, Input, InputGroup, InputLeftElement, Heading } from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BiPencil } from 'react-icons/bi'
import { GrCamera } from 'react-icons/gr'
import { startSaveUser, startUploading } from '../../actions/userAction'
import { IoCamera } from 'react-icons/io5'

const StyledPerfilContainer = styled.div`
    height: 100vh;
    font-family: 'Inter', sans-serif;
`
const StyledStack = styled(Stack)`
  margin: 0px 30px;
  position: relative; 
  top: 50px; 
`
const StyledContainerButton = styled.div`
    position: relative;
    top: 80px; 
    text-align: center;
`

const StyledColorContainer = styled.div`
    width: 100%;
    height: 200px;
    background: #FA4A0C;
    position: relative;
    z-index: -1;
`
const StyledButtonEdit = styled.div`
    text-align: center;
    margin-top: 30px;
`
const StyledButtonEditSelect = styled(Button)`
    background: #FA4A0C !important;
    color: white;
`
const StyledEditarPerfil = styled.p`
    font-size: 18px;
    font-weight: bold;
`


const Perfil = () => {

    const [iconos, setIconos] = useState(false)

    const cambiarIcono = () => {
        setIconos(!iconos)
    }
    const dispatch = useDispatch()

    const user = useSelector(state => state.user);
    // const {auth} = useSelector(state => state.auth);
    console.log(user[0]);

    const [aInput, setAInput] = useState(false)

    const nombre = useRef('')
    const email = useRef('')
    const direccion = useRef('')

    const editarUser = async (e) => {

        const nuevoNCantidad = nombre.current.value
        const nuevoECantidad = email.current.value
        const nuevoDCantidad = direccion.current.value

        if (nuevoNCantidad === '' || nuevoECantidad === '' || nuevoDCantidad === '') {
            console.log('Llena todos los campos ***********');
        } else {
            const upUser = {
                id: user[0].id,
                uid: user[0].uid,
                name: nuevoNCantidad,
                image: user[0].image,
                email: nuevoECantidad,
                address: nuevoDCantidad
            }

            console.log(upUser);

            dispatch(startSaveUser(upUser))
        }
    }

    const handleAInputClick = (e) => {
        // document.querySelector('#fileSelector').click();
        if (e.target.textContent === 'Editar') {
            setAInput(true)
        } else {
            setAInput(false)
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        console.log(file);

        if (file) {
            dispatch(startUploading(file))
        }

    }

    if (user[0] === undefined) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <div>
            <StyledPerfilContainer>
                <Link to='/'>
                    <IoChevronBackOutline style={{ position: 'absolute', fontSize: '20px', color: 'white', left: '10px', top: '10px' }} />
                </Link>
                {/* Input para cargar el archivo */}
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {/* Lapiz */}
                {/* <BiPencil style = {{color: 'white'}}/>  */}
                <StyledColorContainer >
                </StyledColorContainer>
                <div style={{ textAlign: 'center' }}>
                    {
                        aInput ?
                            <div>
                                <Avatar name="Dan Abrahmov" src={user[0].image} style={{ position: 'relative', zIndex: '1', bottom: '60px', width: '100px', height: '100px' }} >
                                    <AvatarBadge style={{ border: 'none', background: '#FA4A0C', padding: '7px', marginRight: '10px', color: 'white' }} onClick={handlePictureClick}>
                                        <IoCamera />
                                    </AvatarBadge>
                                </Avatar>
                                <StyledEditarPerfil>Editar Perfil</StyledEditarPerfil>
                            </div>
                            :
                            <Avatar name="Dan Abrahmov" src={user[0].image} style={{ position: 'relative', zIndex: '1', bottom: '60px', width: '100px', height: '100px' }} >
                            </Avatar>
                    }
                </div>
                {
                    !aInput
                        ?
                        <div>
                            <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                                {user[0].name}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                {user[0].email}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                {user[0].address}
                            </div>
                            <StyledButtonEdit>
                                <StyledButtonEditSelect onClick={handleAInputClick} >Editar</StyledButtonEditSelect>
                            </StyledButtonEdit>
                        </div>
                        :
                        <div>
                            <StyledStack spacing={4} >
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FaUserAlt color="gray.300" />}
                                    />
                                    <Input type='text' ref={nombre} placeholder={user[0].name} />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<MdEmail color="gray.300" />}
                                    />
                                    <Input type='email' ref={email} placeholder={user[0].email} />
                                </InputGroup>

                                {/* <Button onClick={handlePictureClick}>Picture</Button> */}

                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<MdEmail color="gray.300" />}
                                    />
                                    <Input type='text' ref={direccion} placeholder={user[0].address} />
                                </InputGroup>
                            </StyledStack>

                            <StyledContainerButton >
                                <Button onClick={handleAInputClick} style={{ background: '#FA4A0C', color: 'white', marginRight: '20px' }} >Volver</Button>
                                <Button onClick={editarUser} variant="solid" style={{ background: '#FA4A0C', color: 'white' }} >
                                    Guardar
                                </Button>
                            </StyledContainerButton>
                        </div>
                }
            </StyledPerfilContainer>
        </div>
    )
}

export default Perfil
