const hideInput = document.getElementsByName('hide')[0];
const animateInput = document.getElementsByName('animate')[0];
const precentValue = document.querySelector('.normal__input');
const circle = document.querySelector('.circle');
const bar = document.getElementById('bar');

const circleDlin = 2 * Math.PI * 45;

bar.style.strokeDasharray = circleDlin;
bar.style.strokeDashoffset = circleDlin;

function handleChangeVisible() {
  if (hideInput.checked) {
    circle.classList.add('hidden');
    circle.classList.remove('animate');
    animateInput.checked = false;
  } else {
    circle.classList.remove('hidden');
  }
};

function handleChangeAnimation() {
  if (animateInput.checked) {
    circle.classList.add('animate');
    circle.classList.remove('hidden');
    hideInput.checked = false;
  } else {
    circle.classList.remove('animate');
  }
};

function handleChangeInput(e) {
  let percent = e.target.value.replace(/[^0-9]/g, '');

  percent = parseInt(percent, 10) || 0;

  if (percent > 100) {
    percent = 100;
  }

  e.target.value = percent;
  bar.style.strokeDashoffset = circleDlin - (percent / 100) * circleDlin;
};

hideInput.addEventListener('change', handleChangeVisible);
animateInput.addEventListener('change', handleChangeAnimation);
precentValue.addEventListener('input', (e) => handleChangeInput(e));