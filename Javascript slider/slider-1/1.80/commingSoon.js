setInterval(() => {
  let currentDate = new Date().getTime();
  let launceDate = new Date('Aug 21, 2021 10:00:00').getTime();
  let duration = launceDate - currentDate;
  var day = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hour = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((duration % (1000 * 60)) / 1000);
  console.log(`day: ${day} Hour: ${hour} Minute: ${minute} Second: ${second}`);
}, 1000);
