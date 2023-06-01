const addTaskButton = document.getElementById('addTaskButton')
const inputTask = document.getElementById('input_area')
const out1 = document.getElementById('tasks')
const paragraph = document.querySelectorAll('.paragraph')
const tasks = document.querySelectorAll('.tasks')

let n=0


addTaskButton.addEventListener("click", ()=>{
   
    
    Number(n)
    n=n+1
    const textNode = document.createTextNode(inputTask.value)
    const output= out1.innerHTML
    
    
    if(inputTask.value== false){
        alert("PLEASE ENTER YOUR TASK!")
    }else{
        const node = document.createElement("li")
        node.textContent = inputTask.value
        
        out1.append(node);
        node.classList.add(n)
        inputTask.value=" "
    }
    
    tasks.forEach(list => {
        list.addEventListener("click", (e)=>{
            const list = e.target
            list.style.textDecoration = "line-through"
            console.log("hi")
        })
    });
    
})



// node.addEventListener("click",()=>{
//     console.log("hi")
// })