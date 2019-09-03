// 'use strict'
$(() => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myScrollFunction()
  }

// Get the navbar
  // const navbar = $('#mattnavbar')

  const navbar = document.getElementById('mattnavbar')
  const subnavbar = document.getElementById('subnavbar')
// Get the offset position of the navbar
  const sticky = navbar.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myScrollFunction () {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
      subnavbar.classList.remove('stickyfix')
    } else {
      navbar.classList.remove('sticky')
      subnavbar.classList.add('stickyfix')
    }
  }
})
