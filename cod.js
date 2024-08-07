burger();

function burger() {
    

    const headerburger = document.querySelector('.header__burger');
    headerburger.addEventListener('click', function burger(){
      const burger = document.querySelector('.header__burger');
      burger.classList.toggle('active');
      
      const menu = document.querySelector('.header__menu');
      menu.classList.toggle('active');
      
      const body = document.querySelector('body');
      
      body.classList.toggle('lock');
    
    });
    
    }
    
    
    //slider();
   

    const swiper = new Swiper('.swiper', {
        
        loop: true , 
        
        speed: 400,
        
        navigation: {
            nextEl: '.arow.swiper-button-next',
            prevEl: '.arow.swiper-button-prev',
        },
        
       
        }); 
    
    tabHome();
    function tabHome() {
        
    
        const tabNavItems = document.querySelectorAll('.link-home'); // navigator
        const tabItems = document.querySelectorAll('.block-home'); // information
        document.addEventListener('click', function (e) {
        const targetElement = e.target;
        let currentActiveIndex = null;
        let newActiveIndex = null;
        if (targetElement.closest('.link-home')) {
        tabNavItems.forEach((tabNavItems, index)=>{
            if (tabNavItems.classList.contains('active')) {
            currentActiveIndex = index;
            tabNavItems.classList.remove('active');
            }
            if (tabNavItems === targetElement) {
            newActiveIndex = index;
            }
    
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active')
        }
        })
    }
    
    
   
