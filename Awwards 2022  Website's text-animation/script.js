document.querySelector('.left')
    .addEventListener('mousemove', function () {
        document.querySelector('.l-center').style.height = "50vh"
        document.querySelector('.l-center').style.opacity = "1"
        document.querySelector('#btn1').style.backgroundColor = "#111"
        document.querySelector('#btn1').style.color = "#fff"
        document.querySelector('#btn1').style.cursor = "pointer"
        document.querySelector('#one').style.opacity = "1"
        document.querySelector('#one').style.filter = "blur(0.5px)"
        document.querySelector('#two').style.opacity = "1"
        document.querySelector('#two').style.filter = "blur(1px)"
        document.querySelector('#three').style.opacity = "1"
        document.querySelector('#three').style.filter = "blur(15px)"
    })


document.querySelector('.left')
    .addEventListener('mouseleave', function () {
        document.querySelector('.l-center').style.height = "0vh"
        document.querySelector('.l-center').style.opacity = "0"
        document.querySelector('#btn1').style.backgroundColor = "initial"
        document.querySelector('#btn1').style.color = "initial"
        document.querySelector('#one').style.opacity = "0"
        document.querySelector('#one').style.filter = "blur(20px)"
        document.querySelector('#two').style.opacity = "0"
        document.querySelector('#two').style.filter = "blur(10px)"
        document.querySelector('#three').style.opacity = "0"
        document.querySelector('#three').style.filter = "blur(20px)"

    })

// ------------------------------------------------------------------------------

document.querySelector('.right')
    .addEventListener('mousemove', function () {
        document.querySelector('.r-center').style.height = "50vh"
        document.querySelector('.r-center').style.opacity = "1"
        document.querySelector('#btn2').style.backgroundColor = "#111"
        document.querySelector('#btn2').style.color = "#fff"
        document.querySelector('#btn2').style.cursor = "pointer"
        document.querySelector('#four').style.opacity = "1"
        document.querySelector('#four').style.filter = "blur(0.5px)"
        document.querySelector('#five').style.opacity = "1"
        document.querySelector('#five').style.filter = "blur(1px)"
        document.querySelector('#six').style.opacity = "1"
        document.querySelector('#six').style.filter = "blur(15px)"


    })


document.querySelector('.right')
    .addEventListener('mouseleave', function () {
        document.querySelector('.r-center').style.height = "0vh"
        document.querySelector('.r-center').style.opacity = "0"
        document.querySelector('#btn2').style.backgroundColor = "initial"
        document.querySelector('#btn2').style.color = "initial"
        document.querySelector('#four').style.opacity = "0"
        document.querySelector('#four').style.filter = "blur(20px)"
        document.querySelector('#five').style.opacity = "0"
        document.querySelector('#five').style.filter = "blur(10px)"
        document.querySelector('#six').style.opacity = "0"
        document.querySelector('#six').style.filter = "blur(20px)"
    })


// ------------------------------------------------


let tl = gsap.timeline();


tl.from('.logo', {
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger:1,

    scale: 0.2,
    y: -20,
})

tl.from('.left', {
    y: -5,
    delay:2,
    stagger:1,
    duration: 1,
    opacity: 0
})

tl.from('.center', {
    y: -5,
stagger:1,
    duration: 1,
    opacity: 0
})

tl.from('.right', {
    y: -5,
stagger:1,
    duration: 1,
    opacity: 0
})

tl.from('.navbar', {
    y: -5,
stagger:1,
    duration: 1,
    opacity: 0
})


