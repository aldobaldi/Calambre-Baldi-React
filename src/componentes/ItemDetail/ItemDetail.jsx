import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({key, title, image,description,price}) => {
    return (
        <>
        <div className='container'>
            <div className='imagen'>
                <figure>
                    <img src={image} alt="Foto del Producto" />
                </figure>
            </div>
            <div className='info'>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Id de Referencia {key}</span>
                <h2>Precio U$S {price}</h2>
                <button>Comprar</button>
            </div>
        </div>    
        </>
    )
}

export default ItemDetail
