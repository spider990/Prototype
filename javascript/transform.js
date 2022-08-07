anime({
    targets: '.box2',
    easing: 'easeInOutSine',
    translateX: '1100px',
    scale: 1.2,
    duration: 8000,
    loop: true,
    direction: 'alternate'
})

const hover = document.querySelector('#next')

const Onhover = function() {
    anime({
        targets: '#next',
        easing: 'easeInOutElastic',

        scale: 1.5
    })
}

const Outhover = function() {
    anime({
        targets: '#next',
        easing: 'easeInOutElastic',
        scale: 1
    })
}

hover.addEventListener('mouseover', Onhover);
hover.addEventListener('mouseout', Outhover);

const hover1 = document.querySelector('#prev')

const Onhover1 = function() {
    anime({
        targets: '#prev',
        easing: 'easeInOutElastic',
        
        scale: 1.5
    })
}

const Outhover1 = function() {
    anime({
        targets: '#prev',
        easing: 'easeInOutElastic',
        scale: 1
    })
}

hover1.addEventListener('mouseover', Onhover1),
hover1.addEventListener('mouseout', Outhover1)



anime({
    targets: '.box4',
    easing: 'easeInOutQuad',
    borderRadius: ['0%', '50%'],
    backgroundColor: 'white',
    rotate: '1turn',
    duration: 500,
    loop: true,
    direction: 'alternate'
});

anime({
    targets: '.col',
    easing: 'easeInOutSine',
    height: '300px',
    duration: 2000,
    loop: true,
    direction: 'alternate'
})


anime({
    targets: '.col2',
    easing: 'easeInOutSine',
    height: '300px',
    duration: 3000,
    loop: true,
    direction: 'alternate'
})


anime({
    targets: '.col3',
    easing: 'easeInOutSine',
    height: '300px',
    duration: 4000,
    loop: true,
    direction: 'alternate'
})



anime({
    targets: '.col4',
    easing: 'easeInOutSine',
    height: '300px',
    duration: 5000,
    loop: true,
    direction: 'alternate'
})


anime({
    targets: '.col5',
    easing: 'easeInOutSine',
    height: '300px',
    duration: 6000,
    loop: true,
    direction: 'alternate'
})

