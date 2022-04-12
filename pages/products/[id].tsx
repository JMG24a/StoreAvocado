import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { DetailProduct } from '@components/DetailProducts'

function Product(){
    const router = useRouter()
    const {id} = router.query

    const [product, setProduct] = useState<TProduct>()

    useEffect(()=>{
        window.fetch(`/api/v1/avo/${id}`)
            .then((response)=> response.json())
            .then(({body})=> setProduct(body))
    },[id])


    return(
        <>
            {product?.name ? 
                <DetailProduct
                    product={product}
                />
                :
                <>
                    Loading...
                </>
            }
        </>
    )
}

export default Product 