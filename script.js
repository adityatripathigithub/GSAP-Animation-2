// const tl = gsap.timeline()

// tl.from("nav h1",{
//     y:-70,
//     duration:1,
//     opacity:0
// })

// tl.from("#name h3",{
//     y:-50,
    
//     delay:0.9,
//     opacity:0,
//     stagger:0.2,
// })

// tl.to(".box1",{
//     y: -500, 
    
//     delay:0.9,
//     opacity:1,

// })

// tl.to(".box2",{
//     y: -400, 
//     delay:1.5,
//     opacity:1,

// })

// tl.from(".box3",{
//     y: -800, 
//     delay:1.5,
//     opacity:1,
// })

// tl.from(".box3 h1",{
//     y: 300, 
//     x: 300, 
//     left:"5",
   
//     delay:3,
//     opacity:0,
//     stagger:0.3,
// })



// ---------------------------------------------------------------------------------------------------------------------------------


gsap.from("nav h1",{
    y:-70,
    duration:1.5,
    opacity:0
})

gsap.from("#name h3",{
    y:-50,
    duration:1.5,
    delay:0.9,
    opacity:0,
    stagger:0.2,
})

gsap.to(".box1",{
    y: -500, 
    duration:1.8,
    delay:0.9,
    opacity:1,

})

gsap.to(".box2",{
    y: -400, 
    duration:1.8,
    delay:1.5,
    opacity:1,

})

var tl = gsap.timeline()


tl.from(".box3",{
    y: -800, 
    opacity:1,
    duration:0.5,
})

tl.from(".box3 h1",{
    y: 300, 
    x: 300, 
    left:"5",
    opacity:0,
    stagger:0.2,
})
tl.pause()
var munu = document.querySelector("#menu")

munu.addEventListener('click', ()=> {
    if (tl.progress() === 1) {
        tl.reverse();
    } else {
        tl.play();
        rotate = "360"
    }

})


// munu.addEventListener('click', ()=> {
//     tl.reverse()
// })


