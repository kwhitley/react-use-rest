'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _autoPromises = require('./auto-promises')

Object.keys(_autoPromises).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _autoPromises[key]
    },
  })
})

var _fetchAxios = require('./fetch-axios')

Object.keys(_fetchAxios).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchAxios[key]
    },
  })
})

var _fetchStore = require('./fetch-store')

Object.keys(_fetchStore).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchStore[key]
    },
  })
})

var _getPatch = require('./get-patch')

Object.keys(_getPatch).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getPatch[key]
    },
  })
})

var _objectFilter = require('./object-filter')

Object.keys(_objectFilter).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objectFilter[key]
    },
  })
})
