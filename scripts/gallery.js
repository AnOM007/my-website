const images = ['../images/HTML.png','../images/CSS.jpeg','../images/JS.jpg'];
const previousButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const image = document.querySelector('.images');
const textImage = document.getElementById('under-image');
let indexImage = 0;
previousButton.addEventListener('click', () => {
    if(indexImage>0){
        indexImage--;
        changeImage(indexImage);
    }
});
nextButton.addEventListener('click', () => {
    if(indexImage < images.length-1){
        indexImage++;
        changeImage(indexImage);
    }
});


function changeImage(index){
    image.src = images[index]
    textImage.textContent = 'Логотип ' + (index+1);
}