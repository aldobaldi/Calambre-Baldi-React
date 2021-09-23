import React, { Fragment } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export const Card = ({ id,title, description, image}) => {
    return (
       <Fragment>
           <div className='card'>
                <h1>{title}</h1>
                <img src={image} alt="" />
                <p>{description}</p>
                <Link to ={`/Producto/${id}`}><button>Ver</button></Link>
           </div>
       </Fragment>
    )
} 
export default Card