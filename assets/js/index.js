// Global Variables 
const images__list = document.querySelectorAll('.image__container img');
const text__container = document.querySelector('.text__container h6');
const text__box = document.querySelector('.text__container');
let loading__page__counter = document.querySelector('.loading__page span');
let counter = 0
// stop hover event on text 
text__box.style.pointerEvents = "none"; 


// Event when Move In Or Out All Pictures 
for (let i = 0; i < images__list.length; i++) {
    images__list[i].addEventListener('mouseenter' ,(e)=>{
        let textContent = e.target.getAttribute ('alt');
        text__container.textContent = textContent
        text__container.style.opacity = `1`
    });
    images__list[i].addEventListener('mouseleave' ,(e)=>{
        console.log('leave');
        let textContent = e.target.getAttribute ('alt');
        text__container.textContent = ''
    });
};




// counter Function 
let counter_Interval = setInterval( function(){
    loading__page__counter.textContent = counter+=10
    if (counter == 100){
        clearInterval(counter_Interval)
        $(document).ready(()=>{
            $('.loading__container').fadeOut(1000 , ()=>{
                $('.loading__page').slideUp(1000 , ()=>{
                    $('.welcome__message').fadeOut(2000 ,()=>{
                        $('.welcome__message').remove()
                        $('.loading__page').remove()
                    })
                    $('.hero__banner').animate ({top:'0rem'} )
                    
                })
            });
        })
    }
}, 200);



