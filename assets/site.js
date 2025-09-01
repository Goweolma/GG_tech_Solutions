
// === G2 Tech Labs Pro script ===
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links (redundant if CSS smooth-behavior, but also offsets a bit)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Simple form enhancement
  const forms = document.querySelectorAll('form');
  forms.forEach(form=>{
    form.setAttribute('novalidate', 'true');
    form.addEventListener('submit', e=>{
      if(!form.checkValidity()){
        e.preventDefault();
        alert('Revisa los campos marcados.');
      }
    });
  });
});


// Dummy success handler
document.addEventListener('DOMContentLoaded', function(){
  const f = document.querySelector('[data-g2-form]');
  if(f){
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var s = document.getElementById('form-success');
      if(s) s.style.display = 'block';
      f.reset();
    }, {once:false});
  }
});
