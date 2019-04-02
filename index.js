import { TweenMax, TimelineMax } from 'gsap'

const box = document.createElement("div")
box.setAttribute('class', 'box')
document.body.appendChild(box)

TweenMax.set(box, { transformPerspective: 200 })

box.addEventListener('click', () => {
  TweenMax.to(box, 1, { rotationY: '+=180'})
  // TweenMax.to(box, 1, { rotationX: '+=180'})
  // TweenMax.to(box, 1, { rotationZ: '+=180'})
})
