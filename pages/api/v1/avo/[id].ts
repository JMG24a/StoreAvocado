import { NextApiRequest, NextApiResponse } from "next";
import data from '../../../../db/data'

const allAvo = (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query.id

    const success = data[id as string]

    if(!success){
        response.end(JSON.stringify({"error":"Not Fount"}))
    }
    response.status(200).json({"body":success})
}


export default allAvo