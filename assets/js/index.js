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
    // when Enter Images 
    images__list[i].addEventListener('mouseenter' ,(e)=>{
        let textContent = e.target.getAttribute ('alt');
        if (textContent == $('.text__container h6')[0].textContent){
            console.log($('.text__container h6:nth-child(1)'));
            $('.text__container h6:nth-child(1)').css({opacity:'1' , transform:'translate(-50% , -50%)'})
        }
        else if (textContent == $('.text__container h6')[1].textContent){
            $('.text__container h6:nth-child(2)').css({opacity:'1' , transform:'translate(-50% , -50%)'})
        }
        else if (textContent == $('.text__container h6')[2].textContent){
            $('.text__container h6:nth-child(3)').css({opacity:'1' , transform:'translate(-50% , -50%)'})
        }
        else if (textContent == $('.text__container h6')[3].textContent){
            $('.text__container h6:nth-child(4)').css({opacity:'1' , transform:'translate(-50% , -50%)'})
        }
        else if (textContent == $('.text__container h6')[4].textContent){
            $('.text__container h6:nth-child(5)').css({opacity:'1' , transform:'translate(-50% , -50%)'})
        }
    });
    
        // when Out Images 
    images__list[i].addEventListener('mouseleave' ,(e)=>{
        let textContent = e.target.getAttribute ('alt');
        if (textContent == $('.text__container h6')[0].textContent){
            console.log($('.text__container h6:nth-child(1)'));
            $('.text__container h6:nth-child(1)').css({opacity:'0', transform:'translate(-50% , 0%)'})
        }
        else if (textContent == $('.text__container h6')[1].textContent){
            $('.text__container h6:nth-child(2)').css({opacity:'0', transform:'translate(-50% , 0%)'})
        }
        else if (textContent == $('.text__container h6')[2].textContent){
            $('.text__container h6:nth-child(3)').css({opacity:'0', transform:'translate(-50% , 0%)'})
        }
        else if (textContent == $('.text__container h6')[3].textContent){
            $('.text__container h6:nth-child(4)').css({opacity:'0', transform:'translate(-50% , 0%)'})
        }
        else if (textContent == $('.text__container h6')[4].textContent){
            $('.text__container h6:nth-child(5)').css({opacity:'0', transform:'translate(-50% , 0%)'})
        }
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
                $('body').css({'overflow':'auto'})
            });
        })
    }
}, 200);
