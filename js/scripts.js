import anime from "animejs";

function copyTextFromElement(elementID) {
    let element = document.getElementById('my-button'); //select the element
    let elementText = element.email; //get the text content from the element
    copyText(elementText); //use the copyText function below
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
    navigator.clipboard.writeText(text);
}


function animateHeader() {
    anime({
        /* animation details here*/
        target: "#logo",
        //Properties
        rotateY: 360,
        scale: 0.5,
        translateX: 300,
        skew: 60,
        // Property Parameters
        duration: 1000,
        endDelay: 300,
        easing: "easeInOutSine",
        // Animation Parameters
        direction: 'alternate',
        loop: true,
    });
}