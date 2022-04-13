import { Welcome } from '@components/welcome';
import React, { useEffect, useState } from 'react';
import { Random } from '@components/Random'
import { useRouter } from 'next/router';
import { ListOfProducts } from '@components/ListOfProducts'


const fetchRandom = async() =>{
    let isYes = 'No'

    const random = Math.random() * (100 + 1);
    const result = Math.floor(random)
    
    if((result % 2) == 0){
        isYes = 'Yes'
    }

    return isYes
}

/** aunque este getServerSide no esta haciendo nada. sirve para traer el valor inicial del servidor */
// export const getServerSideProps = async() => {

//     const isYes = await fetchRandom()
//     return{
//         props:{
//             isYes
//         }
//     }
// }


export  const getStaticProps = async() => {
    const res = await fetch('https://store-avocado.vercel.app/api/v1/avo')
    const data = await res.json()
  
    return {
        props:{
            products: data
        }
    }
}

const Home = ({isYes, products}: IProps) =>{


    const router = useRouter()

    const [question, setQuestion] = useState<string|boolean>(false)
    const [Loading, setLoading] = useState<boolean>(true)

    const TimeOut = () => {
        setLoading(false)
        setTimeout(()=>{
            setLoading(true)
        },2000)
    }

    const handleQuery = () => {
        setQuestion(true)
        TimeOut()
    }

    useEffect(()=>{
        if(!Loading){
            fetchRandom()
            .then((data) => {
                setQuestion(data)
            })
        }
    },[question])


    const handleDetail = (id:TProductId) => {
        router.push(`/products/${id}`)
        return true
    }

    return(
        <>
            <Welcome/>
            <Random
                question={question}
                Loading={Loading}
                handleQuery={handleQuery} 
            />
            <ListOfProducts
                products={products}
                handleDetail={handleDetail}
            />
        </>
    )
}

interface IProps {
    isYes: string
    products: TProduct[]
}

export default Home