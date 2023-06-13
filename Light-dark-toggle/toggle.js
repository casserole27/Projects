
const lightModeKey = "lightMode";
//variable for lightmode checkbox input
const lightModeToggle = document.getElementById('lightmode-toggle');

function enableLightMode() {
    /*add lightmode class to the body
    toggle is in checked state,
    so via CSS the toggle button moves to the right,
    and the background changes color*/
    document.body.classList.add('lightmode');
    lightModeToggle.checked = true;
};    

function disableLightMode() {
    /*remove light mode class from the body
    unchecked state moves toggle back to the left
    and changes background color via CSS */
    document.body.classList.remove('lightmode');
    lightModeToggle.checked = false;
};

// save the light mode setting to local storage
const saveLightModeSetting = (isLightMode) => localStorage.setItem(lightModeKey, isLightMode);

// enable or disable lightmode depending on local storage value
function loadLightModeSetting() {
    const isLightMode = localStorage.getItem(lightModeKey) === "true";
    isLightMode ? enableLightMode() : disableLightMode();
}

function renderLightMode() {
    /*if the body contains the light mode class,
    disable it, and update local storage,
    else if it doesn't, enable light mode
    and update local storage */
    if (document.body.classList.contains('lightmode')) {
        disableLightMode();
        saveLightModeSetting(false);
    } else {
        enableLightMode()
        saveLightModeSetting(true);
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

//call enable/disable light mode from local storage value
loadLightModeSetting();