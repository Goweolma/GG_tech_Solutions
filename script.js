document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  const msg = document.getElementById('formMsg');
  msg.textContent = `¡Gracias, ${data.nombre}! Te contactaremos pronto al correo ${data.email}.`;
  this.reset();
});