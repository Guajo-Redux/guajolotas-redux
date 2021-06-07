import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, Button, ButtonGroup, Stack, Input, InputGroup, InputLeftElement, Heading } from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

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

let usuario = 'Maurico Cianci'
let correo = 'chichocianci@gmail.com'

const Perfil = () => {

    // const {active} = useSelector(state => state.task)
    const dispatch = useDispatch()
   
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        // const file = e.target.files[0];
        // if ( file ) {
        //     dispatch(startUploading(file))
        // }
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
                <StyledColorContainer >
                </StyledColorContainer>
                <div style={{ textAlign: 'center' }}>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" style={{ position: 'relative', zIndex: '1', bottom: '60px', width: '100px', height: '100px'}} />
                </div>
                <Button onClick={handlePictureClick}>Cambiar</Button>
                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
                    {usuario}
                </div>
                <div style={{ textAlign: 'center' }}>
                    {correo}
                </div>
                <StyledStack spacing={4} >
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FaUserAlt color="gray.300" />}
                        />
                        <Input type="tel" value={usuario} />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<MdEmail color="gray.300" />}
                        />
                        <Input value={correo} />
                    </InputGroup>
                </StyledStack>
                <StyledContainerButton >
                    <Button variant="solid" style={{ background: '#FA4A0C', color: 'white' }} >
                        Guardar
                    </Button>
                </StyledContainerButton>
            </StyledPerfilContainer>
        </div>
    )
}

export default Perfil
