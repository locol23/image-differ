# image-differ

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Node.js libraty for comparing 2 PNG-images without native libs.

## Usage

```javascript
import { imageDiffer } from 'image-differ'

const urls = [
  'https://github.com',
  'https://www.google.com',
]

imageDiffer(urls).then(resultDiffObj => {
  // do something
})
```

## Response
```javascript
[
  { url: 'https://github.com',
    filename: 'image0.png',
    isSame: true
  },
  { url: 'https://www.google.com',
    filename: 'image1.png',
    isSame: false
  }
]
```

- url <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>
- filename <[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)>
- isSame <[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)>

## Options

You can use [puppeteer's Option](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulateoptions).

```javascript
{
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
  viewport: {
    width: 1024,
    height: 820,
    isMobile: false,
  },
}
```

## Run example
```sh
git clone https://github.com/locol23/image-differ.git
cd image-differ
yarn
yarn build
yarn example // Make expected images
yarn example // Make acrual images
```
