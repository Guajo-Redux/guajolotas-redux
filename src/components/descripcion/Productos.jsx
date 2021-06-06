import React from 'react';
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import '../../styles/Styles.css'

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


const Productos = () => {

  const { products } = useSelector(state => state.products)
  const { active } = useSelector(state => state.products)
  let posicion = parseInt((active.id[active.id.length - 1]))
  return (
    <div>
      <Carousel interval={null} activeIndex={posicion}>
        {
          products.map(producto => {
            return (
              <Carousel.Item key={producto.nombreSabor} className={producto.id} id={producto.id}>
                <ImagenCarousel src={producto.imagen} alt={producto.nombre} border="0" />
                <Descripcion>{producto.nombre}</Descripcion>
                <Precio>${producto.precio} MXN</Precio>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Productos
