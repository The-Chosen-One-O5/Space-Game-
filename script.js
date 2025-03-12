// Prevent zooming
  window.addEventListener("wheel", (e) => {
      const isPinching = e.ctrlKey;
      if (isPinching) e.preventDefault();
  }, { passive: false });
  
  // Prevent touch zooming
  document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 1) {
          e.preventDefault();
      }
  }, { passive: false });
  
  // Add hover effect to buttons
  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseout', () => {
          button.style.transform = 'translateY(0)';
      });
  });
