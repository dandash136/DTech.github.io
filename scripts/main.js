//let#s tstart javascripz code 
let myImage = document.querySelector('img');
myImage.onclick = function() {
     if(myImage.getAttribute('src') === 'images/my-image.jpg'){
          myImage.setAttribute('src' , 'images/kirby.jpg');
     } else {
          myImage.setAttribute('src' , 'images/my-image.jpg');
     }

}// works great 
/*Now lets set a petrsonaliozed welcome message when th esite start*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//function setName declaration

function setName() {
     let myName = prompt('What is u re name pleaz ? ');
     if (!myName){
          setName();
     }else {
     localStorage.setItem('name' , myName);
     myHeading.setContent = 'Mozilla is cool ' + myName;
     }
     
}

if(!localStorage.getItem('name') ){
     setName();
}else {
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'Mozilla is cool ' + storedName;
}

myButton.onclick = function() {
     setName();
}