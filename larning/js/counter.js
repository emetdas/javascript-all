const counters = document.querySelectorAll(".bo");
const speed = 200;
counters.forEach((bo) => {
  const updateCount = () => {
    const target = +bo.getAttribute("data-terget");
    const count = +bo.innerText;
    const inc = target / speed;
    if (count < target) {
      bo.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      bo.innerText = target;
    }
  };
  updateCount();
});
