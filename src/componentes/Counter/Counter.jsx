import * as  React from 'react'
import './Counter.css'

const Counter = ({aumentar,disminuir }) => {

    return (
        <>
            <div className='counter'>
                <button onClick ={disminuir}>-</button>
                <button onClick ={aumentar}>+</button>
            </div>
        </>
    )
}
export default Counter
