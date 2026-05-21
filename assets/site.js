/* Hyderabad Biryani & Banquet — shared interactions */
(function(){
  // ---------- Mobile hamburger ----------
  const burger  = document.getElementById('navBurger');
  const drawer  = document.getElementById('navDrawer');
  const overlay = document.getElementById('navOverlay');
  if (burger && drawer && overlay) {
    const iconMenu  = burger.querySelector('.icon-menu');
    const iconClose = burger.querySelector('.icon-close');

    function openDrawer() {
      drawer.classList.add('is-open');
      overlay.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      if (iconMenu)  iconMenu.style.display  = 'none';
      if (iconClose) iconClose.style.display = '';
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      if (iconMenu)  iconMenu.style.display  = '';
      if (iconClose) iconClose.style.display = 'none';
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
    overlay.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  }

  // ---------- Nav scroll state ----------
  const nav = document.getElementById('nav');
  if(nav && !nav.classList.contains('nav--solid')){
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold: 0.14, rootMargin: '0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---------- Hero parallax ----------
  const heroPattern = document.querySelector('.hero__pattern');
  const heroMin = document.querySelector('.hero__minarets');
  const heroSeal = document.querySelector('.hero__seal');
  if(heroPattern || heroMin || heroSeal){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      if(y > window.innerHeight) return;
      if(heroPattern) heroPattern.style.transform = `translateY(${y * 0.15}px)`;
      if(heroMin)     heroMin.style.transform     = `translateY(${y * 0.08}px)`;
      if(heroSeal)    heroSeal.style.transform    = `translateY(${y * -0.05}px)`;
    }, {passive:true});
  }

  // ---------- Gold particles ----------
  const host = document.getElementById('particles');
  if(host){
    const N = 30;
    for(let i=0;i<N;i++){
      const p = document.createElement('span');
      p.className = 'particle';
      const size = 1 + Math.random() * 3;
      p.style.width  = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random()*100 + '%';
      const dx = (Math.random() * 80 - 40);
      p.style.setProperty('--dx', dx + 'px');
      const dur = 10 + Math.random() * 18;
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = (-Math.random() * dur) + 's';
      p.style.opacity = .6 + Math.random() * .4;
      host.appendChild(p);
    }
  }

  // ---------- Generic form helper ----------
  window.HBB = window.HBB || {};
  window.HBB.bindForm = function(formId, opts){
    opts = opts || {};
    const form = document.getElementById(formId);
    if(!form) return;
    const successEl = document.getElementById(opts.successId);
    const fieldsEl  = document.getElementById(opts.fieldsId);
    const dateEl    = form.querySelector('input[type="date"]');
    if(dateEl){
      const today = new Date().toISOString().split('T')[0];
      dateEl.setAttribute('min', today);
    }
    function clearErr(el){
      const f = el.closest('.field'); if(!f) return;
      f.classList.remove('is-invalid');
      const e = f.querySelector('.err'); if(e) e.textContent = '';
    }
    function setErr(el, msg){
      const f = el.closest('.field'); if(!f) return;
      f.classList.add('is-invalid');
      const e = f.querySelector('.err'); if(e) e.textContent = msg;
    }
    form.querySelectorAll('input, select, textarea').forEach(el=>{
      el.addEventListener('input', ()=> clearErr(el));
      el.addEventListener('change', ()=> clearErr(el));
    });
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      let ok = true;
      (opts.required || []).forEach(id=>{
        const el = document.getElementById(id);
        if(!el) return;
        if(!el.value){ setErr(el, 'Please fill this in.'); ok = false; }
      });
      const phone = form.querySelector('input[type="tel"]');
      if(phone && phone.value && !/^[0-9 +\-]{7,}$/.test(phone.value)){
        setErr(phone, 'A valid phone number, please.');
        ok = false;
      }
      const email = form.querySelector('input[type="email"]');
      if(email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        setErr(email, 'A valid email, please.');
        ok = false;
      }
      if(!ok) return;
      if(opts.onSuccess) opts.onSuccess(form);
      if(fieldsEl) fieldsEl.style.display = 'none';
      const submitWrap = form.querySelector('.reserve__submit');
      if(submitWrap) submitWrap.style.display = 'none';
      if(successEl){
        successEl.classList.add('show');
        const rect = successEl.getBoundingClientRect();
        window.scrollTo({top: window.scrollY + rect.top - window.innerHeight/2 + rect.height/2, behavior:'smooth'});
      }
    });
  };

  // ---------- Menu filter ----------
  const chips = document.querySelectorAll('.chip');
  const filterSelect = document.querySelector('.menu-filter-select');

  function applyFilter(target) {
    document.querySelectorAll('.menu-cat').forEach(cat => {
      const match = target === 'all' || cat.dataset.cat === target;
      cat.style.display = match ? '' : 'none';
    });
    if (target !== 'all') {
      const el = document.querySelector('.menu-cat[data-cat="' + target + '"]');
      if (el) {
        const rect = el.getBoundingClientRect();
        window.scrollTo({ top: window.scrollY + rect.top - 120, behavior: 'smooth' });
      }
    }
  }

  if (chips.length) {
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('is-on'));
      chip.classList.add('is-on');
      if (filterSelect) filterSelect.value = chip.dataset.cat;
      applyFilter(chip.dataset.cat);
    }));
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      chips.forEach(c => c.classList.remove('is-on'));
      const active = document.querySelector('.chip[data-cat="' + filterSelect.value + '"]');
      if (active) active.classList.add('is-on');
      applyFilter(filterSelect.value);
    });
  }
})();
