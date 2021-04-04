const openButton = document.querySelector("#hamburger");
const body = document.body;
const fullscreenMenu = document.querySelector("#fullscreenMenu");

const myWrapper = document.querySelector(".wrapper");

const successModal = createModal("The message has been sent, thank you!");


openButton.addEventListener("click", e => {
    body.appendChild(successModal);

    myWrapper.style.overflow = `hidden`;



    e.preventDefault();

});

function createModal(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");


    const template = document.querySelector("#overlayTemplate");

    overlayElement.innerHTML = template.innerHTML;
    overlayElement.addEventListener("click", e => {
        if (e.target == overlayElement) {
            closeElement.click();
        }
    })

    const closeElement = overlayElement.querySelector("#close");
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
        
        myWrapper.style.overflow = `auto`;

    })


    return overlayElement;

}