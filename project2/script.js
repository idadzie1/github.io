

// ============ Highlighting menu items on click ==================================
const menuListItems = document.querySelectorAll('.menu__items li');
menuListItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            // If the clicked item already has the 'active' class, remove it
            item.classList.remove('active');
        } else {
            // If the clicked item doesn't have the 'active' class, add it and remove 'active' from other items
            menuListItems.forEach(otherItem => otherItem.classList.remove('active'));
            item.classList.add('active');
        }
    });
});

// ============ Toggling the menu with the clcik of the hamburger icom on small devices ============
const hamburgerIcon = document.querySelector(".menu__icon")
const menuItems = document.querySelector(".menu__items");
hamburgerIcon.addEventListener('click', ()=>{
    console.log(menuItems)
    menuItems.style.display = menuItems.style.display == "flex" ? "none" : "flex";
})


// ===================Testimonials moretexts=========================

const moreTxtsIcons = document.querySelectorAll(".moretext");
const lessTxtsIcons = document.querySelectorAll(".lesstext");


// if more... is clicked show the more contents by renoving (toggling) the hiddden class and also show the less icon by
// removing (toggling) the hidden class of the less icon   

// if less is clicked hide the more contenst by toggling the hidden class of the more contents and show the less icon 
// by toggling the hidden class of the less icon


//=============== see more... is clicked ===================================================
moreTxtsIcons.forEach(moreTxtsIcon =>{
    moreTxtsIcon.addEventListener('click', () =>{        
        
        const txt = moreTxtsIcon.nextElementSibling;        
        txt.classList.toggle('hidden');
        moreTxtsIcon.classList.toggle("hidden");
        txt.nextElementSibling.classList.toggle("hidden");
        
    })
})

//================= see less... is clicked ==================================================
lessTxtsIcons.forEach(lessTxtsIcon =>{
    lessTxtsIcon.addEventListener('click', ()=>{ 
        lessTxtsIcon.classList.toggle("hidden");       
        lessTxtsIcon.previousElementSibling.classList.toggle("hidden");        
        lessTxtsIcon.previousElementSibling.previousElementSibling.classList.toggle("hidden");
        
    })
})



// ================= Open and close the answers to question on click =================
const questions = document.querySelectorAll('.questions_answers');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const ans = question.lastElementChild;            
            ans.classList.toggle('open');      

        const plusSign = question.querySelector('.plus');
        console.log(plusSign)
        plusSign.classList.toggle('hidden');

        const minusSign = question.querySelector('.minus');
        console.log(minusSign)
        minusSign.classList.toggle('hidden');   
       
                
    });
});




