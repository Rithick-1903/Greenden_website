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

var search=document.getElementById("search")
var product_container =document.getElementById("product_container")

var productlist = product_container.querySelectorAll("div")

search.addEventListener("keyup",function(event){
   var entervalue = event.target.value.toUpperCase()

   for(count=0; count<productlist.length; count=count+1)
{
    var productname=productlist[count].querySelector("h1").textContent

   if(productname.toUpperCase().indexOf(entervalue)<0)
   {
      productlist[count].style.display="none"
   }
   else{
      productlist[count].style.display="block"
   }
}

})
