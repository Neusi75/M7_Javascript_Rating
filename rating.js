const star1 = document.getElementById("rate-1");
const star2 = document.getElementById("rate-2");
const star3 = document.getElementById("rate-3");
const star4 = document.getElementById("rate-4");
const star5 = document.getElementById("rate-5");
const stars = [];

stars.push(star1, star2, star3, star4, star5);

//let areaStar = document.getElementById("container");
let areaStar = document.getElementById("star-widget");

document.addEventListener("click", function(event){
    let clickDins = areaStar.contains(event.target);
    
    if (clickDins){
    }else{
       for (star of stars){
           star.checked = false;
       }
   }
});