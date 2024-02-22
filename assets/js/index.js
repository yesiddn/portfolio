const nameOne = document.querySelector('.name-one');
const nameTwo = document.querySelector('.name-two');
const nameThree = document.querySelector('.name-three');

const textLoader = () => {
  setTimeout(() => {
    nameOne.classList.remove('active');
    nameTwo.classList.add('active');
    nameThree.classList.remove('active');
  }, 6000);

  setTimeout(() => {
    nameOne.classList.remove('active');
    nameTwo.classList.remove('active');
    nameThree.classList.add('active');
  }, 12000);

  setTimeout(() => {
    nameOne.classList.add('active');
    nameTwo.classList.remove('active');
    nameThree.classList.remove('active');
  }, 18000);
}

setInterval(textLoader, 16000);

textLoader();