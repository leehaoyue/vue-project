'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  crossDomain: '"http://127.0.0.1"',
  API: '"/crossDomain"',
  socketAPI: '"http://127.0.0.1:3000/"'
})
