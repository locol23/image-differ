import fs from 'fs'
import { PNG } from 'pngjs'

export const decodePng = (filename: string): Promise<PNG> =>
  new Promise((resolve, reject) => {
    const data = fs.createReadStream(filename).pipe(new PNG())
    data.on('parsed', () => resolve(data)).on('error', err => reject(err))
  })
