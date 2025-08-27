document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // Floating source modal logic
  const sourceBtn = document.getElementById('sourceBtn');
  const sourceModal = document.getElementById('sourceModal');
  const closeSourceModal = document.getElementById('closeSourceModal');
  if (sourceBtn && sourceModal && closeSourceModal) {
    sourceBtn.addEventListener('click', function() {
      sourceModal.style.display = 'flex';
    });
    closeSourceModal.addEventListener('click', function() {
      sourceModal.style.display = 'none';
    });
    // Close modal when clicking outside content
    sourceModal.addEventListener('click', function(e) {
      if (e.target === sourceModal) {
        sourceModal.style.display = 'none';
      }
    });
  }
});
