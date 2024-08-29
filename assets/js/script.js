// Initial selection of elements
let mobile = document.getElementById('clickanswer');
let desktopElement = document.getElementById('desktopanswer');
let button = document.getElementById('shareicon');

// To track if the share JS view is visible
let isJSView = false;

// To add an event listener to the button
button.addEventListener('click', changeSection);

// Function to change the section
function changeSection() {
    if (!isJSView) {
        if (window.innerWidth <= 1000) {
            mobile.outerHTML = `
                <footer id="input">
                    <p id="sharetext">SHARE</p>
                    <img class="rsicon" src="assets/images/icon-facebook.svg" alt="Facebook Icon">
                    <img class="rsicon" src="assets/images/icon-twitter.svg" alt="Twitter Icon">
                    <img class="rsicon" src="assets/images/icon-pinterest.svg" alt="Pinterest Icon">
                    <img id="shareiconinput" src="assets/images/icon-share-white.svg" alt="Icon Share">
                </footer>
            `;
            isJSView = true;

            // Reattach event listener to the new button
            let buttonBack = document.getElementById('shareiconinput');
            buttonBack.addEventListener('click', changeSection);

        } else {
            desktopElement.style.visibility = "visible";
            isJSView = true;
        }
    } else {
        let mobile = document.getElementById('input');

        if (window.innerWidth <= 1000) {
            mobile.outerHTML = `
               <footer id="clickanswer">
                    <img id="avatar" src="assets/images/avatar-michelle.jpg" alt="Avatar Michelle">
                    <section id="author">
                        <p class="name">Michelle Appleton</p>
                        <p class="date">28 Jun 2020</p>
                    </section>
                    <div id="desktopanswer">
                        <p id="sharetext">SHARE</p>
                        <img class="rsicon" src="assets/images/icon-facebook.svg" alt="Facebook Icon">
                        <img class="rsicon" src="assets/images/icon-twitter.svg" alt="Twitter Icon">
                        <img class="rsicon" src="assets/images/icon-pinterest.svg" alt="Pinterest Icon">
                    </div>
                    <img id="shareicon" src="assets/images/icon-share.svg" alt="Icon Share">
                </footer>
            `;
            isJSView = false;

            // Reattach event listener to the new button
            let button = document.getElementById('shareicon');
            button.addEventListener('click', changeSection);

        } else {
            desktopElement.style.visibility = "hidden";
            isJSView = false;
        }
    }
}