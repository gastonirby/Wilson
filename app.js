let mm = gsap.matchMedia()

window.addEventListener('load', loader)

function loader () {
  const TLLOAD = gsap.timeline({
    default: {
      ease: 'power2'
    }
  })
}

  gsap.from('.title', {
    autoAlpha: 0,
    y: -500,
    duration: 3.5,
    ease: 'power4'
  })

  gsap.from('.navbar', {
    autoAlpha: 0,
    y: -100,
    duration: 2,
    delay: 4,
    ease: 'elastic'
  })

  gsap.from('.headInfo', {
    autoAlpha: 0,
    duration: 3,
    delay: 4,
    ease: 'power2'
  })

  gsap.from('.quote', {
    autoAlpha: 0,
    duration: 2,
    y: -100,
    delay: 6,
    ease: 'power4'
  })
  

  gsap.from('.reviews', {
    autoAlpha: 0,
    y: 200,
    scale: 1,
    scrollTrigger: {
      trigger: '.reviews',
      start: 'top 85%',
      end: 'bottom 90%',
      scrub: 2,
    //   markers: true
    }
  })
