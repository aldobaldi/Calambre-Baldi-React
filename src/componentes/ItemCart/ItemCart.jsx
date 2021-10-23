import React from 'react'
import { useCart } from '../../Context/CartContext'

const ItemCart = ({item, quantity,remove}) => {

    return ( 
        <tr className='ItemCart'>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{quantity}</td>
            <td><button onClick={remove}>x</button></td>
        </tr>
    )
}

export default ItemCart
 