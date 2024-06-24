
const mobileMenuBarIcon = document.querySelector('#menu-bars');
const closeMeIcon = document.querySelector('#close');
const menuBar = document.querySelector('nav .container .menu-items ul');

mobileMenuBarIcon.addEventListener('click', ()=>{
    mobileMenuBarIcon.classList.toggle('active');
    menuBar.classList.toggle('active');
    closeMeIcon.classList.toggle('active');
    
})

closeMeIcon.addEventListener('click', ()=>{
    closeMeIcon.classList.toggle('active');
    menuBar.classList.toggle('active');
    mobileMenuBarIcon.classList.toggle('active');
})



window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})




const mouseOverfb = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(1)').style.display='flex';
const mouseOutfb = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(1)').style.display='none';
document.querySelector('.bx.bxl-facebook-square').addEventListener('mouseover', () => mouseOverfb())
document.querySelector('.bx.bxl-facebook-square').addEventListener('mouseout', () => mouseOutfb())





const mouseOverLi = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(2)').style.display='flex';
const mouseOutLi = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(2)').style.display='none';
document.querySelector('.bx.bxl-linkedin-square').addEventListener('mouseover', () => mouseOverLi())
document.querySelector('.bx.bxl-linkedin-square').addEventListener('mouseout', () => mouseOutLi())




const mouseOverTw = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(3)').style.display='flex';
const mouseOutTw = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(3)').style.display='none';
document.querySelector('.bx.bxl-twitter').addEventListener('mouseover', () => mouseOverTw())
document.querySelector('.bx.bxl-twitter').addEventListener('mouseout', () => mouseOutTw())



const mouseOverGh = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(4)').style.display='flex';
const mouseOutGh = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(4)').style.display='none';
document.querySelector('.bx.bxl-github').addEventListener('mouseover', () => mouseOverGh())
document.querySelector('.bx.bxl-github').addEventListener('mouseout', () => mouseOutGh())




const mouseOverGm = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(5)').style.display='flex';
const mouseOutGm = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(5)').style.display='none';
document.querySelector('.bx.bxl-gmail').addEventListener('mouseover', () => mouseOverGm())
document.querySelector('.bx.bxl-gmail').addEventListener('mouseout', () => mouseOutGm())




const mouseOverMg = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(6)').style.display='flex';
const mouseOutMg = () => document.querySelector('header .header-container .socials .social-details .address:nth-child(6)').style.display='none';
document.querySelector('.bx.bxl-messenger').addEventListener('mouseover', () => mouseOverMg())
document.querySelector('.bx.bxl-messenger').addEventListener('mouseout', () => mouseOutMg())


// ====================================================================================================
// My markup structure does not allow the use of the below to loop througth the various
// social media handles. I will restruture the html in another project to eneble the use of below 
// ==================================================================================================


// const mouseOverFunctn = (e) => {
//     const mouseOveredElement = e.target;
//     mouseOveredElement.style.display = 'flex';
    
// }

// const mouseOutFunctn = (e) => {
//     const mouseOutElement = e.target;
//     mouseOutElement.style.display = 'none';
// }



// const mouseOverFunctn = (e) => {
//     const mouseOveredElement = e.target;
//     console.log('yes')    
// }

// const socials = document.querySelectorAll('header .header-container .socials .address');
// socials.forEach(social => {
//     social.addEventListener('mouseover', mouseOverFunctn);    
//     social.addEventListener('mouseout', mouseOutFunctn);
    
// });

// ================================================================================================


const aboutMeData = [
    {
        id: 1,
        Experience: 'A result-driven Customer Service Manager, IP Network Engineer, Systems Administrator and with over 10+ years of extensive experience of working in the IT/Telecommunications. Acknowledged for being self-directed, solutions-oriented, reliable, respectful, proactive and agile, with interpersonal skills, collaborative cross-functional skills, organizational skills and leadership skills. Customer focused with “big-picture” vision with the ability to think creatively and strategically and paying attention to detail. A proven track record of adhering to quality assurance process for the purposes of meeting SLA metrics. Possesses excellent client facing skills, analytical and problem-solving skills and able to contribute to the development of IT best service practices with ITIL compliance and policies within any multinational organization and in multicultural environments. Possesses good communication skills and abreast with new technologies and emerging markets.'
    },

    {
       id: 2,
       Work: 'SITA, Orange Bussines Seevices' 
    },

    {
        id: 3,
        Skills: 'IT Service Management, Customer Service Management, Frentend Development'
    }
];

// console.log(aboutMeData[0].Experience)

const allDetailbtns = document.querySelectorAll('section .section-container .details .left button.btn')
const rightSide = document.querySelector('.right .detailed-description p');
// console.log(allDetailbtns);
// console.log(rightSide)


allDetailbtns.forEach(detailBtn => {
    detailBtn.addEventListener('click', () => {
        const btnName = detailBtn.innerHTML;       
        for(let obj of aboutMeData){
            if(obj.hasOwnProperty(btnName)){
                rightSide.innerHTML = obj[btnName];
            }
        }
    });
});









