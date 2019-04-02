import { TweenMax } from 'gsap'

TweenMax.set('#box', {
  backgroundColor: 'green',
  width: '50px',
  height: '50px',
  x: '50px',
  y: '50px'
})

document.addEventListener('click', event => {
  const { clientX, clientY } = event

  TweenMax.to('#box', .5, {
    rotation: '+=30'
  })
})
