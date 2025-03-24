

const card = document.querySelector('.card')
const imgOne = document.querySelector('#imgOne')
const imgTwo = document.querySelector('#imgTwo')



card.addEventListener('mouseenter', (event) => {
    console.log(event);
    imgOne.style.transform = 'translateX(-100%)'; // Use transform for translation
    imgTwo.style.transform = 'translateX(-100%)'; // Example for imgTwo
});

card.addEventListener('mouseleave', (event) => {
    console.log(event);
    imgOne.style.transform = 'translateX(0%)'; // Reset position
    imgTwo.style.transform = 'translateX(0%)'; // Reset position for imgTwo
});
