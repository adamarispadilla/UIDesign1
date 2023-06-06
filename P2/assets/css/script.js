const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `assets/css/relax/rcloud1${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

