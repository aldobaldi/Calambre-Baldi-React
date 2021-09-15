import React, { Fragment } from 'react'
import './Card.css'

export const Card = ({ title, description, image, comprar, price }) => {
    return (
       <Fragment>
           <div className='card'>
                <h1>Bombacha</h1>
                <img src="https://http2.mlstatic.com/D_NQ_NP_845958-MLA43784314242_102020-W.jpg" alt="Bombacha de vieja" />
                <p>Esto es un a bombacha para un a vieja</p>
                <button>Comprar</button>
           </div>
       </Fragment>
    )
}

export default Card