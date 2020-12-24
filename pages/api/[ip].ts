import { NextApiRequest, NextApiResponse } from 'next'
import Index from '.'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('hello')
    Index(req, res)
    // try {
    //     res.statusCode = 200
    //     const resp = await fetch(
    //         'http://qqwry.vercel.app/api?ip=' + req.query.ip
    //     )
    //     const json = await resp.json()
    //     res.json(json)
    // } catch (error) {
    //     console.log(error.message)
    // }
}
