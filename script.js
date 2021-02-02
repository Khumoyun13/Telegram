let formElement = document.querySelector('.friend-form')
let textareaElement = document.querySelector('.friend-textarea')
let ulElement = document.querySelector('.main-ul')

let formElement1 = document.querySelector('.me-form')
let textareaElement1 = document.querySelector('.me-textarea')

formElement.onsubmit = function(event){
    event.preventDefault()


    let newLiElement = document.createElement('li')
    
    let newTextElement = document.createElement('p')
    newTextElement.classList.add('main-p', 'sent')
    newTextElement.textContent = textareaElement.value

    newLiElement.appendChild(newTextElement)
    ulElement.appendChild(newLiElement)

    formElement.reset()
    textareaElement.focus()
}


formElement1.onsubmit = function(event){
    event.preventDefault()


    let newLiElement1 = document.createElement('li')
    
    let newTextElement1 = document.createElement('p')
    newTextElement1.classList.add('main-p', 'received')
    newTextElement1.textContent = textareaElement1.value

    newLiElement1.appendChild(newTextElement1)
    ulElement.appendChild(newLiElement1)

    formElement1.reset()
}

let toggleButton = document.querySelector('.toggle-button')
let body = document.querySelector('body')
let toggleStatus =  document.querySelector('.toggle-status')

toggleButton.onclick = () => {
    body.classList.toggle('dark')

     var clicked = false
     if(!clicked){
         clicked = true
         toggleStatus.textContent = 'Turned on'
     }
     else{
         clicked = false    
         toggleStatus.textContent = 'Turned off'
     }
}

















// let body = document.querySelector('body')
// let header = document.querySelector('header')
// let main = document.querySelector('main')
// let textarea = document.querySelector('.friend-textarea')
// let textarea1 = document.querySelector('.me-textarea')
// let darkMode = document.querySelector('.dark-mode')

// darkMode.onclick = function() {
//     body.classList.toggle('dark')
//     header.classList.toggle('dark')
//     main.classList.toggle('dark-main')
//     textarea.classList.toggle('dark')
//     textarea1.classList.toggle('dark')
    
//     darkMode.classList.toggle('dark')
//     darkMode.style.color = 'lightseagreen'
// }

