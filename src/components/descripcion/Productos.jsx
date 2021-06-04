import React from 'react';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components';
import '../../styles/Styles.css'

const ImagenCarousel = styled.img`
         display:block;
         margin-right:auto;
         margin-left:auto;
         width: 200px;
         height: 200px;
`
const Descripcion = styled.h3`
     color:black;
     font-family: Inter;
     font-style: normal;
     font-weight: 600;
     font-size: 28px;
     line-height: 34px;
     text-align: center;
     margin-top:25px;
`

const Precio = styled.p`
     font-family: Inter;
     font-style: normal;
     font-weight: 600;
     font-size: 22px;
     line-height: 27px;
     text-align: center;
     color: #FA4A0C;
`


const Productos = (props) => {

  let posicion = parseInt((props.especifico.id[props.especifico.id.length - 1]))

  return (
    <div>
      <Carousel interval={null} activeIndex={posicion}>
        {
          props.productos.map(guajolotas => {
            return (
              <Carousel.Item key={guajolotas.sabor.nombreSabor} className={guajolotas.id} id={guajolotas.id}>
                <ImagenCarousel src={guajolotas.imagen} alt={guajolotas.nombre} border="0" />
                <Descripcion>{guajolotas.nombre}</Descripcion>
                <Precio>${guajolotas.precio} MXN</Precio>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Productos
