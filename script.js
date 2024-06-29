//All Mario images
const moveFront =
    "https://static.lacapsule.academy/practice/mario/mario-front-1.png";
const moveBack =
    "https://static.lacapsule.academy/practice/mario/mario-back-1.png";
const moveLeft =
    "https://static.lacapsule.academy/practice/mario/mario-left-1.png";
const moveRight =
    "https://static.lacapsule.academy/practice/mario/mario-right-1.png";

//Min distance of move
const distanceMove = 10;


//Size screen
const heightScreen = document.body.scrollHeight;
const widthtScreen = document.body.scrollWidth;
console.log("Heigth", heightScreen);
console.log("Width", widthtScreen);

//Offset
let playerMario = document.getElementById("player");
let topPos = playerMario.offsetTop;
console.log(topPos);
let leftPos = playerMario.offsetLeft;
console.log(leftPos);


//Mario size
const heightMario = playerMario.height;
console.log("Size Mario", heightMario);
const widthMario = playerMario.width;
console.log("Size Mario", widthMario);


document.addEventListener("keydown", function (event) {
    console.log("click detected");

    switch (event.key) {
        case "ArrowDown":
            // Handle "back"
            playerMario.src = moveFront;
            playerMario.style.top = topPos + distanceMove + "px";
            topPos = topPos + distanceMove;
            if (topPos > heightScreen - heightMario - distanceMove) {
                topPos = heightScreen - heightMario - distanceMove;
            }
            console.log(topPos);

            break;
        case "ArrowUp":
            playerMario.src = moveBack;
            playerMario.style.top = topPos - distanceMove + "px";
            topPos = topPos - distanceMove;
            if (topPos < 0) {
                topPos = 0;
            }
            console.log(topPos);
            break;
        case "ArrowLeft":
            playerMario.src = moveLeft;
            playerMario.style.left = leftPos - distanceMove + "px";
            leftPos = leftPos - distanceMove;
            if (leftPos < 0) {
                leftPos = 0;
            }
            console.log(leftPos);
            break;
        case "ArrowRight":
            playerMario.src = moveRight;
            playerMario.style.left = leftPos + distanceMove + "px";
            leftPos = leftPos + distanceMove;
            if (leftPos > widthtScreen - widthMario - distanceMove) {
                leftPos = widthtScreen - widthMario - distanceMove;
            }
            console.log(leftPos);
            break;
    }
});
