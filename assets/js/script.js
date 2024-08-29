// To select the mobile section to change
let mobile = document.getElementById('clickanswer');

// To select the desktip style section to change
let desktopElement = document.getElementById('desktopanswer');

// To select the button that will activate the section change
let button = document.getElementById('shareicon');

// To add an event listener to the button
button.addEventListener('click', changeSection);

/**
 * To change the section to the new one
 */

function changeSection() {
    if (window.innerWidth <= 1000) {
        mobile.innerHTML = `
            <footer id="input">
                <p id="sharetext">SHARE</p>
                <img class="rsicon" src="assets/images/icon-facebook.svg" alt="Facebook Icon">
                <img class="rsicon" src="assets/images/icon-twitter.svg" alt="Twitter Icon">
                <img class="rsicon" src="assets/images/icon-pinterest.svg" alt="Pinterest Icon">
                <img id="shareiconinput" src="assets/images/icon-share-white.svg" alt="Icon Share">
            </footer>
        `;
    } else {
        desktopElement.style.visibility = ("visible");
    }
}