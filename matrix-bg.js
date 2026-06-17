// Matrix Rain Background Animation
(function() {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = 'HappyBirthdayAnuj';
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];
  
  for(let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
  }
  
  function draw() {
    // Semi-transparent black background for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the characters
    ctx.fillStyle = '#0f0';
    ctx.font = `bold ${fontSize}px 'Courier New'`;
    ctx.shadowColor = '#0f0';
    ctx.shadowBlur = 8;
    ctx.globalAlpha = 0.8;
    
    for(let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i]);
      
      if(drops[i] > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += fontSize;
    }
    
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  draw();
})();
