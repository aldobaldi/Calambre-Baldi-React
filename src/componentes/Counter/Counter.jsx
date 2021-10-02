import * as  React from 'react'
import './Counter.css'
import ClickCounter from '../../componentes/ClickCounter/ClickCounter'  

const Counter = () => {

    const [cantidad,setCantidad]=React.useState(1);

    const Aumentar = () => {
        setCantidad((prevState) => prevState + 1);
        if (cantidad === 10){
            setCantidad((prevState)=>prevState = 10)
        }
      }

      const Disminuir =()=>{
          
          setCantidad((prevState)=>prevState -1);
          if (cantidad===1){
              setCantidad((prevState)=>prevState = 1);
          }
      }
      
    return (
        <>
            <div className='counter'>
                <h1>Contador</h1>
                <button onClick ={Disminuir}>-</button>
                    <ClickCounter cantidad = {cantidad}/>
                <button onClick ={Aumentar}>+</button>
            </div>
        </>
    )
}

export default Counter
