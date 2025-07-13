const text=document.getElementById("text");
const list=document.getElementById("list");

function addtask(){
    if(text.value===''){
        alert("Must write something")}
        else{
            let li=document.createElement("li");
            li.innerHTML=text.value;
            list.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        text.value="";
        savedata();
}
list.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
e.target.classList.toggle("checked");
savedata();
}
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
savedata();
}
}, false);

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();