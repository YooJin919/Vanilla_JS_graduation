const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const image_index = Math.floor(Math.random()*images.length);

const chosenImage = images[image_index];

const back = document.createElement("style");

back.innerText = `body{background-image: url("img/${chosenImage}");
background-repeat: no-repeat;
background-size:100%;
max-width:100%;
max-height:100%;}`;

console.log(back);

document.head.appendChild(back);