window.addEventListener('scroll', () => {
  const lowerHeader = document.querySelector('.lower-header');
  let stickyPos = lowerHeader.offsetTop;
  if (window.pageYOffset > stickyPos) {
    lowerHeader.classList.add("sticky");
  } else {
    lowerHeader.classList.remove("sticky");
  }
})


$(document).ready(function() {
    $('.deal-1').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $('.next1'),
        prevArrow: $('.prev1'),
        responsive: [
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 935,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
      $('.deal-2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $('.next2'),
        prevArrow: $('.prev2'),
        responsive: [
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 935,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
      $('.deal-3').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $('.next3'),
        prevArrow: $('.prev3'),
        responsive: [
          {
            breakpoint: 1264,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 935,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });                
                
  });

const show_header = () => {
    const burger_menu = document.querySelector('.burger-menu')
    console.log(burger_menu);
    const upper_header = document.querySelector('.upper-header-menu')
    const lower_header = document.querySelector('.lower-header')

    const line1 = document.querySelector('.line1')
    const line2 = document.querySelector('.line2')
    const line3 = document.querySelector('.line3')


    burger_menu.addEventListener('click', () => {
        upper_header.classList.toggle('header-menu-active');
        lower_header.classList.toggle('header-menu-active');

        line1.classList.toggle('line1-active')
        line2.classList.toggle('line2-active');
        line3.classList.toggle('line3-active');
    })

    console.log('hello burger')
}

const offerSlider = () => {
    const offerdiv = document.querySelector('.offer-div')
    const nextbtn = document.querySelector('.next-btn');
    const prevbtn = document.querySelector('.prev-btn');
    const offerSlides = document.querySelectorAll('.offer-item');
    const slideIcons = document.querySelectorAll('.slide-icon');

    const numberOfSlides = offerSlides.length;
    let slidenumber = 0;

    //Image slider next btn
    nextbtn.addEventListener('click', () => {
        offerSlides.forEach((offerSlide) => {
            offerSlide.classList.remove('offer-active')
        })

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('offer-active')
        })

        slidenumber++;

        if(slidenumber > (numberOfSlides - 1)){
            slidenumber = 0;
        }

        offerSlides[slidenumber].classList.add('offer-active');
        slideIcons[slidenumber].classList.add('offer-active');

    })

    //Image slider prev btn
    prevbtn.addEventListener('click', () => {
        offerSlides.forEach((offerSlide) => {
            offerSlide.classList.remove('offer-active')
        })

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('offer-active')
        })

        slidenumber--;

        if(slidenumber < 0 ){
            slidenumber = numberOfSlides - 1;
        }

        offerSlides[slidenumber].classList.add('offer-active');
        slideIcons[slidenumber].classList.add('offer-active');

    })

    //Image slider autoplay
    let playSlider;

    const repeater = () => {
        playSlider = setInterval(() => {
            offerSlides.forEach((offerSlide) => {
                offerSlide.classList.remove('offer-active')
            })
    
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove('offer-active')
            })
    
            slidenumber++;
    
            if(slidenumber > (numberOfSlides - 1)){
                slidenumber = 0;
            }
    
            offerSlides[slidenumber].classList.add('offer-active');
            slideIcons[slidenumber].classList.add('offer-active');
    
        },3000)
    }

    repeater()

    offerdiv.addEventListener('mouseover', () => {
        clearInterval(playSlider);
    })
    offerdiv.addEventListener('mouseout', () => {
        repeater();
    })
}

offerSlider();

show_header();