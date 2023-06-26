const assert = require('assert')
const runLighthouse = require('./lighthouse')

describe('Accessibility', () => {
  it('should pass Google Lighthouse accessibility audit', async () => {
    const url = browser.getUrl('https://www.interfolio.com/')
    const lhr = await runLighthouse(url)

    assert(lhr.categories.accessibility.score === 1, 'Accessibility audit failed')
  })
})