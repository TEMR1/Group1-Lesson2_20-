let slides = document.querySelectorAll(".slide");
console.log(slides);
let slidesContent = document.querySelectorAll(".slideContent");
let points = document.querySelectorAll(".point");
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');
let current = 0;
let order = 0;
let whiteLeft = document.querySelector('.arrowWhiteLeft');
let whiteRight = document.querySelector('.arrowWhiteRight');
let redLeft = document.querySelector('.arrowRedLeft');
let redRight = document.querySelector('.arrowRedRight');

function reset() {
   for (let i = 0; i < slides.length; i++){
      slidesContent[i].style.border = "2px solid aliceblue";
      points[i].style.width = "15px";
      points[i].style.background = "#FFFFFF";
   }
}
function startSlider() {
   reset();
   slidesContent[current].style.border = "2px solid #95a063";
   points[current].style.width = "45px";
   points[current].style.background = "#95a063";
}
startSlider();

arrowRight.addEventListener('click', goRight);
arrowRight.addEventListener('mouseover', overRight);
arrowRight.addEventListener('mouseout', outRight);

function overRight() {
   arrowRight.style.background = "#95a063";
   whiteRight.style.display = "block";
   redRight.style.display = "none";
}
function outRight() {
   arrowRight.style.background = "#FFF";
   whiteRight.style.display = "none";
   redRight.style.display = "block";
}
function goRight() {
   reset();

   let tmp = order + 1;
   let tmpC = tmp.toString();
   slides[current].style.order = tmpC;
   if (current === (slides.length - 1)) {
      for (let i = 0; i < slides.length; i++){
         slides[i].style.order = "0";
      }
      current = 0;
      slidesContent[current].style.border = "2px solid #95a063";
      points[current].style.width = "45px";
      points[current].style.background = "#95a063";
   } else {
      current++;
      slidesContent[current].style.border = "2px solid #95a063";
      points[current].style.width = "45px";
      points[current].style.background = "#95a063";
   }
}

arrowLeft.addEventListener('click', goLeft);
arrowLeft.addEventListener('mouseover', overLeft);
arrowLeft.addEventListener('mouseout', outLeft);

function overLeft() {
   arrowLeft.style.background = "#95a063";
   whiteLeft.style.display = "block";
   redLeft.style.display = "none";
}
function outLeft() {
   arrowLeft.style.background = "#FFF";
   whiteLeft.style.display = "none";
   redLeft.style.display = "block";
}
function goLeft() {
   reset();
   let tmp = order - 1,
      tmpC = tmp.toString();
   slides[current].style.order = tmpC;
   if (current === 0) {
      for (let i = 0; i < slides.length; i++){
         slides[i].style.order = "1";
      }
      current = slides.length - 1;
      slidesContent[current - 3].style.border = "2px solid #95a063"
      points[current - 3].style.width = "45px";
      points[current - 3].style.background = "#95a063";
   } else {
      current--;
      slidesContent[current + 1].style.border = "2px solid #95a063"
      points[current + 1].style.width = "45px";
      points[current + 1].style.background = "#95a063";
   }
   
}

points[0].addEventListener('click', point1);
points[1].addEventListener('click', point2);
points[2].addEventListener('click', point3);
points[3].addEventListener('click', point4);

function point1() {
   reset();
   current = 0;
   points[0].style.width = "45px";
   points[0].style.background = "#95a063";
   for (let i = 0; i < slides.length; i++){
      if (i === 0) {
         slidesContent[i].style.border = "2px solid #95a063";
         let tmp = order;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else {
         let tmp = order + 1;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      }
   }
}

function point2() {
   reset();
   current = 1;
   points[1].style.width = "45px";
   points[1].style.background = "#95a063";
   for (let i = 0; i < slides.length; i++){
      if (i === 1) {
         slidesContent[i].style.border = "2px solid #95a063";
         let tmp = order;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else if (i > 1) {
         let tmp = order;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else {
         let tmp = order + 1;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      }
   }
}
function point3(){
   reset();
   current = 2;
   points[2].style.width = "45px";
   points[2].style.background = "#95a063";
   for (let i = 0; i < slides.length; i++){
      if(i === 2) {
         slidesContent[i].style.border = "2px solid #95a063";
         let tmp = order;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else if (i > 2){
         let tmp = order + 1;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else {
         let tmp = order + 2;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      }
   }
}

function point4(){
   reset();
   current = 3;
   points[3].style.width = "45px";
   points[3].style.background = "#95a063";
   for (let i = 0; i < slides.length; i++){
      if(i === 3) {
         slidesContent[i].style.border = "2px solid #95a063";
         let tmp = order;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else if (i > 3){
         let tmp = order + 1;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      } else {
         let tmp = order + 2;
         let tmpC = tmp.toString();
         slides[i].style.order = tmpC;
      }
   }
}