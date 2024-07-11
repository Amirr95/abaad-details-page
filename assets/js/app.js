// bootstrap required variable




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// project required variable


let weatherForecast = document.getElementById("weatherForecast")
let advicesBoxBtn = document.getElementById("advicesBoxBtn");
let forecastBoxBtn = document.getElementById("forecastBoxBtn");
let arrowWrapper = document.getElementById("arrowWrapper");
let advicesUnderLine = document.getElementById("advicesUnderLine");
let weaderUnderLine = document.getElementById("weaderUnderLine");
let adviceLine = document.getElementById("adviceLine");
let weatherLine = document.getElementById("weatherLine");
let ShowHint = document.getElementById("ShowHint")

// box`s for show (display  block and none)

let hotttext =document.getElementById("hotttext");
let betterflyWoodEatBox =document.getElementById("betterflyWoodEatBox");
let coldNeededBox =document.getElementById("coldNeededBox");
let allHot = document.getElementById("allHot")

// handlers that will click on them

let coldNeededHandler = document.getElementById("coldNeededHandler")
let betterflyHandler = document.getElementById("betterflyHandler")
let HottedHandler = document.getElementById("HottedHandler")

// text in the handlers

let textcoldNeededHandler = document.getElementById("textcoldNeededHandler")
let textBetterflyHandler = document.getElementById("textBetterflyHandler")
let hottedtextHandler = document.getElementById("hottedtextHandler")
let stickToHead = document.getElementById("stickToHead"); 
let header = document.getElementById("header")
let table = document.getElementById("table")
let showDays = document.getElementById("showDays")
let hintShow = document.getElementById("hintShow")
 let dayHeader = document.getElementById("stablePosition")
// let stablePosition = document.getElementById("stablePosition")

// x-scrolls and y-scrolls 

let saterClick = document.getElementById("saterClick");
let sundayClick = document.getElementById("sundayClick");
let mondayClick = document.getElementById("mondayClick");
let tuesClick = document.getElementById("tuesClick");
let wensClick = document.getElementById("wensClick");
let thursClick = document.getElementById("thursClick");
let friClick = document.getElementById("friClick");

console.log(friClick);

let advices = document.getElementById("advices");

let One = document.getElementById("One")
let Tow = document.getElementById("Tow")
let Three = document.getElementById("Three")
let Four = document.getElementById("Four")
let Five = document.getElementById("Five")
let Six = document.getElementById("Six")
let seven = document.getElementById("seven")

let wrapperscroll = document.getElementById("wrapperscroll")
let nextScrollBtn =document.getElementById("nextScrollBtn")
let perScrollBtn = document.getElementById("perScrollBtn")

let perImage = document.getElementById("perImage")
let nextImage = document.getElementById("nextImage")


// here i tested a simple function with (add event listener  and pure function) it dosent work


let mobile__wrapper = document.getElementById('mobile__wrapper')

wrapperscroll.addEventListener('scroll' , function(){
if(wrapperscroll.scrollLeft === 0){
  perImage.style.display = 'inline'
}else{
  perImage.style.display = 'inline'
}
}
)
if (mobile__wrapper.innerWidth > 943){
}else{
let clickCount = 1;
nextScrollBtn.addEventListener(  'click' , function(){

wrapperscroll.scrollBy(-110,0)


  clickCount++;
  
  if (clickCount === 1) { //شنبه
    perImage.style.display = 'none'
  One.click()
 
  } else if (clickCount === 2) { // یکشنبه
Tow.click()

perImage.style.display = 'inline'

  }else if (clickCount === 3) { // دوشنبه

Three.click()
perImage.style.display = 'inline'
  }else if (clickCount === 4) { // سه شنبه
    

Four.click()
perImage.style.display = 'inline'
  }else if (clickCount === 5) { // چهارشنبه

Five.click()
perImage.style.display = 'inline'
  }else if (clickCount === 6) { // پنجشنبه
   
Six.click()
perImage.style.display = 'inline'
  }else if (clickCount === 7) { // جمعه
  
seven.click()
perImage.style.display = 'inline'
  }else if (clickCount  > 7) {

    clickCount = 1;
    One.click();
    perImage.style.display = 'none'
    
  }

}  )

console.log(clickCount);

perScrollBtn.addEventListener(  'click' , function(){

  wrapperscroll.scrollBy(110,0)
nextImage.style.display = 'inline'

 clickCount--; 
 if (  clickCount < 1 ){

  clickCount = 1
  One.click();
}


}  )


}



// automatic scroll in days weather 





mobile__wrapper.addEventListener('scroll', function() {
  var verticalScroll = window.scrollY;
  this.document.getElementById('wrapperscroll').scroll( -verticalScroll / 7   ,  0);
});

One.style.boxShadow = "2px 2px 7px darkgray";
One.style.border = "3px black  dashed";
// choosing selected day base by y scroll in window

