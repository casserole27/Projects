//variable for lightmode checkbox input
const lightModeToggle = document.getElementById('lightmode-toggle');

function renderLightMode() {
     /*if body contains light mode class,
     remove the class and toggle is checked, 
     else add lightmode class to the body
    and toggle is in checked state.
    Toggle is moved / changed via CSS :checked*/
    if (document.body.classList.contains('lightmode')) {
        document.body.classList.remove('lightmode');
        lightModeToggle.checked = false;
    } else {
        document.body.classList.add('lightmode');
        lightModeToggle.checked = true;
    };  
};

//event listener for toggle click
lightModeToggle.addEventListener('click', renderLightMode);

//enable toggle key enter functionality with keypress event listener
document.getElementById('lightmode-label').addEventListener('keypress', e => {
    if(e.key === "Enter") {
        renderLightMode()
    };
});

