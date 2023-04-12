let InputButton = document.querySelector(".addForm button")
let InputField = document.querySelector("#inputField")
let listNum = 0 
listNum += localStorage.length


InputButton.addEventListener("click",readNStoreNDisplay)
// If the user press enter on the input field the page reloads, as I belive it wants to run script from the html but can't find and just reloads the site. Thus we need to store what the user wrote if the press enter. 
InputField.addEventListener("keydown",(key)=>{
    if(key.keyCode === 13){
        readNStoreNDisplay() 
    }
})


// readLSNDisplay stands for read Localstroage and dispplay
function readLSNDisplay(){


    if (localStorage.length === 0){
        console.log("Local stroage is emtpty")
        todoListCreat("Add task down below!")
    }else{
        i = 0
        while(localStorage.length > i){
            if(JSON.parse(localStorage.getItem(i)) === null){
                // console.log(i)
                
            }else{
                todoListCreat(JSON.parse(localStorage.getItem(i)).text,i)
                    if(JSON.parse(localStorage.getItem(i)).doneMark === true){
                        changeStatus(i,"LSLoad")
                    }
                
            }
            i += 1
        }
    }
}
readLSNDisplay()

function readNStoreNDisplay(){
    if(document.querySelector(".addForm input").value !=""){
        let inTodo = {
            text: document.querySelector(".addForm input").value,
            doneMark: false
        }
        
        todoListCreat(inTodo.text, listNum)
        
        let StringInTodo = JSON.stringify(inTodo)
        localStorage.setItem(listNum,StringInTodo)
        
        document.querySelector(".addForm input").value = ""
        listNum += 1
    }
}

// B at the end stands for Button
function todoListCreat(text,num){
    let todoLi = document.createElement("li")
    todoLi.classList.add("id"+ num)
    todoLi.appendChild(document.createTextNode(text))

    let todoSpan = document.createElement("span")
    todoLi.appendChild(todoSpan);

    let todoDoneB = document.createElement("button")
    todoDoneB.setAttribute("id","doneB")
    todoDoneB.appendChild(document.createTextNode("Done"))
    todoSpan.appendChild(todoDoneB)

    let todoRemoveB = document.createElement("button")
    todoRemoveB.setAttribute("id","removeB")
    todoRemoveB.appendChild(document.createTextNode("X"))
    todoSpan.appendChild(todoRemoveB)

    let todoListHtml = document.querySelector(".todoList")
    todoListHtml.appendChild(todoLi)
    idButton(num)
}

function idButton(idNum){
    let todoDoneB = document.querySelector(`.todoList .id${idNum} #doneB`)
    let todoRemoveB = document.querySelector(`.todoList .id${idNum} #removeB`)
    todoDoneB.addEventListener('click',()=>{changeStatus(idNum,"idButton")})
    todoRemoveB.addEventListener('click',()=>{removeTodo(idNum)})
}

function changeStatus(idNum,inFrom){
    let clickedTask = document.querySelector(`.todoList .id${idNum} #doneB`)
    clickedTask.classList.toggle("markedDone")
    // LS stands for Localstroage
    if(inFrom != "LSLoad"){
        let status = JSON.parse(localStorage.getItem(idNum)).doneMark
        if(status === false){
            status = true
        }else{
            status = false
        }
        tempLS = JSON.parse(localStorage.getItem(idNum))
        tempLS.doneMark = status
        let StringTempLs = JSON.stringify(tempLS)    
        localStorage.setItem(idNum, StringTempLs)
        console.log(localStorage.getItem(idNum))
    }
}

function removeTodo(idNum){
    let clickedTask = document.querySelector(`.todoList .id${idNum}`)
    clickedTask.remove()

    let i = 0
    while(localStorage.length > i){
        tempNextTodo = JSON.parse(localStorage.getItem(idNum+i))
        let StringTempNextTodo = JSON.stringify(tempNextTodo)
        localStorage.setItem(idNum,StringTempNextTodo)
        console.log(idNum)
        i += 1
    }
    
}