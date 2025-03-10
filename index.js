const openButton1 = document.getElementById('openButton-1');
const openButton2 = document.getElementById('openButton-2');
const openButton3 = document.getElementById('openButton-3');
const openButton4 = document.getElementById('openButton-4');

const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');

openButton1.addEventListener('click', () =>{

    if (answer1.style.display === 'block'){
        answer1.style.display = 'none'
        openButton1.src = './assets/images/icon-plus.svg'
    } else {
        answer1.style.display = 'block'
        openButton1.src = './assets/images/icon-minus.svg'
    }
});

openButton2.addEventListener('click', () =>{
    
    if (answer2.style.display === 'block'){
        answer2.style.display = 'none'
        openButton2.src = './assets/images/icon-plus.svg'
    } else {
        answer2.style.display = 'block'
        openButton2.src = './assets/images/icon-minus.svg'
    }
});

openButton3.addEventListener('click', () =>{
    
    if (answer3.style.display === 'block'){
        answer3.style.display = 'none'
        openButton3.src = './assets/images/icon-plus.svg'
    } else {
        answer3.style.display = 'block'
        openButton3.src = './assets/images/icon-minus.svg'
    }
});

openButton4.addEventListener('click', () =>{
    
    if (answer4.style.display === 'block'){
        answer4.style.display = 'none'
        openButton4.src = './assets/images/icon-plus.svg'
    } else {
        answer4.style.display = 'block'
        openButton4.src = './assets/images/icon-minus.svg'
    }
});