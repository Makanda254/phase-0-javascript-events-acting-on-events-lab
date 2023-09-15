// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
      
        if (left > 0) {
          dodger.style.left = `${left - 1}px`;
        }
}


function moveDodgerRight(){
    const left = parseInt(dodger.style.left);
    const right = left + 1;
    if (right + 40 <= 400) { 
      dodger.style.left = `${right}px`;
 }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else if (e.key === 'ArrowRight') {
        moveDodgerRight();
      }
  });

