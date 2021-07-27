const textBox = document.getElementById("textBox")
const taskButton = document.getElementById("taskButton")
const taskUL = document.getElementById("taskUL")
const compleatedUL = document.getElementById("compleatedUL")
const taskArray = []

taskButton.addEventListener("click", function(){
    const task = textBox.value
    const taskLI = document.createElement("li")
    const removeButton = document.createElement("button")
    const checkBox = document.createElement("input")
    removeButton.innerHTML = "Remove"
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "flexCheckIndeterminate")
    removeButton.setAttribute("class", "btn btn-primary")
    taskLI.appendChild(checkBox)
    taskLI.append(task)
    taskLI.appendChild(removeButton)
    taskUL.append(taskLI)

    checkBox.addEventListener("change", function(){
        if(checkBox.checked == true){
            compleatedUL.appendChild(this.parentElement)
        }
        if(checkBox.checked == false){
            taskUL.appendChild(this.parentElement)
        }
        
        
    })

    

    removeButton.addEventListener("click", function(){
        if(this.parentElement.parentElement == taskUL){
            taskUL.removeChild(this.parentElement)
        }
        if(this.parentElement.parentElement == compleatedUL){
            compleatedUL.removeChild(this.parentElement)
        }
    })

}) 
