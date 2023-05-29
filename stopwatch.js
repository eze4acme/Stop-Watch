const btnEl = document.querySelectorAll('button')
const timeDisplay = document.querySelector('.time-display')

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatDisplay(time){
    const date = new Date(time)
    const hour = date.getUTCHours().toString().padStart(2, "0")
    const minutes = date.getUTCMinutes().toString().padStart(2, "0")
    const seconds = date.getUTCSeconds().toString().padStart(2, "0")
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0")
    timeDisplay.innerHTML = `${hour}:${minutes}:${seconds}:${milliseconds}`
}

btnEl.forEach((btn) =>{
    btn.addEventListener('click', function(event) {
        const btnClass = event.currentTarget.classList
        if (btnClass.contains('start-btn')) {
          startTime = Date.now() - elapsedTime
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime
                formatDisplay(elapsedTime)
            }, 10);
        }
        if (btnClass.contains('stop-btn')) {
            clearInterval(timerInterval)
        }
        if (btnClass.contains('reset-btn')) {
            clearInterval(timerInterval)
            elapsedTime = 0;
            formatDisplay(elapsedTime)
        }
    })
})

