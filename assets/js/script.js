window.addEventListener('DOMContentLoaded', function() {
  toggle_menu();
});


function toggle_menu()
{
  let menuTrigger     = document.querySelector('.menu-trigger');
  let mobileMenu      = document.querySelector('.header__navigation .mobile-menu');

  if(menuTrigger)
  {
    menuTrigger.addEventListener('click', function() {
      menuTrigger.classList.toggle('active');
      mobileMenu.classList.toggle('show');
    });
  }
}