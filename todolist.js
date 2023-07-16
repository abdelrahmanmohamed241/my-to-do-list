let submit=document.querySelector(".plus")
let task=document.querySelector(".task")
let parking=document.querySelector(".park")
let ul=document.querySelector('.tasks')
document.addEventListener('click',function(e){
if(e.target.style.color=='rgb(251, 24, 24)'){
    e.target.parentNode.remove()
    let tasks2=ul.innerHTML
    localStorage.setItem('tasks',tasks2)
}else if(e.target.style.color=='rgb(56, 176, 54)'){
        e.target.parentNode.classList.toggle("finished")
        let tasks3=ul.innerHTML
        localStorage.setItem('tasks',tasks3)
    }
    })
/*let li=document.createElement('li')
let trash=document.createElement('i')
let correct=document.createElement('i')
correct.innerHTML=`<i class="fa-solid fa-check" style="color: #38b036;"></i>`;
let c=correct.innerHTML
trash.innerHTML=`<i class="fa-solid fa-trash off" style="color: #fb1818;"></i>`;
let t=trash.innerHTML*/
document.addEventListener('DOMContentLoaded',()=>{
task.onkeyup= ()=>{
    if (task.value.length>0){
submit.onclick=()=>{
    localStorage.setItem('tasks',"")
        let tasks=localStorage.getItem('tasks')
  const taskvalue=task.value;
  ul.append(parking)
    parking.innerHTML+=`
    <div class="u bg-white w-50 mt-2 rounded-pill">
    <span class="taskname padding:5px;">
    ${taskvalue}
    </span>
    <i class="fa-solid fa-check pb " style="color: #38b036;cursor: pointer;padding:5px;"></i>
    <i class="fa-solid fa-trash k " style="color: #fb1818;cursor: pointer;padding:5px;"></i>
    </div>`
    tasks=ul.innerHTML
    localStorage.setItem('tasks',tasks)
    task.value=""
}
}
/*var canceliing=document.querySelectorAll('.fa-trash')
for(var i=0;i<canceliing.length;i++){
    canceliing.onclick=()=>{
        console.log(canceliing[i])
    }
}*/
}
})
document.addEventListener('DOMContentLoaded',function(){
        ul.innerHTML=localStorage.getItem('tasks') 
})
/*document.addEventListener('DOMContentLoaded',function(){
    if (!localStorage.getItem('tasks')){
        localStorage.setItem('tasks',"add new tasks")
    }
})
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#submit').disabled=true;
document.querySelector('#task').onkeyup= ()=>{
    if (document.querySelector('#task').value.length>0){
        document.querySelector('#submit').disabled=false;
    }else{
        document.querySelector('#submit').disabled=true;
    }
}
})
let ul=document.querySelector('#tasks')
ul.style.fontSize="20px"
document.querySelector('form').onsubmit=()=>{
    const task=document.querySelector('#task').value;
    let tasks=localStorage.getItem('tasks')
    let li=document.createElement('li')
    ul.append(li)
    li.innerHTML=task
    tasks=ul.innerHTML
    localStorage.setItem('tasks',tasks)
}
document.addEventListener('DOMContentLoaded',function(){
    ul.innerHTML=localStorage.getItem('tasks') 
})*/