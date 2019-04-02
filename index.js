import { TweenMax, Elastic } from 'gsap'

const item = document.querySelector('#item')

TweenMax.to(item, 0.75, {
  scale: 1.25,
  repeat: -1,
  yoyo: true,
  ease: Elastic.easeInOut
})
