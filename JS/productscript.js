window.addEventListener("scroll", () => {
  const lowerHeader = document.querySelector(".lower-header");
  lowerHeader.classList.toggle("sticky", window.scrollY > 0);
});



const show_header = () => {
  const burger_menu = document.querySelector(".burger-menu");
  const upper_header = document.querySelector(".upper-header-menu");
  const lower_header = document.querySelector(".lower-header");

  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger_menu.addEventListener("click", () => {
    upper_header.classList.toggle("header-menu-active");
    lower_header.classList.toggle("header-menu-active");

    line1.classList.toggle("line1-active");
    line2.classList.toggle("line2-active");
    line3.classList.toggle("line3-active");
  });

  console.log("hello burger");
};

const productPreview = () => {
  const prev_images = document.querySelectorAll(".image-preview img");
  const full_img = document.querySelector(".full-image img");

  prev_images.forEach((image,index) => {
    image.addEventListener("mouseover", () => {
      full_img.src = image.src;
      // full_img.style.backgroundImage = "url(" + image.src + ")";
      image.classList.add("img-active");
      
      for(let i = 0; i < prev_images.length; i++){
          if( i != index){
              prev_images[i].classList.remove('img-active');
          }
      }

    });
  });

};


const productZoom = () => {
  const productImg = document.querySelector(".full-image img");
  const productOverlay = document.querySelector(".product-img-overlay");
  const productZoomblock = document.querySelector(".product-zoom-img");
  const productZoomImg = document.querySelector(".product-zoom-img img")
  const crossProductImg = document.querySelector(".cross")

  productImg.addEventListener('click', () => {
     productOverlay.style.display = 'block';
     productZoomblock.style.display = 'block';
     crossProductImg.style.display = "block";
     crossProductImg.style.visibility = 'visible';

     productZoomImg.src = productImg.src;
  })

  crossProductImg.addEventListener('click', () => {
    productOverlay.style.display = "none";
    productZoomblock.style.display = "none";
    crossProductImg.style.display = "none";
    crossProductImg.style.visibility = "hidden";

  })
}

productZoom();

productPreview();

show_header();
