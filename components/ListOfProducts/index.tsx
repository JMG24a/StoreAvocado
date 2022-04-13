import React from 'react';
import { Container, Grid, CardDescription, Price, Sku} from './styles'

function ListOfProducts({products, handleDetail}:IProps){
    return (
        <Grid>
            {Object.keys(products).map((item:TProductId) => (
                <Container 
                    key={item}
                    onClick={() => handleDetail(item)}
                >
                    <div>
                        <p>{products[item as any].image}</p>
                    </div>
                    
                    <CardDescription>
                        <Price>{`Price: ${products[item as any].price}`}</Price>
                        <Sku>{`${products[item as any].name}`}</Sku>
                    </CardDescription>
                </Container>
            ))}
        </Grid>
    )
}

interface IProps{
    products: TProduct[],
    handleDetail: (id: TProductId)=>{} 
}

export { ListOfProducts }