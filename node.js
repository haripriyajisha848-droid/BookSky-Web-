
    let a=document.querySelector(".popoverlay")
    let b=document.querySelector(".pop-up")
    let c=document.getElementById("add")
    c.addEventListener("click",function(event){
        event.preventDefault()
          a.style.display="block"
    b.style.display="block"

    })
  
 var f=document.getElementById("t")
 var g=document.getElementById("au")
 var h=document.getElementById("de")
 var i=document.querySelector(".two")
 var j=document.querySelector(".three")
 var d=document.getElementById("add1")
 d.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","three")
    div.innerHTML=`<h2>${f.value}</h2><h5>${g.value}</h5><p>${h.value}</p><button onclick="del(event)">Delete</button>`
    i.append(div)
    a.style.display="none"
    b.style.display="none"


 })
  let e=document.getElementById("cancel")
 e.addEventListener("click",function(event){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
 })

function del(event){
    event.target.parentElement.remove()
}