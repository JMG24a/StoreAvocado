import React from 'react';
import { Container } from './styles'

function ListOfProducts({products, handleDetail}:IProps){
    return (
        <>
            {Object.keys(products).map((item:TProductId) => (
                <Container 
                    key={item}
                    onClick={() => handleDetail(item)}
                >
                    <div>
                        <p>{products[item as any].name}</p>
                    </div>

                    <div>
                        <p>{products[item as any].image}</p>
                    </div>
                    
                    <div>
                        <p>{products[item as any].price}</p>
                    </div>
                </Container>
            ))}
        </>
    )
}

interface IProps{
    products: TProduct[],
    handleDetail: (id: TProductId)=>{} 
}

export { ListOfProducts }