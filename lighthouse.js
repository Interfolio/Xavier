require('dotenv').config()
const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

async function runLighthouse(url) {
  const headless = process.env.HEADLESS === 'true'
  const chrome = await chromeLauncher.launch({ chromeFlags: headless ? ['--headless'] : [] })

  const options = {
    logLevel: 'info',
    output: 'html',
    port: chrome.port,
    /*
    // By default, all Lighthouse WCAG 2.1 audits will be run
    // Uncomment the fields below if you decide you want to
    // configure which specific audits you want to run
    accessibility: {
      auditRefs: [
        { id: 'color-contrast', weight: 3 },
        { id: 'image-alt', weight: 10 },
      ],
    },*/
  }

  const runnerResult = await lighthouse(url, options)

  await chrome.kill()
  return runnerResult.lhr
}

module.exports = runLighthouse