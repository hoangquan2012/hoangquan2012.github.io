import React, { useState } from 'react';

function Main(props) {
    const [count, setCount] = useState(1)
    const total = props.price 
    console.log(total)
    function increase(){
        setCount(count + 1)
    }

    function reduce(){
        setCount(count - 1)
    }

    


    return (

        <tbody id={props.id}>
            <tr>
                <td>{props.order}</td>
                <td>
                    <img src={props.img} class="hinhdaidien" />
                </td>
                <td>{props.name}</td>
                <div className="soluong">
                    <button className="price" onClick={reduce}>-</button>
                    <td class="text-right">{count}</td>
                    <button className="price" onClick={increase}>+</button>
                </div>
                <td className="text-right">{props.price}</td>
                <td className="text-right">{props.price}</td>
                <td>
                    <button data-sp-ma="2" class="btn btn-danger btn-delete-sanpham" onClick={() => props.deleteProduct(props.id) }>
                        <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default Main;