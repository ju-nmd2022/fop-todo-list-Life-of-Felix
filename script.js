// Adding todos

let InputButton = document.querySelector(".addForm button")
let InputField = document.querySelector("#inputField")
let listNum = 0

InputButton.addEventListener("click",readNStore)
// If the user press enter on the input field the page reloads, as I belive it wants to run script from the html but can't find and just reloads the site. Thus we need to store what the user wrote if the press enter. 
InputField.addEventListener("keydown",(key)=>{
    if(key.keyCode === 13){
        readNStore() 
    }
})


function readNStore(){
    let inTodo = document.querySelector(".addForm input")

// Think on how to structur the array know which task is what task, aswell how do the button speficed itself from the others


    localStorage.setItem(listNum,inTodo.value)
    console.log(inTodo.value)
    inTodo.value = ''
}
console.log(localStorage.getItem(listNum)+ "    ///old value")

function idButton(idNum){
    let todoDoneB = document.querySelector(`.todoList .${idNum} #doneB`)
    let todoRemoveB = document.querySelector(`.todoList .${idNum} #removeB`)

    todoDoneB.addEventListener('click',changeStatus(idNum))
}
function changeStatus(idNum){
    console.log(idNum + "change that status")
}





// here we need to identify which once of the task buttons are press, so not all or something else turn done or gets remove.


// test ground, just to try to understand things right

// let id1 = {doneOrNah: "nicht", whoseWork: "Mia"}
// let id2 = {doneOrNah: "nicht", whoseWork: "Karl"}

// console.log(id1)
// console.log(id2.doneOrNah)