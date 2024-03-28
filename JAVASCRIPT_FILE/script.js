let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset_btn");


// Start here to new game is here all section 
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let playerwin = document.querySelector("#winer");

let turnO = true;
//here access to all element 
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// If i want to play game again or quite game between so create new functio
const resetGame = () =>{
    turnO = true;
    enaableBoxes();
    msgContainer.classList.add("hide");
}

//Here access to all array index vlaue and Gieven the turn
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerHTML ="X";
        if(turnO){
            box.innerHTML ="O";
            turnO = false;
        } else {
            box.innerHTML ="x";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
// After winner declaired  Then not click any boxes so create a new function
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true; 
    }
}
//After declare winner start again game so create a new function
const enaableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false; 
        box.innerText = "";
    }
}
//Create new funtion those declaire to who is winner and congratulatio 
const showwinner =(winner) =>{
    playerwin.innerHTML =`congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
//And here to access all  index value and check the who is winner 
const checkwinner = () =>{
 for( let pattern of winpatterns){
    // console.log(   <- uising this method acces to all element individualy and also change the value ->
    //     boxes[pattern[0]].innerText,  //this is first value  
    //     boxes[pattern[1]].innerText,  //this is second value
    //     boxes[pattern[2]].innerText   //this is third vlaue
    //     );
   let pos1value =  boxes[pattern[0]].innerText;  //this is first value   
   let pos2value =  boxes[pattern[1]].innerText;  //this is second value
   let pos3vlaue =  boxes[pattern[2]].innerText;  //this is third vlaue
   
   if(pos1value != "" && pos2value != "" && pos3vlaue !=""){
    if(pos1value === pos2value && pos2value === pos3vlaue){
        console.log("winner",pos1value);// it is no enastial 
        showwinner(pos1value)
    }
   }

 }
}
//here to add all button in addEventlistener 
newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);
