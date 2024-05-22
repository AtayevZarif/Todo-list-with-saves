let form = document.querySelector("form")
let input = document.querySelector("#input")
let text = document.querySelector("i")
let inputValue = input.value

input.value = localStorage.getItem("textValue")
text.innerHTML = localStorage.getItem("textValue")
text.className = localStorage.getItem("textClass")

let myFunction = (event) =>{
    event.preventDefault()
    let inputValue = input.value

    if (inputValue != "") {
        localStorage.clear()
        localStorage.setItem("textClass", "text")
        localStorage.setItem("textValue", inputValue)

        text.className = localStorage.getItem("textClass")        
        text.innerHTML = localStorage.getItem("textValue")
    }
}

form.addEventListener("submit", myFunction)