document.addEventListener('DOMContentLoaded', ()=>{

    const horizontalbars = document.querySelector('.showmenu');
    const crossbar = document.querySelector('.closemenu');
    const sidebar = document.querySelector('.menu__items');
    const buttonmenu = document.querySelector('.nav__clickbtn');
    
    const action = ()=>{
        horizontalbars.classList.toggle('show');
        crossbar.classList.toggle('show');
        sidebar.classList.toggle('slide-side-sidebar');
        buttonmenu.classList.toggle('slidenav__clickbtn');
    }

        horizontalbars.addEventListener('click', ()=>{        
        action();
    });

        crossbar.addEventListener('click', ()=>{        
        action();
    });    
    
        sidebar.addEventListener('click', ()=>{        
        action();
    });

       buttonmenu.addEventListener('click', ()=>{       
        action();
       });


    window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 0);
    });
    
    
    const moreTabs = document.querySelectorAll('.small-more');
    const lessTabs = document.querySelectorAll('.small-less');

    
    moreTabs.forEach((moreTab)=>{
        moreTab.addEventListener('click', ()=>{
            moreTab.classList.toggle('hide');
            moreTab.nextElementSibling.classList.toggle('hide');
            moreTab.nextElementSibling.nextElementSibling.classList.toggle('hide');
        });
    });

    lessTabs.forEach((lessTab)=>{
        lessTab.addEventListener('click', ()=>{
            lessTab.classList.toggle('hide');
        lessTab.previousElementSibling.classList.toggle('hide');
        lessTab.previousElementSibling.previousElementSibling.classList.toggle('hide');

        });
        
    });
});



const theYear = document.querySelector("footer small");
const d = new Date();
const year = d.getFullYear();
theYear.innerText ="©" + year;




