import { NextApiRequest, NextApiResponse } from "next";
import data from '../../../../db/data'

const allAvo = (request: NextApiRequest, response: NextApiResponse) => {
    response.json(data)
}


export default allAvo