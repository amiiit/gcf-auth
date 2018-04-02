import {parse} from 'url'
import { getUser } from './user'

export const isUserAvailable = async (req, res) => {
  const params = parse(req.url, true).query

  const user = await getUser({
    email: params.email as string,
    username: params.username as string
  })

  res.send({
    exists: !!user
  });

  return true
}