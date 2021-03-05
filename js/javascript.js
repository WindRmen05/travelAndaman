var button = document.querySelector('.more-button');
const text = document.querySelector('.text');
const moretext = document.querySelector('.moretext');
const spanColor = document.querySelector('.span-color');

button.addEventListener('click',(e) => {
    moretext.classList.toggle('moretext');
    if (button.textContent.includes('Read More')) {
        button.textContent='Read less';
        setTimeout(() => {
            spanColor.style.background = 'transparent';
        },2000);
    } else {
        button.textContent='Read More';
        spanColor.style.background = 'antiquewhite';
    }
})
// console.log(button[0].textContent);

// navigation button click event
const navButton = document.querySelectorAll('.navigation__link');
const navIcon = document.querySelector('.navigation__icon');
const navCheckbox = document.querySelector('input[type="checkbox"]');

    navButton.forEach((el) => {
        el.addEventListener('click',(e) => {
            navCheckbox.checked = false;
        })
    });