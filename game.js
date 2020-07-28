const items = document.querySelectorAll('.item');
const gridArray = Array.from(items);
let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = 'playerX';

window.addEventListener('click',(e)=>{
  let index = gridArray.indexOf(e.target) + 1;
  if (items[index - 1].classList.contains('playerX') || items[index - 1].classList.contains('computer')){
    return;
  }
  if(currentPlayer === "playerX"){
    items[index-1].classList.add('playerX');
    tracking.splice(tracking.indexOf(index), 1);
    console.log(tracking)
    currentPlayer = 'computer';
  }else{
    const random = computerMove();
    // console.log(tracking)
    tracking.splice(tracking.indexOf(random), 1);
    console.log(tracking)
    // console.log(random)
    // gridArray[index-1].classList.add('computer');
    currentPlayer = 'playerX';
  }
});

function computerMove(){
  const random = Math.floor(Math.random() * tracking.length);
  const computerMoveNr = tracking[random];
  console.log(computerMoveNr)
  items[computerMoveNr].classList.add('computer');
  return computerMoveNr;
}