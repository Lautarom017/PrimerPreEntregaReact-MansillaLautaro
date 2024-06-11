import { useState, useEffect } from 'react'

const ItemDetailContainer = ( idProduct ) => {
    const [product, setProduct] = useState ()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`)
            .then(res=> res.json())
            .then(json=> setProduct(json))
            .catch(e => console.error(e))
    }, [])

    return (
        <div>{product?.title}</div>
    )
}

export default ItemDetailContainer