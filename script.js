// Basic interactions: theme toggle, year, simple contact handler
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if(stored === 'dark' || (!stored && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    root.setAttribute('data-theme','dark');
    if(toggle) toggle.textContent = '☀️';
  }

  if(toggle){
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      if(current === 'dark'){
        root.removeAttribute('data-theme');
        localStorage.setItem('theme','light');
        toggle.textContent = '🌙';
      } else {
        root.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        toggle.textContent = '☀️';
      }
    });
  }

  // set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  window.handleContact = function(e){
    e.preventDefault();
    const form = e.target;
    // For starter, we simply show a thank-you message; replace with a server or service integration.
    alert('Thanks! Your message was captured for demo. Integrate with an email service to send messages.');
    form.reset();
  };
})();