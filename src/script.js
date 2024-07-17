const createBubbles = function(){
    let clutter = "";
    for(let i=0; i<168 ; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}

let timerVal = 5;
const runTimer = function(){
    let timerInt = setInterval(function(){
        if(timerVal > 0){
            timerVal--;
            document.querySelector("#timer-val").textContent = timerVal;
        } else{
            clearInterval(timerInt);
            document.querySelector(".panel-bottom").innerHTML = `<h1 id="game-over">Game Over!</h1><br/><p>Click on this area to restart.</p>`;
            document.querySelector(".panel-bottom").addEventListener("click", function(){ location.reload(); });
        }
    }, 1000);
}

let hitNumber = 0
const generateHit = function(){
    hitNumber = Math.floor(Math.random()*10);
    document.querySelector("#hit-val").textContent = hitNumber;
    return hitNumber;
}

let score = 0;
const showScore = function(){
    document.querySelector(".panel-bottom").addEventListener('click', function(e){
        let choiceNumber = e.target.textContent;
        if(hitNumber == choiceNumber){
            score += 10;
            document.querySelector("#score-val").textContent = score;
        } else{
            if(timerVal != 0) alert("Wrong Choice!!");
        }
        createBubbles();
        generateHit();
    });
}

createBubbles();
runTimer();
showScore();