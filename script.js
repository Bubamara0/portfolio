

'use strict';


const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

open.addEventListener('click', ()=>{
    container.classList.add('active');
    document.querySelector('#open').style.opacity=0;

});


close.addEventListener('click',()=>{
    container.classList.remove('active');
    document.querySelector('#open').style.opacity=100;
})





// const ratio = 0.5;
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: ratio,
// };
// const handleIntersect = function (entries, observer) {
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio) {
//       entry.target.classList.add("pascachee");
//       observer.unobserve(entry.target);
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(document.querySelector(".invisible"));



// const ratio = 0.2;
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: ratio,
// };
// const handleIntersect = function (entries, observer) {
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio) {
//       entry.target.classList.add("visible");
//       observer.unobserve(entry.target);
//     }
//   });
// };