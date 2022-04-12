import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ListOfProducts } from '@components/ListOfProducts'

function Products(){

    const router = useRouter()

    const [products, setProducts] = useState<TProduct[]>([])

    useEffect(()=>{
        window.fetch('/api/v1/avo')
            .then((response )=> response.json())
            .then((data)=> {
                setProducts(data)
            })
    },[])

    const handleDetail = (id:TProductId) => {
        router.push(`/products/${id}`)
        return true
    }

    return(
        <div>
            <ListOfProducts
                products={products}
                handleDetail={handleDetail}
            />
        </div>
    )
}

export default Products