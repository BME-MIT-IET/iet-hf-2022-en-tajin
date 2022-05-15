const assert = require('assert')
const { Given, When, Then, Before } = require('@cucumber/cucumber')
const Url = require('../url.js');

Given('an url {string}', (url) => this.url = new Url(url))

When('I ask for the numbers of parameters', () => this.paramCount = this.url.queryLength())
Then('It will be {string}', (num) => assert.strictEqual(this.paramCount, parseInt(num)))

When(' Ask if the url has parameters', () => this.hasParam = this.url.isEmptyQuery() ? "No" : "Yes" )
Then('Then the answer will be {string}', (answer) => assert.strictEqual(this.hasParam, answer) )

When('change the path of url to {string}', (pathString) => {
    let inPaths = pathString.split(', ')
    this.url.paths(inPaths)
})
Then('the url will be {string}', (parameter) => assert.strictEqual(this.url.toString(), parameter))
