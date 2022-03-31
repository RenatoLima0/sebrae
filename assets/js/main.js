if(document.querySelector('.nav-princ')){
  const ativaMenu = () => {
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const itemsMenu = document.querySelector('.items-menu');
    
    const clickMenu = () => {
      menuHamburger.classList.toggle('ativo');
      itemsMenu.classList.toggle('ativo');
    }
  
    menuHamburger.addEventListener('click', clickMenu);
  }
  
  ativaMenu();  
}
