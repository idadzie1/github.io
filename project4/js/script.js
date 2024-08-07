document.addEventListener('DOMContentLoaded', ()=>{


    window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 0);
    });    


    const hamburgerIcon = document.querySelector('.humburherIcon');
    const menuItems = document.querySelector('nav .container .pwr ul');

    hamburgerIcon.addEventListener('click', ()=>{        
        menuItems.classList.toggle('showOnClick');
        
    });

    menuItems.addEventListener('click', ()=>{
        menuItems.classList.toggle('showOnClick');
    })    
  

    // ========= FQA ===========
    const faqcards = document.querySelectorAll('.faq');
    faqcards.forEach(faqcard =>{
        faqcard.addEventListener('click', ()=>{            
            faqcard.nextElementSibling.classList.toggle('hide');            
            faqcard.firstElementChild.firstElementChild.classList.toggle('hide');
            faqcard.firstElementChild.lastElementChild.classList.toggle('hide');
            
        });
    });
});