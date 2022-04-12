import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'
import { DetailProduct } from '@components/DetailProducts'
import { GetStaticProps} from 'next'


export const getStaticPaths = async() =>{

    const res = await fetch(`https://store-avocado.vercel.app/api/v1/avo`)
    const data = await res.json()
    const paths = Object.keys(data).map((item) => ({params: {id: item}}))

    // Asi se debe ver el paths
    // paths [
    //     { params: { id: '2zd33b8c' } },
    //     { params: { id: '6trfgkkj' } },
    //     { params: { id: '7bcr49em' } },
    //     { params: { id: '098323ks' } },
    //     { params: { id: 'b8uthe2y' } },
    //     { params: { id: 'ewxsd6xb' } },
    //     { params: { id: 'fpr72m9k' } },
    //     { params: { id: 't9dv25gs' } },
    //     { params: { id: 't345w48y' } }
    //   ]

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async(context) => {

    const id = context.params?.id as string

    const res = await fetch(`https://store-avocado.vercel.app/api/v1/avo/${id}`)

    const {body} = await res.json()

    const product:TProduct = body

    return{
        props:{
            product
        }
    }
} 


function Product({product}:IProps){
    // const router = useRouter()
    // const {id} = router.query

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

interface IProps{
    product: TProduct
}


export default Product 