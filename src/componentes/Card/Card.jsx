import React, { Fragment } from 'react'
import './Card.css'

export const Card = ({ title, description, image}) => {
    return (
       <Fragment>
           <div className='card'>
                <h1>{title}</h1>
                <img src={image} alt="" />
                <p>{description}</p>

                <button>Comprar</button>
           </div>
       </Fragment>
    )
}

export default Card