const dataArray = [
    {
        id: 1,
        color: "Black&White",
        Dob: null,
        photo: "./cattlephotos/1FemaleBlackandWhite.jpeg",
        sex: "Female"        
    },

    {
        id: 2,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/2FemaleWhite.jpeg",
        sex: "Female"
    },

    {
        id: 3,
        color: "Black&White",
        Dob: null,
        photo: "./cattlephotos/3FemaleBlackandWhite.jpeg",
        sex: "Female"                
    },

    {
        id: 4,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/4FemaleWhite.jpeg",
        sex: "Female"                
    },

    {
        id: 5,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/5FemaleWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 6,
        color: "Brown&White",
        Dob: null,
        photo: "./cattlephotos/6FemaleBrownandWhite.jpeg",
        sex: "Female"                
    },

    {
        id: 7,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/7FemaleWhite.jpeg",
        sex: "Female"                
    },

    {
        id: 8,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/8FemaleWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 9,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/9FemaleWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 10,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/10FemaleWhitecalf.jpeg",
        sex: "Female"                
    },


    {
        id: 11,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/11FemaleWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 12,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/12FemaleBrown.jpeg",
        sex: "Female"                
    },


    {
        id: 13,
        color: "Brown&White",
        Dob: null,
        photo: "./cattlephotos/13FemaleBrownWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 14,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/14FemaleBrown.jpeg",
        sex: "Female"                
    },


    {
        id: 15,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/15MaleWhite.jpeg",
        sex: "Male"                
    },


    {
        id: 16,
        color: "Balck&White",
        Dob: null,
        photo: "./cattlephotos/16MaleBlackWhite.jpeg",
        sex: "Male"                
    },


    {
        id: 17,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/17MaleBrown.jpeg",
        sex: "Male"                
    },


    {
        id: 18,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/18MaleBrownCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 19,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/19FemaleWhiteCalf.jpeg",
        sex: "Female"                
    },


    {
        id: 20,
        color: "Black&White",
        Dob: null,
        photo: "./cattlephotos/20MaleBlackWhiteCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 21,
        color: "Brown&White",
        Dob: null,
        photo: "./cattlephotos/21FemaleBrownWhiteCalf.jpeg",
        sex: "Female"                
    },


    {
        id: 22,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/22FemaleWhiteCalfs.jpeg",
        sex: "Female"                
    },


    {
        id: 23,
        color: "Brown&White",
        Dob: null,
        photo: "./cattlephotos/23FemaleBrownWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 24,
        color: "Black",
        Dob: null,
        photo: "./cattlephotos/24MaleBalckCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 25,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/25MaleBrownCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 26,
        color: "Black",
        Dob: null,
        photo: "./cattlephotos/26MaleBlackCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 27,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/27MaleBrownCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 28,
        color: "Black&White",
        Dob: null,
        photo: "./cattlephotos/28FemaleBlackWhite.jpeg",
        sex: "Female"                
    },


    {
        id: 29,
        color: "Brown",
        Dob: null,
        photo: "./cattlephotos/29MaleBrown.jpeg",
        sex: "Male"                
    },


    {
        id: 30,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/30MaleWhiteCalf.jpeg",
        sex: "Male"                
    },


    {
        id: 31,
        color: "White",
        Dob: null,
        photo: "./cattlephotos/31FemaleWhiteCalf.jpeg",
        sex: "Female"                
    }

];




function ageCalculation(dob){
    let years;
    let months;
    
    let currentDay = new Date();
    let currentYear = currentDay.getFullYear();
    let currentMonth = currentDay.getMonth();
    let currentTime = currentDay.getTime();
   

    let yearOfBirth = dob.getFullYear();
    let monthOfBirth = dob.getMonth();
    let timeOfBirth = dob.getTime();

    years = currentYear - yearOfBirth;
    months = currentMonth - monthOfBirth;

    
    
    if(monthOfBirth > currentMonth){
        years = (currentYear-1) - yearOfBirth;
        months = (currentMonth + 12) - monthOfBirth;
    }            
    
    return `${years}yrs ${months}months`

}




const mainGallerySection = document.querySelector('.main-gallery');
const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


dataArray.forEach(obj=>{
    const dobDisplay = obj.Dob ? `${obj.Dob.getFullYear()}, ${monthNames[obj.Dob.getMonth()]}` : 'N/A';
    const ageDisplay = obj.Dob ? ageCalculation(obj.Dob) : 'N/A';
    const iddisplay = obj.id ? `${obj.id}`: `n/a`;
     
    const mainGalleryHTML = `
    <div class="gallery-item">
        <div class="photo">
            <div class="image">
                <img src=${obj.photo} alt="">
            </div>
        </div>   
        <div class="title">
            <span class="dob">Dob: ${dobDisplay}</span>
            <span class="age">Age: ${ageDisplay}</span>
            <span class="color">Color: ${obj.color}</span>
            <span class="ID">ID: ${iddisplay}</span>
            <span class="sex">${obj.sex}</span>
        </div>
</div>`

mainGallerySection.innerHTML += mainGalleryHTML;

});


const themeToggle = document.querySelector('.toggle-mode')

const darkThemeEnable = () =>{
    document.body.classList.add('darktheme');
    localStorage.setItem('theme', 'dark');
    
}

const lightThemeEnable = () =>{
    document.body.classList.remove('darktheme');
    localStorage.setItem('theme', 'light')
}

themeToggle.addEventListener('click', ()=>{
    if(document.body.classList.contains('darktheme')){
        lightThemeEnable();
    }else{
        darkThemeEnable();
    }
    
})


const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'darktheme') {
        darkThemeEnable();  // Apply dark theme if it's saved
    } else {
        lightThemeEnable();;  // Apply light theme as default
    }

// the search logic

const searchText = document.querySelector('form input');  // The search input field
const galleryItems = document.querySelectorAll('.gallery-item');  // All the gallery items

searchText.addEventListener('keyup', () => {
const query = searchText.value.toLowerCase();  // Get the search text and convert it to lowercase

    galleryItems.forEach((galleryItem) => {
    // Check if the search text is found in the gallery item text content
        const textContent = galleryItem.textContent.toLowerCase();

        if (textContent.indexOf(query) !== -1) {
        // Show the gallery item if it matches the search query
        galleryItem.style.display = '';
        } else {
        // Hide the gallery item if it doesn't match
        galleryItem.style.display = 'none';
        }
    });
});


let maleCount = 0;
let femaleCount = 0;
const malesNum = document.querySelector('.males');
const femaleNum = document.querySelector('.females');

dataArray.forEach(objItem=>{
    if(objItem.sex =='Male'){
        maleCount = maleCount+1        
        malesNum.innerText ="Males " + maleCount
    }

    if(objItem.sex =='Female'){
        femaleCount = femaleCount+1        
        femaleNum.innerText = femaleCount + " Females"
    }
})


const Footer = document.querySelector('footer')
let tdy = new Date()
Footer.innerText ="© Isu M Dadzie " + tdy.getFullYear()