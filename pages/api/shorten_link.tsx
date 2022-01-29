// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {


  if (req.body.length > 0) {
    res.statusCode = 201;
    return res.json({ short_link: 'hello'});
  }

  res.statusCode = 409;
  res.json({ error: 'no_link_found', error_description: 'No link found.'})

  res.status(200).json({ name: "John Doe" });
}
