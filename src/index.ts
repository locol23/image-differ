import pixelmatch from 'pixelmatch'
import fs from 'fs'
import { makeScreenshot, Options } from './make-screenshot'
import { decodePng } from './decode-png'

export const imageDiffer = async (urls: string[], options?: Options) => {
  if (!fs.existsSync('differ')) {
    fs.mkdirSync('differ')
  }

  if (!fs.existsSync('differ/expected')) {
    fs.mkdirSync('differ/expected')
    urls.forEach((url: string, index: number) => {
      makeScreenshot(url, `differ/expected/image${index}.png`, options)
    })
    return console.log('Success: Made expected images')
  } else {
    if (!fs.existsSync('differ/actual')) {
      fs.mkdirSync('differ/actual')
    }

    return await Promise.all(
      urls.map(async (url: string, index: number) => {
        const filename = `image${index}.png`
        await makeScreenshot(url, `differ/actual/${filename}`, options)

        const expected = await decodePng(`differ/expected/${filename}`)
        const actual = await decodePng(`differ/actual/${filename}`)
        const diffCount = pixelmatch(
          expected.data,
          actual.data,
          null,
          expected.width,
          expected.height,
          {
            threshold: 0.1,
            includeAA: false,
          }
        )
        return { url, filename, isSame: diffCount === 0 }
      })
    )
  }
}
