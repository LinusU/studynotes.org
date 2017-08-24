module.exports = function (app) {
  app.get('/about', function (req, res) {
    res.render('about', {
      url: '/about',
      title: 'About',
      hero: {
        title: 'Study Notes',
        desc: 'Helping students learn faster and better',
        image: 'chalkboard.jpg'
      }
    })
  })

  app.get('/advertise', function (req, res) {
    res.render('advertise', {
      url: '/advertise',
      title: 'Advertise',
      hero: {
        title: 'Advertise on Study Notes',
        desc: 'Reach millions of engaged and passionate students',
        image: 'diversity.jpg'
      }
    })
  })

  app.get('/anon', function (req, res) {
    res.render('anon', {
      url: '/anon',
      title: 'Anonymity',
      hero: {
        title: 'Anonymity',
        desc: 'Some content on Study Notes is anonymous'
      }
    })
  })

  app.get('/contact', function (req, res) {
    res.render('contact', {
      url: '/contact',
      title: 'Contact Us',
      hero: {
        title: 'Contact Us',
        desc: 'We\'d love to hear from you!',
        image: 'books.jpg'
      }
    })
  })

  app.get('/open-source', function (req, res) {
    res.render('open-source', {
      url: '/open-source',
      title: 'Open Source',
      hero: {
        title: 'Powered by Open Source',
        desc: 'Free and open, the way all software should be.'
      }
    })
  })

  app.get('/photo-credits', function (req, res) {
    res.render('photo-credits', {
      url: '/photo-credits',
      title: 'Photo Credits',
      hero: {
        title: 'Photo Credits',
        image: 'european-history.jpg'
      }
    })
  })

  app.get('/plagiarism', function (req, res) {
    res.render('plagiarism', {
      url: '/plagiarism',
      title: 'Our Stance on Plagiarism',
      hero: {
        title: 'Our Stance on Plagiarism',
        image: 'books.jpg'
      }
    })
  })

  app.get('/privacy', function (req, res) {
    res.render('privacy', {
      url: '/privacy',
      title: 'Privacy Policy',
      hero: {
        title: 'Privacy Policy',
        image: 'books.jpg'
      }
    })
  })

  app.get('/stats', function (req, res) {
    res.render('stats', {
      url: '/stats',
      title: 'Live Study Stats',
      hero: {
        title: 'Live Study Stats',
        image: 'books.jpg'
      }
    })
  })

  app.get('/testimonials', function (req, res) {
    res.render('testimonials', {
      url: '/testimonials',
      title: 'Testimonials',
      hero: {
        title: 'What Our Users Say',
        desc: 'Real testimonials from real users',
        image: 'students.jpg'
      }
    })
  })

  app.get('/terms', function (req, res) {
    res.render('terms', {
      url: '/terms',
      title: 'Terms and Conditions',
      hero: {
        title: 'Terms and Conditions',
        image: 'books.jpg'
      }
    })
  })
}
