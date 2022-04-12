import React from 'react';

function DetailProduct({product}:IProps){
    return(
        <div>
            <div>
                heading 
            </div>
            <div>
                <article>
                    <p>{product.name}</p>
                </article>
            </div>
            <div>
                description
            </div>
        </div>
    )
}


interface IProps{
    product: TProduct
}

export { DetailProduct }