// Global Variables 
const images__list = Array.from(document.querySelectorAll('.image__container img:last-child'));
const text__container = document.querySelectorAll('.text__container h6');
const text__box = document.querySelector('.text__container');
let loading__page__counter = document.querySelector('.loading__page span');
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
        text__container[i].style.opacity = '0'
})}
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
                })
                $('body').css({'overflow':'auto'})
            });
        })
    }
}, 200);
