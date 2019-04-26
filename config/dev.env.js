'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH: '"http://localhost:3000"'
  // APIPATH: '"https://vue-course-api.hexschool.io"'
  // CUSTOMPATH: '"expectkoo"'
})
