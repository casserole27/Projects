// if I input cat as a choice, input years and run the catAge function
//if I input dog as a choice, input years and run the dogAge function


function catAge(humanYears) {
    let catYears;
    
    if (humanYears === 1) {
        catYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
    } else if (humanYears >= 3) {
        catYears = (humanYears - 2) * 4 + 24; 
    } 

    return catYears;
};

let reveal = document.getElementById('submit-info');
//let revealAge = document.getElementById('placeholder');
let revealCatImage = document.getElementById('cat-image');

function revealInfo() {
    revealCatImage.style.display = 'block';
}

reveal.addEventListener('click', revealInfo);

/*
const dogAge = (humanYears) => {
    let dogYears;

    if (humanYears === 1) {
        dogYears = 15;
    } else if (humanYears ===2) {
        dogYears = 15;  
    } else if (humanYears >= 3) {
        dogYears = (humanYears - 2) * 5 + 24;
    }

    return [humanYears, dogYears];    
};
*/

//console.log(catAge(13));
//console.log(dogAge(13));


//let choice;
//let animalChoice = 0;

/*const animalChoice = (choice) => {
    let result;
    if (choice === 'cat') {
        result = catAge();
    } else if (choice === 'dog') {
        result = dogAge();
    }
    return result;
}

console.log(animalChoice('cat'));
*/

