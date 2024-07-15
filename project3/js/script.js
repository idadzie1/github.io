

document.addEventListener('DOMContentLoaded', ()=>{

    const horizontalbars = document.querySelector('.showmenu');
    const crossbar = document.querySelector('.closemenu');
    const sidebar = document.querySelector('.menu__items');

        

        horizontalbars.addEventListener('click', ()=>{
        horizontalbars.classList.toggle('show');
        crossbar.classList.toggle('show');
        sidebar.classList.toggle('slide-side-sidebar');

    });

        crossbar.addEventListener('click', ()=>{
        horizontalbars.classList.toggle('show');
        crossbar.classList.toggle('show');
        sidebar.classList.toggle('slide-side-sidebar');
        
    });
    
    
        sidebar.addEventListener('click', ()=>{
        sidebar.classList.toggle('slide-side-sidebar');
        horizontalbars.classList.toggle('show');
        crossbar.classList.toggle('show');

    });

    

});
