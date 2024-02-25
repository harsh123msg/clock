function updateclock(){
   const hourHand = document.getElementById('hour');
   const minuteHand = document.getElementById('minute');
   const secondHand = document.getElementById('second');

   const now = new Date;
   const hour = now.getHours();
   const minute = now.getMinutes();
   const second = now.getSeconds();

   const hrotation = (hour % 12) * 30 + minute / 2;
   const mrotation = (minute * 6);
   const srotation = (second * 6);

   hourHand.style.transform = `rotate(${hrotation}deg)`;
   minuteHand.style.transform = `rotate(${hrotation}deg`;
   secondHand.style.transform = `rotate(${srotation}deg`;
   
}
setInterval(updateclock, 1000);
updateclock();
