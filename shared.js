const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButttons = document.querySelectorAll('.plan button');

const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButttons.forEach((button) => {
  button.addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    if (modal) {
      modal.classList.add('open');
    }
    backdrop.classList.add('open');
  });
});

backdrop.addEventListener('click', () => {
  if (modal) {
    modal.classList.remove('open')
  }
  mobileNav.classList.remove('open')
  backdrop.classList.remove('open')
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', () => {
    modal.classList.remove('open')
    backdrop.classList.remove('open')
  });  
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.toggle('open')
  backdrop.classList.toggle('open')
})