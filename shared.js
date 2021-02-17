const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButttons = document.querySelectorAll('.plan button');

selectPlanButttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

backdrop.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});

modalNoButton.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});