mobile__wrapper.addEventListener(  'scroll' ,  function(){

if (mobile__wrapper.scrollY <= 530){


One.style.boxShadow = "2px 2px 7px darkgray";
Tow.style.boxShadow = "none";
Three.style.boxShadow = "none";
Four.style.boxShadow = "none";
Five.style.boxShadow = "none";
Six.style.boxShadow = "none";
seven.style.boxShadow = "none";

One.style.border = "3px black  dashed";
Tow.style.border = "1px black solid";
Three.style.border = "1px black solid";
Four.style.border = "1px black solid";
Five.style.border = "1px black solid";
Six.style.border = "1px black solid";
seven.style.border = "1px black solid";

}
else if (mobile__wrapper.scrollY > 530  &&  mobile__wrapper.scrollY < 1050){



  One.style.boxShadow = "none";
  Tow.style.boxShadow = "2px 2px 7px darkgray ";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black solid ";
  Tow.style.border = "3px black  dashed";
  Three.style.border = " 1px black solid  ";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";


}
else if (mobile__wrapper.scrollY >1050   &&  mobile__wrapper.scrollY < 1600){



  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "2px 2px 7px darkgray ";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "3px black  dashed";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}
else if (mobile__wrapper.scrollY >1600   &&  mobile__wrapper.scrollY < 2100 ){

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "2px 2px 7px darkgray ";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black solid ";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "3px black  dashed";
  Five.style.border = " 1px black solid  ";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}
else if (mobile__wrapper.scrollY >2100   &&  mobile__wrapper.scrollY < 2600 ){

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "2px 2px 7px darkgray ";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "3px black  dashed";
  Six.style.border = "1px black solid";
  seven.style.border = "1px black solid";
}else if (mobile__wrapper.scrollY  > 2600 && mobile__wrapper.scrollY < 3130  ){


  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "2px 2px 7px darkgray ";
  seven.style.boxShadow = "none";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "3px black  dashed";
  seven.style.border = "1px black solid";
}else if (mobile__wrapper.scrollY > 3130 ){

  

  One.style.boxShadow = "none";
  Tow.style.boxShadow = "none";
  Three.style.boxShadow = "none";
  Four.style.boxShadow = "none";
  Five.style.boxShadow = "none";
  Six.style.boxShadow = "none";
  seven.style.boxShadow = "2px 2px 7px darkgray ";
  
  One.style.border = "1px black  solid";
  Tow.style.border = "1px black solid";
  Three.style.border = "1px black solid";
  Four.style.border = "1px black solid";
  Five.style.border = "1px black solid";
  Six.style.border = "1px black solid";
  seven.style.border = "3px black  dashed";
}

  
}  )



// click function in days will bring you there


saterClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 0  )
} )
sundayClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 550  )
} )
mondayClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 1100  )
} )
tuesClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 1650  )
} )
wensClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 2150  )
} )
thursClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 2650  )
} )
friClick.addEventListener( 'click' , function(){
mobile__wrapper.scrollTo( 0 , 3230  )
} )







// this code  will  show three btn in advices page

betterflyWoodEatBox.style.display = 'none'
coldNeededBox.style.display = 'none'



coldNeededHandler.addEventListener( 'click', function(){

// show and hide the boxes

  hotttext.style.display = "none"
  betterflyWoodEatBox.style.display = "none"
  coldNeededBox.style.display = "block"
allHot.style.display = 'none'

// changes in the buttons



// oder btns style changes (second one)




// third one changes




} )
betterflyHandler.addEventListener( 'click', function(){

  hotttext.style.display = "none"
  betterflyWoodEatBox.style.display = "block"
  coldNeededBox.style.display = "none"
allHot.style.display = 'none'

// changes in the buttons



// oder btns style changes (second one)




// third one changes






} )
HottedHandler.addEventListener( 'click', function(){

  hotttext.style.display = "block"
  betterflyWoodEatBox.style.display = "none"
  coldNeededBox.style.display = "none"
allHot.style.display = 'block'

// changes in the buttons



// oder btns style changes (second one)




// third one changes




} )

// function that show or hidden the weather pages and advices page

weatherLine.style.borderBottom = '1px solid black'
forecastBoxBtn.style.fontWeight = 'bold'
advices.style.display = 'none'


advicesBoxBtn.addEventListener(  'click'  ,  function(){ // 

  adviceLine.style.borderBottom = '1px solid black'
    weatherLine.style.borderBottom = 'none'
  weatherForecast.style.display = 'none';
  advices.style.display = 'block'
dayHeader.style.display = 'none'
hintShow.style.display = 'none'
forecastBoxBtn.style.fontWeight = 'normal'
adviceLine.style.fontWeight = 'bold';
 document.getElementById("theTopDay").style.display = 'none'
 HottedHandler.style.backgroundColor = ""
}   )

forecastBoxBtn.addEventListener('click' , function(){

      weatherLine.style.borderBottom = '1px solid black'
    adviceLine.style.borderBottom = 'none'
   advices.style.display = 'none'
weatherForecast.style.display = 'block'
hintShow.style.display = 'block'
forecastBoxBtn.style.fontWeight = 'bold'
adviceLine.style.fontWeight = 'normal'
 document.getElementById("theTopDay").style.display = 'block'
dayHeader.style.display = 'block'
})







