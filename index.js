import { TweenMax, TimelineMax } from 'gsap'

document.addEventListener('mousemove', event => {
  TweenMax.set(document.body, { perspective: event.x })
})

// Array.from({ length: 30 })
//   .map(() => document.createElement('div'))
//   .forEach(box => {
//     box.setAttribute('class', 'box')
//     document.body.appendChild(box)
//
//     TweenMax.set(box, { transformPerspective: 200 })
//
//     box.addEventListener('click', () => {
//       if (!TweenMax.isTweening(box)) {
//         TweenMax.to(box, 1, { rotationY: '+=180'})
//       }
//
//     })
//   })

Array.from({ length: 30 })
  .map(() => document.createElement('div'))
  .forEach(box => {
    box.setAttribute('class', 'box')
    document.body.appendChild(box)

    TweenMax.set(box, { rotationY: '30' })
  })
