function openMenu() {
   document.getElementById('landing').classList.add('menu--open');
   document.body.style.overflow = 'hidden';
}

function closeMenu() {
   document.getElementById('landing').classList.remove('menu--open');
   document.body.style.overflow = 'auto';
}