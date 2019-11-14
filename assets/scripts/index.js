// 'use strict'
$(() => {
  // $('#navabout').onClick(window.scrollTo(0, 1000))
  window.onscroll = function () {
    myScrollFunction()
  }
  const navbar = document.getElementById('mattnavbar')
  const header = document.getElementById('mainheader')
  const leftNav = document.getElementById('navabout')
  const rightNav = document.getElementById('navskill')
  const sticky = navbar.offsetTop
  function myScrollFunction () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
      navbar.classList.remove('stickyfix')
      header.classList.add('headerPadding')

      leftNav.classList.remove('fullyRoundedLeft')
      leftNav.classList.add('halfRoundedLeft')
      rightNav.classList.remove('fullyRoundedRight')
      rightNav.classList.add('halfRoundedRight')
    } else {
      navbar.classList.remove('sticky')
      navbar.classList.add('stickyfix')
      header.classList.remove('headerPadding')

      leftNav.classList.add('fullyRoundedLeft')
      leftNav.classList.remove('halfRoundedLeft')
      rightNav.classList.add('fullyRoundedRight')
      rightNav.classList.remove('halfRoundedRight')
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
