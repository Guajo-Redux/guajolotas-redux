import { useState } from 'react'

const useCounter = (inicial) => {
    
    let [state, setstate] = useState(inicial) 

    const incremento =()=>{
        setstate(state + 1)
    }

    const decremento =()=>{
        if (state === 0){
             state = 0;
        } else {
            setstate(state - 1)
        }
    }

    return{
        state,
        incremento,
        decremento,
    }
}

export default useCounter
