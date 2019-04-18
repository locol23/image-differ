import { imageDiffer } from '../../lib'

const urls = [
  'https://github.com',
  'https://www.google.com',
  'https://www.google.com',
]

const options = {
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
  viewport: {
    width: 1024,
    height: 820,
    isMobile: false,
  },
}

imageDiffer(urls, options).then(v => console.log(v))
