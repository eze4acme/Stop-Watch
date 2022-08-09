const timeDisplayEl = document.querySelector('.time-display');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('pause');
const resetEl = document.getElementById('reset');


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
startEl.addEventListener('click', () =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
})
stopEl.addEventListener('click', () =>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId)
    }

})
resetEl.addEventListener('click', () =>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    paused = true;
    intervalId;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplayEl.innerHTML = `00:00:00`

})

function updateTime() {
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime/1000) % 60);
    mins = Math.floor((elapsedTime / (1000*60)) % 60);
    hrs = Math.floor ((elapsedTime / (1000 * 60 * 60)) % 60);
    if(secs < 10){
        secs ='0' + secs;
    }
    if(mins < 10){
        mins ='0' + mins;
    }
    if(hrs < 10){
    hrs ='0' + hrs;
    }
   timeDisplayEl.innerHTML = `${hrs}:${mins}:${secs}`
}