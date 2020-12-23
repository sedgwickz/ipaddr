// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  try {
    res.statusCode = 200;
    const resp = await fetch("http://qqwry.vercel.app/api?ip=" + req.query.ip);
    const json = await resp.json();
    res.json(json);
  } catch (error) {
    console.log(error.message);
  }
};
