import { db } from '../node_models/db.js'

export const getUsers = (_, res) => {
  const q = 'SELECT * FROM usuarios'

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}