function updateTimer() {
    const now = new Date();
    let targetDate = new Date(now.getFullYear(), 1, 22, 3, 40, 0, 0); // Feb 22nd, 3:40 AM

    // If today is already past Feb 22nd, set the target for next year
    if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }

    let timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        document.getElementById("timer").textContent = "Time reached!";
        return;
    }

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}<span class="small-text"> Days </span>&nbsp;&nbsp;${hours}<span class="small-text"> Hours </span>&nbsp;&nbsp;${minutes}<span class="small-text"> Mins </span>&nbsp;&nbsp;${seconds}<span class="small-text"> Secs</span>`;
}

updateTimer();  // Initial call to avoid 1-second delay
setInterval(updateTimer, 1000);
