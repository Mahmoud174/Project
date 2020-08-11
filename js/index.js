/* page1 */
$(".menu-bar").click(function(){
    $(".list").toggleClass("active");
});
/* page2 */
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["apps","wepsite","software"];
const typingDelay = 40;
const erasingDelay = 60;
const newTextDelay = 600;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
if(charIndex < textArray[textArrayIndex].length){
typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type,typingDelay); 
}else{
setTimeout(erase,newTextDelay)
}
}
function erase(){
if(charIndex>0){
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,erasingDelay);
}
else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length)textArrayIndex=0;
    setTimeout(type,typingDelay)
}
}
document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type , 500)
});


/* page3 */
$('.content1').addClass('activeCon');
$('.tap1').attr('disabled','disabled');
$('.tap1').addClass('activeLine');
var content1 = $('.content1');
var content2 = $('.content2');
var content3 = $('.content3');


$('.tap2').click(function(){
if(!$(this).hasClass("activeCon")){    
var activeCon=$('.activeCon');
var activeLine=$('.activeLine');
activeCon.removeClass('activeCon');
content2.addClass('activeCon');
activeLine.removeClass('activeLine');
$(this).addClass('activeLine');
$('.tap2').attr('disabled','disabled');
$('.tap1').removeAttr("disabled");
$('.tap3').removeAttr("disabled");
}
else{
    $('.tap2').attr('disabled','disabled');
}
})


$('.tap3').click(function(){
if(!$(this).hasClass("activeCon")){    
var activeCon=$('.activeCon');
var activeLine=$('.activeLine');
activeCon.removeClass('activeCon');
content3.addClass('activeCon');
activeLine.removeClass('activeLine');
$(this).addClass('activeLine');
$('.tap3').attr('disabled','disabled');
$('.tap1').removeAttr("disabled");
$('.tap2').removeAttr("disabled");
}
else{
$('.tap3').attr('disabled','disabled');
}
})


$('.tap1').click(function(){
if(!$(this).hasClass("activeCon")){    
var activeCon=$('.activeCon');
var activeLine=$('.activeLine');
activeCon.removeClass('activeCon');
content1.addClass('activeCon');
activeLine.removeClass('activeLine');
$(this).addClass('activeLine');
$('.tap1').attr('disabled','disabled');
$('.tap2').removeAttr("disabled");
$('.tap3').removeAttr("disabled");
}
else{
$('.tap1').attr('disabled','disabled');
}
})


/* page5 */
T=true;
$(window).scroll(function() {
if( $(".icones-box").css('animation-name')=='bounceIn' && T) {
var $svg = $ ('svg').drawsvg({
    duration: 2000
}
);
$svg.drawsvg('animate');
T=false;
}})


/* page6 */ 
$(document).ready(function(){
$('.filters li').click(function(){
$('.filters li').removeClass('active6');
$(this).addClass('active6');

});
});

var mixer = mixitup('.info6');


/*page8 */ 
C=true;
$(window).scroll(function() {
if( $(".counter").css('animation-name')=='bounceIn' && C) {
var $svg = $ ('svg').drawsvg({
    duration: 2000
}
);
$svg.drawsvg('animate');
C=false;
$('.number-count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 1500,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
};
})

/* nav scroll  */
let info1_Offset = $('.info1').offset().top;
let img_src2="images/logo-dark.png";
let img_src1="images/logo-light.png";
$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>=info1_Offset)
    {
        $("#nav").css('background-color','#fff');
        $("#nav .icones ul").css('color','black');
        $("#nav .line").css('background-color','#eee');
        $("#nav .list ul li a").css('color','black');
        $("#nav .logo a img").attr("src",img_src2);
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#nav").css('background-color','transparent');
        $("#nav .line").css('background-color','rgba(255, 255, 255, 0.2)');
        $("#nav .icones ul").css('color','#fff');
        $("#nav .list ul li a").css('color','#fff');
        $("#nav .logo a img").attr("src",img_src1);
        $("#btnUp").fadeOut(500);
    }

})


$("#btnUp").click(function(){
$("body").animate({scrollTop:0},1000);
})

$("a[href^='#']").click(function(){
    let href = $(this).attr("href");
    $("body").animate({scrollTop:$(href).offset().top},1000);

})


/* loading */ 
$(document).ready(function(){

    $(".loading").fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });
})