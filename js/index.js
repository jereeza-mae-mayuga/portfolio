window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  
  setTimeout(() => {
    splash.classList.add('hide');
    
    setTimeout(() => {
      splash.style.display = 'none'; 
    }, 500); 
    
  }, 500);  
});
