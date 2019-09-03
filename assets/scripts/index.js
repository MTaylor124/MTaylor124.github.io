// 'use strict'
$(() => {
  // $('#navabout').onClick(window.scrollTo(0, 1000))
  window.onscroll = function () {
    myScrollFunction()
  }
  const navbar = document.getElementById('mattnavbar')
  // const subnavbar = document.getElementById('about')
  const sticky = navbar.offsetTop
  function myScrollFunction () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
      navbar.classList.remove('stickyfix')
      $('.superlazyfix').html('<br/><br/><br/>')
    } else {
      navbar.classList.remove('sticky')
      navbar.classList.add('stickyfix')
      $('.superlazyfix').html('')
    }
  }

  $("a[href^='#']").click(function (e) {
    e.preventDefault()

    const position = $($(this).attr('href')).offset().top

    $('body, html').animate({
      scrollTop: position
    })
  })
})
