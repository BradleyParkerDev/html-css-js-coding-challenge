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
const logo = document.createElement('p')
logo.innerText = 'LOGO';
logo.style.fontWeight =  "bold"
const menu = document.createElement('p')
menu.innerText = "menu";
appHeader.appendChild(logo)
appHeader.appendChild(menu)
appHeader.style.justifyContent = "space-evenly"
logo.style.marginRight = "60%"
logo.style.marginTop = "10%"
menu.style.marginTop = "10%"



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


//Buttons
const removeBtn = document.createElement('button')
removeBtn.className = 'buttons'
removeBtn.innerHTML = ('Remove 1')
counterDiv.appendChild(removeBtn)
const countText = document.createElement('h3')
countText.innerHTML = `${count}`;

counterDiv.appendChild(countText);
const addBtn = document.createElement('button')
addBtn.className = 'buttons'
addBtn.innerHTML = ('Add 1')
counterDiv.appendChild(addBtn)

//Button Event Listeners
removeBtn.addEventListener('click', ()=>{
    return remove()
})

addBtn.addEventListener('click', ()=>{
    return add()
})



//Counters
const add = () => {
    
    if(count < 5){
        count++;
        countText.innerHTML = `${count}`;
        iconDiv.appendChild(star)

        console.log(count)

    }
}

const remove = () => {
    
    if(count <= 5 && count > 0){
        count--;
        countText.innerHTML = `${count}`;
        iconDiv.removeChild(star)

        console.log(count)

    }
}




// body.style.backgroundColor = "red";