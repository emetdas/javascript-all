const time = document.querySelector(".time");
let lanchdate = new Date("Jan 1,2022 10:00:00").getTime();

let timer = setInterval(tick, 1000);
function tick() {
  let now = new Date().getTime();
  // time Defirence
  let t = lanchdate - now;
  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let houre = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((t % (1000 * 60)) /1000);

    let Time = `${days} : ${houre} : ${minute} : ${second}`;
    time.innerText = Time;
  }
}
