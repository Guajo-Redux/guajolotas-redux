import React, { useState } from 'react'
import { Grid, GridItem, Radio, RadioGroup } from '@chakra-ui/react'
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CajaGuajo = styled(Grid)`
      border-radius:20px;
      background-color:white;
      width: 152px !important;
      height: 138px !important;
      margin:8px;
      `

const GridCheck = styled(GridItem)`
      text-align: right;
      margin-top: 19px;
      margin-right: 19px;
      `

const GridImg = styled(GridItem)`
      margin: 16px 0 0 16px;
      `

const GridText = styled(GridItem)`
      margin: 0 16px 16px 16px;
      `
const CheckGuajo = styled(Radio)`
      border-color:black;
     `

const ImagenGuajo = styled.img`
       width:64px;
       height:64px;
     `

const GridP = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');   
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #0D0D0D;
    `

const GridPP = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #FA4A0C;
    `
const ContenedorGuajo = styled.div`
       padding:10px;
       display:flex;
       flex-wrap: wrap;
       background: #F2F2F2;
       margin-bottom: 27%;
       justify-content: center;
`
const TituloGuajo = styled.h1`
       font-family: Inter;
       font-style: normal;
       font-weight: 600;
       font-size: 20px;
       line-height: 24px;
       color: #0D0D0D;
       margin-bottom:8px;
`
const ContenedorDescripcion = styled.div`
      margin-bottom:10px;
      width:100%;
      margin-left: 19px;
`
const Descripcion = styled.p`
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 138.84%;
      letter-spacing: 0.02em;
      color: #0D0D0D;
      opacity: 0.5;
      `
// const Carga = styled(Spinner)`
//       display:block;
//       margin-left:auto;
//       margin-right:auto;
//       `

const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Guajolocombo = ({ modificarCantidad, traerArreglo }) => {

    const { active } = useSelector(state => state.products)

    const { bebidas } = useSelector(state => state.products)
    const { guajolotas } = useSelector(state => state.products)

    const [isChecked, setIsChecked] = useState(false)
    const [comboCheck, setComboCheck] = useState()

    const toggleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <ContenedorGuajo>
            {
                (active.id.includes("bebida"))
                    ?
                    <>
                        <ContenedorDescripcion>
                            <TituloGuajo>Guajolocombo</TituloGuajo>
                            <Descripcion>Selecciona la guajalota que más te guste y disfruta de tu desayuno.</Descripcion>
                        </ContenedorDescripcion>
                        <StyledRadioGroup >

                            {guajolotas.map(p => {
                                return (
                                    <CajaGuajo
                                        templateRows="repeat(2)"
                                        templateColumns="repeat(5)"
                                    >
                                        <GridImg colSpan={2} >
                                            <ImagenGuajo src={p.imagen} alt={p.nombre} border="0" />

                                        </GridImg>
                                        <GridCheck colSpan={2}>
                                            <button onClick={() => {
                                                setComboCheck(p)
                                                modificarCantidad("precio", p.precio)
                                                traerArreglo("comboProducto", p)
                                            }}>
                                                <CheckGuajo value={p.id} colorScheme="orange" name="guajolocombo" id={p.id} defaultChecked={isChecked} onChange={toggleChange}>
                                                </CheckGuajo>

                                            </button>
                                        </GridCheck>
                                        <GridText colSpan={4} >
                                            <GridP>{p.nombre}
                                            </GridP>
                                            <GridPP>+ ${p.precio} MSX</GridPP>
                                        </GridText>
                                    </CajaGuajo>
                                )
                            })}

                        </StyledRadioGroup>
                    </>
                    :
                    <>
                        <ContenedorDescripcion>
                            <TituloGuajo>Guajolocombo</TituloGuajo>
                            <Descripcion>Selecciona la bebida que más te guste y disfruta de tu desayuno.</Descripcion>
                        </ContenedorDescripcion>
                        <StyledRadioGroup >
                            {bebidas.map(p => {
                                return (
                                    <CajaGuajo
                                        templateRows="repeat(2)"
                                        templateColumns="repeat(5)">
                                        <GridImg colSpan={2}>
                                            <ImagenGuajo src={p.imagen} alt={p.nombre} border="0" />
                                        </GridImg>
                                        <GridCheck colSpan={2}>
                                            <button onClick={() => {
                                                setComboCheck(p)
                                                modificarCantidad("precio", p.precio)
                                                traerArreglo("comboProducto", p)
                                            }}>
                                                <CheckGuajo value={p.id} colorScheme="orange" name="guajolocombo" id={p.id} >
                                                </CheckGuajo>
                                            </button>
                                        </GridCheck>
                                        <GridText colSpan={4} >
                                            <GridP>{p.nombre}
                                            </GridP>
                                            <GridPP>+ ${p.precio} MSX</GridPP>
                                        </GridText>
                                    </CajaGuajo>
                                )
                            })}
                        </StyledRadioGroup>
                    </>
            }
        </ContenedorGuajo>
    )
}
export default Guajolocombo