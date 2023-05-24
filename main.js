let count = 0
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
appHeader.style.backgroundColor = "red"

const counterDiv = document.createElement('div')
counterDiv.className = "inner-divs"
counterDiv.style.justifyContent = "space-evenly"

const iconDiv = document.createElement('div')
iconDiv.className = "inner-divs"

innerContainer.appendChild(appHeader);
innerContainer.appendChild(counterDiv);
innerContainer.appendChild(iconDiv);

//Star
const star = document.createElement('div')
star.className = "stars"
const starImage = document.createElement("IMG");
starImage.setAttribute('src', 'star.png')
starImage.id = "star-image";
star.appendChild(starImage)
iconDiv.appendChild(star)

//Buttons
const removeBtn = document.createElement('button')
removeBtn.className = 'buttons'
removeBtn.innerHTML = ('remove 1')
counterDiv.appendChild(removeBtn)
const countText = document.createElement('h3')
counterDiv.appendChild(countText);
const addBtn = document.createElement('button')
addBtn.className = 'buttons'
addBtn.innerHTML = ('add 1')
counterDiv.appendChild(addBtn)

removeBtn.addEventListener('click', ()=>{
    console.log(count)
    return remove()

})

addBtn.addEventListener('click', ()=>{
    console.log(count)
    return add()

})
//Counter

const add = () => {
    
    if(count < 5){
        return count++;
    }
}

const remove = () => {
    
    if(count <= 5 && count > 0){
        return count--;
    }
}



countText.innerHTML = count;

// body.style.backgroundColor = "red";