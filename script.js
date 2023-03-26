let addButton = document.getElementById('addBtn');
addButton.addEventListener('click', addNewTimer);

function addNewTimer() {
    let timers = document.getElementById('allStopwatch');
    let addStopwatchBlock = document.getElementById('addStopwatchBlock');

    let newTimer = createTimer();
    timers.insertBefore(newTimer, addStopwatchBlock);
}

function createTimer() {

    let newStopwatch = document.createElement('div');
    newStopwatch.className = 'stopwatch';
    
    let newstopWatchTime = document.createElement('div');
    newstopWatchTime.className = 'stopwatch_time';
    newStopwatch.append(newstopWatchTime);


    let newHr = document.createElement('span');
    newstopWatchTime.append(newHr);
    let newMin = document.createElement('span');
    newstopWatchTime.append(newMin);
    let newSec = document.createElement('span');
    newstopWatchTime.append(newSec);
    newSec.append('00');

    let newLine = document.createElement('div');
    newStopwatch.append(newLine);
    newLine.className = 'line';
    
    let newButtons = document.createElement('div');
    newButtons.className = 'buttons';
    newStopwatch.append(newButtons);

    let newButtonsPlay = document.createElement('div');
    newButtonsPlay.className = 'buttons_play';
    newButtons.append(newButtonsPlay)
    let newPause = document.createElement('button');
    newPause.append('pause');
    newPause.classList = 'material-icons material-icons_pause';
    newButtonsPlay.append(newPause);
    let newPlay = document.createElement('button');
    newPlay.append('play_arrow');
    newPlay.classList = 'material-icons material-icons_play';
    newButtonsPlay.append(newPlay);

    let newButtonsStop = document.createElement('div');
    newButtonsStop.className = 'buttons_stop';
    newButtons.append(newButtonsStop);
    let newStop = document.createElement('button');
    newStop.append('stop');
    newStop.classList = 'material-icons stop';
    newButtonsStop.append(newStop);

    
    let hours = 00;
    let minutes = 00;
    let seconds = 00;
    let count = 00;
    let timer = false;
    
    function addActivClass(){
        newPause.classList.add('material-icons_pause_active')
        newStop.classList.add('material-icons_play_active')
        newPlay.classList.add('material-icons_play_active')
        newstopWatchTime.classList.add('stopwatch_time_active')
        newLine.classList.add('line_active')
    }
    function removeActivClass(){
        newPause.classList.remove('material-icons_pause_active')
        newStop.classList.remove('material-icons_play_active')
        newPlay.classList.remove('material-icons_play_active')
        newstopWatchTime.classList.remove('stopwatch_time_active')
        newLine.classList.remove('line_active')
    }

    newPlay.addEventListener('click', function () {
        newPlay.style.display = "none";
        newPause.style.display = "block";
        addActivClass()
        if (minutes == 00) {
            newMin.style.display = "none";
            newHr.style.display = "none";
        }
        timer = true;
        stopWatch();
    });
    
    newPause.addEventListener('click', function () {
        newPlay.style.display = "block";
        newPause.style.display = "none";
        removeActivClass()
        timer = false;
    });
    
    newStop.addEventListener('click', function () {
        newPlay.style.display = "block";
        newPause.style.display = "none";
        removeActivClass()
        timer = false;
        hours = 00;
        minutes = 00;
        seconds = 00;
        newSec.innerHTML = "00";
        newMin.style.display = "none";
        newHr.style.display = "none";
    });

    return newStopwatch;
    
    function stopWatch() {
        if (timer) {
            count++;
    
            if (count == 1) {
                seconds++;
                count = 0;
            }
    
            if (seconds == 60) {
                newMin.style.display = "inline-block";
                minutes++;
                seconds = 0;
            }
    
            if (minutes == 60) {
                newHr.style.display = "inline-block";
                hours++;
                minutes = 0;
                seconds = 0;
            }
    
            let hrString = hours;
            let minString = minutes;
            let secString = seconds;
    
            if (hours < 10) {
                hrString = "0" + hrString;
            }
    
            if (minutes < 10) {
                minString = "0" + minString;
            }
    
            if (seconds < 10) {
                secString = "0" + secString;
            }
    

            newHr.innerHTML = hrString + ':';
            newMin.innerHTML = minString + ':';
            newSec.innerHTML = secString;
            setTimeout(stopWatch, 1);
        }
    }
}



