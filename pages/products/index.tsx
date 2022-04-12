import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ListOfProducts } from '@components/ListOfProducts'

export  const getStaticProps = async() => {
    const res = await fetch('https://store-avocado.vercel.app/api/v1/avo')
    const data = await res.json()
  
    return {
        props:{
            products: data
        }
    }
}

function Products({products}:IProps){

    const router = useRouter()

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

interface IProps{
    products: TProduct[]
}


export default Products