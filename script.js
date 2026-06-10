
// setting up timer, startime , elapsedtime, isrunning 

const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start()
{
    if(!isrunning)  // storing starttime by using Date.now() method (in milliseconds)
    {
      starttime = Date.now() - elapsedtime;
      timer = setInterval(update, 10);       // starting the timer for every 10 milliseconds
      isrunning = true;
    }
}

function stop()   // clearing the timer and calculating the elapsedtime and storing it
{
    if(isrunning)
    {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset()           // clearing the timer and reseting the values
{                             
    clearInterval(timer);  //timer becomes null again
     starttime = 0;
     elapsedtime = 0;
     isrunning = false;
     display.textContent = "00:00:00:00";
}

function update()   // this function is being called by timer using setInterval()
{
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;   // elapsedtime is in milliseconds 

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);   // converting elapsedtime into hrs,min,sec,millisec.
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let milliseconds = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}