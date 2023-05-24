//Body
const body = document.querySelector('body');


//containers
const outerContainer = document.createElement('div')
body.appendChild(outerContainer);
outerContainer.id = 'outer-container'
const innerContainer = document.createElement('div')
outerContainer.appendChild(innerContainer)
innerContainer.id ='inner-container'




//inner-divs
const appHeader = document.createElement('div')
appHeader.className = "inner-divs"

const counterDiv = document.createElement('div')
counterDiv.className = "inner-divs"

const iconDiv = document.createElement('div')
iconDiv.className = "inner-divs"

innerContainer.appendChild(appHeader);
innerContainer.appendChild(counterDiv);
innerContainer.appendChild(iconDiv);



//Buttons
const decreaseBtn = document.createElement('button')
decreaseBtn.innerHTML = ('remove 1')
const increaseBtn = document.createElement('button')
increaseBtn.innerHTML = ('add 1')

//Counter
let count = 0
const counter = (param) => {
    
    if(param === 'increase'){

        return count ++;
    }else if( param === 'decrease'){
        return count --;

    }
}





body.appendChild(outerDiv);
// body.style.backgroundColor = "red";