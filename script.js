var input1=document.getElementById("userinput");
var button=document.getElementById("button");
var del=document.querySelectorAll(".Delete");
var list= document.querySelectorAll("li");
var ul= document.querySelector("ul");
function validateInputLength(){
   return input1.value.length;
}
function callForDeleting(){
    var del=document.querySelectorAll(".Delete");
    del.forEach(btn => {
        btn.addEventListener("click",function() {
            var li=this.parentNode;
            li.remove()
        })
    })
}
function addLi(){
    var li= document.createElement("li");
        li.appendChild(document.createTextNode(input1.value));
        ul.appendChild(li);
        input1.value="";
        // li.innerHTML='<button class="Delete">Delete</button>';
        var btn= document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        var att=document.createAttribute("class");
        att.value="Delete";
        btn.setAttributeNode(att)
        console.log(btn.className)
        li.appendChild(btn);
         callForDeleting()
}
function addListAfterClicked(){
    if(validateInputLength()>0){
        addLi()
    }
}
function addListAfterEnterPressed(event){
    if(validateInputLength()>0 & event.keyCode===13){
        addLi()
    }
}
function removeListAfterClicked(event){
    var li=this.parentNode;
    // var ul= document.querySelector("ul");
    // list.removeChild(li);
    // console.log(li.value)
    li.remove()
}
button.addEventListener("click",addListAfterClicked)
input1.addEventListener("keypress",addListAfterEnterPressed)
callForDeleting()

