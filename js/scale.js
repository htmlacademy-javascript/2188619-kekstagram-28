const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_VALUE = 100;

const btnControlSmaller = document.querySelector('.scale__control--smaller');
const btnControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

function scaleImage(value) {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
}

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  const newValue = Math.max(MIN_SCALE_VALUE,currentValue - SCALE_STEP);

  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  const newValue = Math.max(MAX_SCALE_VALUE,currentValue + SCALE_STEP);

  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_VALUE);

btnControlSmaller.addEventListener('click', onSmallerButtonClick);
btnControlBigger.addEventListener('click', onBiggerButtonClick);

export { resetScale };

