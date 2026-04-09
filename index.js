//Selecting Side nav

var sidenav=document.getElementById("sidenav")
var menu=document.getElementById("menu")
menu.addEventListener("click",function(){
    sidenav.style.right=0
})

var close=document.getElementById("close_nav")
close.addEventListener("click",function(){
    sidenav.style.right="-50%"

})
