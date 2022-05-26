const countDown = () => {
  const countDate = new Date("January 21, 2022 9:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //finding out how time work
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate the gap
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("day").textContent = textDay;
  document.getElementById("hour").textContent = textHour;
  document.getElementById("minute").textContent = textMinute;
  document.getElementById("second").textContent = textSecond;
};
setInterval(countDown, 1000);
