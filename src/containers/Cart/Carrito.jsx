import React from 'react'
import { useSelector } from 'react-redux'
import HeaderCarrito from '../../components/carrito/HeaderCarrito'
import CarritoOpacityA from '../../components/carrito/CarritoOpacityA'
import CarritoOpacityM from '../../components/carrito/CarritoOpacityM'


const Carrito = () => {

    const { cart } = useSelector(state => state.cart)

    return (
        <div style={{ fontFamily: 'Inter', position: 'absolute', width: '100%', backgroundColor: '#f2f2f2' }}>
            <HeaderCarrito />
            {
                (cart.length < 1)
                    ?
                    <>
                        <CarritoOpacityM />
                    </>
                    :
                    <>
                        <CarritoOpacityA />
                    </>
            }

        </div>
    )
}

export default Carrito