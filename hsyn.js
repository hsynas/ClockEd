let hourEl=document.querySelector(".hour")
let minuteEl=document.querySelector(".minute")
let secondEl=document.querySelector(".second")


function UpdateClock(){

    const currrenDate = new Date();
    setTimeout(UpdateClock, 1000);
    const hour = currrenDate.getHours();
    const minute = currrenDate.getMinutes();
    const second = currrenDate.getSeconds();
    console.log(hour , minute, second)
    const hourDeg = (hour/12) * 360 ;
    const minuteDeg = (minute/60) * 360 ;
    const secondDeg = (second/60) * 360 ;


    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`
    secondEl.style.transform = `rotate(${secondDeg}deg)`


}

UpdateClock();

