
    (function() {
      const navLinks = document.querySelectorAll('aside nav a');
      navLinks.forEach(link => {
        const path = link.getAttribute('data-path');
        if (path === 'patients') {
          link.className = 'flex items-center justify-between px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-lg shadow-sm transition-all';
        } else {
          link.className = 'flex items-center justify-between px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all';
        }
      });
    })();
  