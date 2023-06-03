// Global Variables 
const images__list = document.querySelectorAll('.image__container img');
let manageAfterText = document.createElement("style");
let loading__page__counter = document.querySelector('.loading__page span');
let counter = 0


// Event when Move In Or Out All Pictures 
for (let i = 0; i < images__list.length; i++) {
    images__list[i].addEventListener('mouseenter' ,(e)=>{
        let textContent = e.target.getAttribute ('alt')
        let manageAfterText = document.createElement("style");
manageAfterText.innerHTML =
` .text__container::after {
    content: "";
    width: 100%;
    height: 100%;
    text-transform: capitalize;
    position: absolute;
    z-index: 6;
    opacity: 1;
    transition: 0.5s;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }`;
        document.head.appendChild(manageAfterText);
        manageAfterText.innerHTML = manageAfterText.innerHTML.replace('content: ""', `content:"${textContent}"`)
    });
    images__list[i].addEventListener('mouseleave' ,(e)=>{
        console.log('leave');
        let textContent = e.target.getAttribute ('alt')
        let manageAfterText = document.createElement("style");
        manageAfterText.innerHTML =
        ` .text__container::after {
            content: "";
            width: 100%;
            height: 100%;
            text-transform: capitalize;
            position: absolute;
            z-index: 6;
            opacity: 1;
            transition: 0.5s;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }`;
                document.head.appendChild(manageAfterText);
        manageAfterText.innerHTML = manageAfterText.innerHTML.replace(`content:"${textContent}"`, `content:"${textContent}"`)
    });
}




// counter Function 
let counter_Interval = setInterval( function(){
    loading__page__counter.textContent = counter+=10
    if (counter == 100){
        clearInterval(counter_Interval)
        $(document).ready(()=>{
            $('.loading__container').fadeOut(1000 ,function (){
                $('.loading__page').slideUp(1000 ,function (){
                    $('.welcome__message').fadeOut(2000 ,()=>{
                        $('.welcome__message').remove()
                        $('.loading__page').remove()
                    })
                    $('.hero__banner').animate ({top:'0rem'} ,1000)
                })
            });
        })
    }
}, 200)



