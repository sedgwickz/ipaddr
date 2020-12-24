import { NextApiRequest, NextApiResponse } from 'next'
import Index from '.'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    Index(req, res)
}
