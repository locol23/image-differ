import puppeteer from 'puppeteer'

export type Options = puppeteer.EmulateOptions

export const makeScreenshot = async (
  url: string,
  path: string,
  emulateOptions?: Options
) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  if (emulateOptions) {
    page.emulate(emulateOptions)
  }

  await page.goto(url)
  await page.screenshot({ path, fullPage: true })
  browser.close()
}
