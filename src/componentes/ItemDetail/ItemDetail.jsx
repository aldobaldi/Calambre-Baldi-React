import React from 'react'

const ItemDetail = ({key, title, image,description,price}) => {
    return (
        <>
            <div>
                <figure>
                    <img src={image} alt="Foto del Producto" />
                </figure>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Id de Referencia {key}</span>
                <h2>Precio U$S {price}</h2>
            </div>
        </>
    )
}

export default ItemDetail
