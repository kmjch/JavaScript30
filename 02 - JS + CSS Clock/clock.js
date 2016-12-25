const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  // +90 to account for offset in css in transform: rotate(90deg)
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = ((mins / 60) * 360) + 90;
  const hrsDegrees = ((hours / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setDate, 1000);
