let images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
    'img/17.jpg',
    'img/18.jpg',
    'img/19.jpg',
    'img/20.jpg',
    'img/21.jpg',
    'img/22.jpg',
    'img/23.jpg',
    'img/24.jpg',
];

let counter;


// supportfunction for shortcut
function getId(Id) {
    return document.getElementById(Id);
}


function load() {
    for (let i = 0; i < images.length; i++) {
        getId('content').innerHTML += `
        <div onclick="openImage(${i})">
           <img class="imgbox" src="${images[i]}"/>
        </div>
         `;
    }
}

// supportfunction for shortcut
function setImageSrc() {
    getId('image').src = images[counter];
}


function openImage(i) {
    counter = i;
    getId('imgdetail').classList.remove('d-none');
    setImageSrc();
}


//next image with wrap around
function pictureRight() {
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    setImageSrc();
}


//previous image with wrap around
function pictureLeft() {
    if (counter == 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
    setImageSrc();
}


function closeImage() {
    getId('imgdetail').classList.add('d-none');
}