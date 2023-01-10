document.addEventListener("DOMContentLoaded", () => {

document.querySelector("#addBtn").onclick = newElement
document.querySelector("#error").onclick = errorOff

let todos = []

class Todo {
    constructor(name){
        this.name = name
        this.completed = false
    }
}

getTodos()

function addNewTodo(name){
    let temp = new Todo(name)
    todos.push(temp)
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos(){
    todos = JSON.parse(localStorage.getItem("todos"))
    
    if(!todos) todos = []
    todos.forEach(item=>{
        let name = item.name
        let completed = item.completed
        let li = document.createElement("li")
        let txt = document.createTextNode(name)
        li.appendChild(txt)
        if(completed) li.classList = "checked"
        updateListItem(li)
        document.querySelector("ul").appendChild(li)
    })
}

/*
    let myNodeList = document.querySelectorAll("li")
    
    myNodeList.forEach(item => {
        updateListItem(item)
    })
  */  
    function newElement(){
        let inputValue = document.querySelector("input").value
        
        if (inputValue.length > 0) {
            let li = document.createElement("li")
            li.innerHTML = inputValue
            document.querySelector("ul").appendChild(li)
            document.querySelector("input").value = ""
            updateListItem(li)

            addNewTodo(inputValue)
            saveTodos()
        } else {
            errorOn()
        }
    }

    function errorOn() {
        document.getElementById("error").style.display = "flex";
      }
      
      function errorOff() {
        document.getElementById("error").style.display = "none";
      }

      function updateListItem(item) {
        let span = document.createElement("span")
        let txt = document.createTextNode("\u00D7")
        span.className = "close"
        span.onclick = function () {
            this.parentElement.style.display = "none"

            let index = todos.findIndex(i => i.name === (item.childNodes[0].textContent))

            todos.splice(index, 1)
            saveTodos()
        }


        
        span.appendChild(txt)
        item.appendChild(span)
        item.onclick = function () {
            this.classList.toggle("checked")

            let temp = todos.find(i => i.name === (this.childNodes[0].textContent))
            if(temp.completed) temp.completed = false
             else temp.completed = true
            saveTodos()
        }
      }


})