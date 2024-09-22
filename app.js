const myInput = document.querySelector('#count')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')

const myInput2 = document.querySelector('#count2')
const minusBtn2 = document.querySelector('#minus2')
const plusBtn2 = document.querySelector('#plus2')

const moment = document.querySelector('#moment')
const moment2 = document.querySelector('#moment2')
const amount = document.querySelector('#amount')
const deleteBtn = document.querySelector('#delete')
const deleteBtn2 = document.querySelector('#delete2')

myInput.placeholder = '0'
myInput.style.paddingTop = '5px'
myInput.style.paddingBottom = '5px'
myInput.style.paddingLeft = '27px'
myInput.style.paddingRight = '27px'
myInput.style.fontSize = '14px'
myInput.style.fontWeight = '500'
myInput.style.lineHeight = '30px'
myInput.style.letterSpacing = '-0.02em'

// 

myInput2.placeholder = '0'
myInput2.style.paddingTop = '5px'
myInput2.style.paddingBottom = '5px'
myInput2.style.paddingLeft = '27px'
myInput2.style.paddingRight = '27px'
myInput2.style.fontSize = '14px'
myInput2.style.fontWeight = '500'
myInput2.style.lineHeight = '30px'
myInput2.style.letterSpacing = '-0.02em'

// 

plusBtn.onclick = () => {
    let action = '+'
    if(action === '+'){
        myInput.value++
    }
}

minusBtn.onclick = () => {
    let action = '-'
    if(action === '-' && myInput.value > 0){
        myInput.value--
    }
}

// 

plusBtn2.onclick = () => {
    let action = '+'
    if(action === '+'){
        myInput2.value++
    }
}

minusBtn2.onclick = () => {
    let action = '-'
    if(action === '-' && myInput2.value > 0){
        myInput2.value--
    }
}

// 

deleteBtn.onclick = () => {
    moment.remove()
}

deleteBtn2.onclick = () => {
    moment2.remove()
    amount.remove()
}