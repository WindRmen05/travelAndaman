var button = document.querySelector('.more-button');
const text = document.querySelector('.text');
const moretext = document.querySelector('.moretext');
const spanColor = document.querySelector('.span-color');

button.addEventListener('click',(e) => {
    moretext.classList.toggle('moretext');
    if (button.textContent.includes('Read More')) {
        button.textContent='Read less';
        // setTimeout(() => {
        //     spanColor.style.background = 'transparent';
        // },2000);
    } else {
        button.textContent='Read More';
        // spanColor.style.background = 'antiquewhite';
    }
})
// console.log(button[0].textContent);

// navigation button click event
const navButton = document.querySelectorAll('.navigation__link');
const navIcon = document.querySelector('.navigation__icon');
const navCheckbox = document.querySelector('input[type="checkbox"]');
const navBtn = document.querySelector('.navigation__button');

    navButton.forEach((el) => {
        el.addEventListener('click',(e) => {
            navCheckbox.checked = false;
        })
    });

// trip plans
const slideButton = document.querySelectorAll('.tripPlan-box__slidedown');
const planItems = document.querySelector('.tripPlan-box__items');

slideButton.forEach((el) => {
    el.addEventListener('click',(e) => {
        if(e.target.id == "imgbtn") {
            e.target.parentElement.children[1].classList.toggle('more');
            e.target.children[1].classList.toggle('upsidedown')
            // console.log(e.target.parentElement.children[1].classList.toggle('more'))
            // console.log(e.target.children[1].classList.toggle('upsidedown'));
        }else if(e.target.alt == 'imgbtn') {
            e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('more');
            e.target.classList.toggle('upsidedown')
            // console.log(e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('more'))
        }
    })
});

//image move on mousemove
// const img = document.querySelector('#pop-img');

// $(slideButton).mousemove((e) => {
//     var x = (e.pageX), y = (e.pageY);
//   	$(img).css({'left': x - 20,'top': y -20});
//       console.log(x,y)
// });

//input validation for numbers
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 32 && (charCode < 63))
        return false;
    return true;
}

const testimonyBtn = document.querySelectorAll('.testimony-button');
testimonyBtn.forEach((el) => {
    el.addEventListener('click',(e) => {
        if(e.target.parentElement.children[1]) {
            e.target.parentElement.children[1].classList.toggle('more');
        }
        // console.log(e.target.parentElement.children[1]);
    })
});

const x = document.querySelectorAll('#testimonyBtn')

x.forEach((el) => {
    el.addEventListener('click',(e) => {
        if(e.target.textContent == 'more') {
            e.target.textContent = 'less';
            // console.log(e.target)
        } else {
            e.target.textContent = 'more';
        }
    })
});


// nodejs
// const nodemailer = require('nodemailer');

// $(window).scroll(function() {
// 	var $height = $(window).scrollTop();
//   if($height > 715) {
//       $('#logo').css('background-color','#fff');
// 	} else {
//         $('#logo').css('background-color','transparent');
// 	}
// });

//navbar background


$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
        $(".nav-menu").addClass("active");
    }
    else {
        $(".nav-menu").removeClass("active");
    }
});

//info video toggle
$('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        nav:true
})

