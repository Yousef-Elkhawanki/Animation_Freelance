// Global Variables 
const images__list = Array.from(document.querySelectorAll('.image__container img:last-child'));
const image__container = Array.from(document.querySelectorAll('.image__container'));
const text__container = document.querySelectorAll('.text__container h6');
const text__box = document.querySelector('.text__container');
let loading__page__counter = document.querySelector('.loading__page span');
const animation__page = document.querySelector('.animation__page')
let counter = 0
let textContent ;
// stop hover event on text 
text__box.style.pointerEvents = "none"; 


// Event when Move In Or Out All Pictures 
for (let i = 0; i < images__list.length; i++) {
    
    images__list[i].addEventListener('mouseenter' ,(e)=>{
        $('.welcome__message').animate ({opacity :'0'} , 500)
        $('.welcome__message').remove ()
        for (let i = 0; i < images__list.length; i++) {
            images__list[i].classList.remove('active')
            
        }
        textContent = e.target.getAttribute ('alt');
        if (images__list[i].getAttribute('alt') == text__container[i].textContent){
            text__container[i].style.opacity = '1'
        }
    });
        // when Out Images 
    images__list[i].addEventListener('mouseleave' ,(e)=>{
        text__container[i].style.opacity = '0';
});
}
for (let i = 0; i < image__container.length; i++) {
    $(image__container[i]).click((e)=>{
        let imgeSrc = $(e.target).attr('src')
        let textContent = e.target.getAttribute('alt')
        $('.animation__text h1').html(textContent)
        $('.animation__text h').html(textContent)
        $('.hero__banner').fadeOut(1000 )
        $('.animation__page').css({'backgroundImage':`url(${imgeSrc})`})
        
        $('.animation__page').fadeIn(200 ,()=>{
            $('.animation__page').animate({width:`100%`} ,500 ,()=>{
                $('.animation__text h1').show(1000 ,()=>{
                    $('.animation__text h2').show(1000 , ()=>{
                        $('.animation__text p').fadeIn(1000)
                    })
                })
            })
        })
    })
    
}

$('.backIcon').click(()=>{
    location.reload();
})

document.addEventListener('mousemove',(e)=>{
    for (let i = 0; i < images__list.length; i++) {
        if (e.clientX <160 || e.clientX >1400 ){
            images__list[i].classList.add('active')
        }
        else if (e.clientY <171 || e.clientY >604 ){
            images__list[i].classList.add('active')
        }
    }
})
// counter Function 
let counter_Interval = setInterval( function(){
    loading__page__counter.textContent = counter+=10
    if (counter == 100){
        clearInterval(counter_Interval)
        $(document).ready(()=>{
            $('.loading__container').fadeOut(1000 , ()=>{
                $('.loading__page').slideUp(1000 , ()=>{
                        $('.loading__page').remove()
                    $('.hero__banner').animate ({top:'0rem'} ,1000)
                    $('.welcome__message').fadeIn ( 2500)
                })
                $('body').css({'overflow':'auto'})
            });
        })
    }
}, 200);

