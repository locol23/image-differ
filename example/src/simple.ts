import { imageDiffer } from '../../lib'

const urls = [
  'https://github.com',
  'https://www.google.com',
  'https://www.google.com',
]

imageDiffer(urls).then(v => console.log(v))
