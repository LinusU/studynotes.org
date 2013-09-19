var config = require('../config')
var express = require('express')
var path = require('path')
var randomquote = require('../randomquote')
var util = require('../util')

module.exports = function () {
  /*
   * Adds variables that all templates will expect.
   */
  var render = app.render
  app.render = function (view, opts, fn) {
    // Set default template local variables
    opts.cls || (opts.cls = '')
    opts.randomquote || (opts.randomquote = randomquote())
    opts.searchTerm || (opts.searchTerm = '')

    if (opts.url) {
      // Make URL absolute
      opts.url = config.siteOrigin + opts.url

      // Force trailing slashes in URL
      if (opts.url[opts.url.length - 1] !== '/') {
        opts.url += '/'
      }
    }

    // If rendering a course-related view
    if (opts.course) {
      opts.hero = {
        desc: 'Class Notes, Test Prep, Review Materials, and More',
        tabs: opts.course.notetypes,
        title: opts.course.name,
        url: opts.course.url
      }
      opts.heroImage = opts.course.heroImage
    }
    // If rendering a college-related view
    else if (opts.college) {
      opts.hero = {
        title: opts.college.shortName + ' Admissions Essays',
        desc: 'Top essays from students who got accepted at ' + opts.college.name,
        url: opts.college.url
      }
      opts.heroImage = opts.college.heroImage
    }
    // If rendering any other type of view and heroImage is missing
    else if (!opts.heroImage) {
      opts.heroImage = view + '.jpg'
    }

    // Add view name as class on <body>
    opts.cls += ' ' + view

    // If no hero is on the page, set a special class on <body>
    if (!opts.hero) {
      opts.cls += ' solidHeader'
    }

    // Call the original express render function
    return render.call(this, view, opts, fn)
  }

  require('./home')()
  require('./study-guides')()

  // Static
  require('./about')()
  require('./contact')()
  require('./plagiarism')()
  require('./privacy')()
  require('./photo-credits')()
  require('./open-source')()

  // Accounts
  require('./signup')()
  require('./login')()

  // Submit
  require('./submit')()

  // Search
  require('./search')()
  require('./autocomplete')()

  // Dynamic
  require('./course')()
  require('./notetype')()
  require('./note')()
  require('./college')()
  require('./essay')()
  require('./user')()

  // Error pages
  require('./error')()
}