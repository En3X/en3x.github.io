// Animation on scroll start
window.onload = e=>{
    AOS.init()
}
//  Preloader svg animation controller

anime.timeline({loop: false})
.add({
    targets: '#name-lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: (e,i)=>{return i*500}
})
// .add({
//     targets: '#name-lines path',
//     fill: "#14E956"
// })
.add({
    targets: ".preloader",
    translateY: [0, -window.innerHeight],
    opacity: {
        value: 0,
        delay: 1000
    }
})
.add({
    targets: '.landing #start',
    opacity: 1
}).add({
    targets: '#developer',
    translateX: [70,0]
}).add({
    targets: '#learner',
    color: '#E6972F',
    translateY: [70,0]
})




// .add({
//     targets: '.preloader #name-lines',
//     scale: 3,
//     opacity: 0,
//     duration: 2000,
// })



