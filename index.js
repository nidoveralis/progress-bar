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
  } else {
    circle.classList.remove('hidden');
  }
};

function handleChangeAnimation() {
  if (animateInput.checked) {
    circle.classList.add('animate');
  } else {
    circle.classList.remove('animate');
  }
};

function handleChangeInput(e) {
  const percent = e.target.value;
  if (percent <= 100) {
    bar.style.strokeDashoffset = circleDlin - percent / 100 * circleDlin;
  } else {
  }
};

hideInput.addEventListener('change', handleChangeVisible);
animateInput.addEventListener('change', handleChangeAnimation);
precentValue.addEventListener('input', (e) => handleChangeInput(e));