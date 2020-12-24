// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
export default async function Index(req: NextApiRequest, res: NextApiResponse) {
    try {
        const searchIP =
            req.query.ip ||
            (await (await fetch('https://ip.nuk.workers.dev')).text())
        const resp = await fetch('https://qqwry.vercel.app/api?ip=' + searchIP)
        const json = await resp.json()
        res.json(json)
    } catch (error) {
        res.json({ errMsg: error.message })
    }
}
