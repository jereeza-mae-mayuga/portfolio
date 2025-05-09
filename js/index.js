const bulb = document.querySelector('.lightbulb');

bulb.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); 
  bulb.classList.add('clicked');  
  setTimeout(() => bulb.classList.remove('clicked'), 400);  
});

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.classList.add('hide');
    setTimeout(() => {
      splash.style.display = 'none'; 
    }, 1000); 
  }, 2000);  
});
