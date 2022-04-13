import React from 'react';
import { Section, Paragraph, Button } from '../../css/pages/home'

function Random({Loading, question, handleQuery}: IProps){
    return(
        <Section>
        <Button
            onClick={handleQuery}
        >
            Check
        </Button>

        <>
            {Loading ?
                <Paragraph> 
                    {question}
                </Paragraph>
                :
                <Paragraph>loading...</Paragraph>
            }
        </>
    </Section>
    )
}

interface IProps{
    Loading: boolean,
    question: string|boolean,
    handleQuery: VoidFunction
}

export { Random }