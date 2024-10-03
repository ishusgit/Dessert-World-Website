const navIcon=document.querySelector(".bars")
const navItems=document.querySelector(".nav-items")
const searchIcon=document.querySelector(".search")
const searchInput=document.querySelector(".input-search")
const closeIcon = document.querySelector(".close-icon")
navIcon.addEventListener("click",() =>{
    navItems.classList.add("active");
    searchInput.classList.remove("active");
    // closeIcon.classList.add('active')
})
searchIcon.addEventListener("click",() =>{
    searchInput.classList.add("active");
    navItems.classList.remove("active");
})
window.onscroll=()=>{
    navItems.classList.remove("active");
    searchInput.classList.remove("active");
}
closeIcon.addEventListener('click',()=>{
    navItems.classList.remove("active");
})
navItems.addEventListener('click', ()=>{
    navItems.classList.remove("active");
})

// document.addEventListener('DOMContentLoaded', function() {
//     const searchIcon = document.querySelector('.search-icon');
//     const inputSearch = document.querySelector('.input-search');
//     const hamburgerIcon = document.querySelector('.hamburger-icon');
//     const navItems = document.querySelector('.nav-items');

//     // Toggle search input visibility when clicking search icon
//     searchIcon.addEventListener('click', function() {
//         inputSearch.style.display = inputSearch.style.display === 'block' ? 'none' : 'block';
//         inputSearch.style.right = '0'; // Adjust position to come from the right
//     });

//     // Hide search input when scrolling
//     window.addEventListener('scroll', function() {
//         inputSearch.style.display = 'none';
//     });

//     // Toggle navigation items when clicking hamburger menu
//     hamburgerIcon.addEventListener('click', function() {
//         navItems.classList.toggle('active');
//     });

//     // Ensure nav items are hidden when resizing to large screens
//     window.addEventListener('resize', function() {
//         if (window.innerWidth >= 992) {
//             navItems.classList.remove('active');
//         }
//     });
// });
//back-to-top-btn
function userScroll(){
    const navbar = document.querySelector('.header');
    const backtoTop = document.querySelector('#back-to-top');
    window.addEventListener('scroll', () =>{
      if(window.scrollY > 50){
        backtoTop.classList.add('show');
      }else{
        backtoTop.classList.remove('show');
      }
    });
    }
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    //eventlistener
    document.addEventListener('DOMContentLoaded', userScroll);
    document.querySelector('#back-to-top'), addEventListener('click',scrollToTop);


    //scroll triggered animation- scroll to corresponding section content should come from left and right
//  document.addEventListener('DOMContentLoaded', function(){
//   const sections = document.querySelectorAll('.scroll-section');
//   const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry => {
//       if(entry.isIntersecting){
//         entry.target.classList.add('visible');
//       } else {
//         entry.target.classList.remove('visible');
//        }
//     });
//   }, { threshold:0.1 });
  
//     sections.forEach(section =>{
//       observer.observe(section);
//   });
//  });

    
