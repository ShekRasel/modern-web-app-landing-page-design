const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

function animation1(){
    gsap.from('.nav',{
        y:-50,
        delay:0.5,
        ease:Expo.easeInOut,
    })
    gsap.to('.boundElement',{
        y:0,
        delay:0.1,
        duration:2,
        ease: Expo.easeInOut,
        stagger: .2
    
    })
    gsap.from('.herofooter',{
        x:2000,
        delay:-1,
        duration:4,
        ease: Expo.easeInOut,
    })
}

function animation2(){
    window.addEventListener('mousemove',(details) =>{
        const mouseArea = document.querySelector('.mouse');
        mouseArea.style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
    })
}

function animation3(){
    document.querySelectorAll('.midHead')
    .forEach((element)=>{
        let rorate = 0;
        let diffrotate = 0;
        element.addEventListener('mousemove',(details)=>{
            // details.clientX , details.clientY;
            const difference = details.clientY - element.getBoundingClientRect().top;
             diffrotate = details.clientX - rorate;
              rorate = details.clientX;
            gsap.to(element.querySelector('img'),{
                opacity: 1,
                ease: Power1,
                top: difference,
                left: details.clientX,
                rotate: gsap.utils.clamp(-20,20 , diffrotate)
            })
        })
    })
}

function animation4(){
    document.querySelectorAll('.midHead')
    .forEach((element)=>{
        element.addEventListener('mouseleave',(details)=>{
            gsap.to(element.querySelector('img'),{
                opacity: 0,
                delay: 0.1
            })
        })
    })
}
    
animation1();
animation2();
animation3();
animation4();
