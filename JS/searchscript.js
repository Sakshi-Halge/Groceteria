window.addEventListener('scroll', () => {
    const lowerHeader = document.querySelector('.lower-header');
    lowerHeader.classList.toggle('sticky', window.scrollY > 0);
  })
 
  
  const show_header = () => {
      const burger_menu = document.querySelector('.burger-menu')
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
  

  const show_filter = () => {
    const subCategory = document.querySelector(".sub-category");
    const filter_search = document.querySelector(".filter-search");
    const subArrow = document.querySelector('.sub-arrow')
    

    subCategory.addEventListener("click", () => {
      filter_search.classList.toggle("filter-active");
      subArrow.classList.toggle("sub-arrow-active")
     
    });

    console.log("hello burger");
  };
  
  show_header();
  show_filter();