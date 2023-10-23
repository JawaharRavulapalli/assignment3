document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  });
  
  const menuOptions = document.querySelectorAll('#nav a');
  menuOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      document.getElementById('nav').style.display = 'none';
    });
  });
  