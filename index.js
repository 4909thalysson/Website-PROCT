// PROCT - Landing page

// ---------- Vídeo do início: respeita quem prefere menos movimento ----------
(function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
})();

// ---------- Link ativo no menu conforme a seção visível ----------
(function initActiveNav() {
  const links = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('main section[id]');
  if (!('IntersectionObserver' in window) || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
})();

// ---------- Formulário de contato ----------
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  const rules = {
    nome: (v) => (v.trim().length < 2 ? 'Informe seu nome.' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Informe um email válido.'),
    telefone: (v) => (v.trim() === '' || v.replace(/\D/g, '').length >= 10 ? '' : 'Informe DDD + número.'),
    mensagem: (v) => (v.trim().length < 5 ? 'Escreva uma mensagem.' : ''),
  };

  function validateField(name) {
    const input = form.elements[name];
    const message = rules[name](input.value);
    const field = input.closest('.field');
    field.classList.toggle('has-error', Boolean(message));
    form.querySelector(`[data-error-for="${name}"]`).textContent = message;
    return !message;
  }

  Object.keys(rules).forEach((name) => {
    form.elements[name].addEventListener('blur', () => validateField(name));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';

    const allValid = Object.keys(rules).map(validateField).every(Boolean);
    if (!allValid) return;

    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: enviar `data` para o backend (ex.: fetch('/api/contato', { method: 'POST', ... }))
    console.log('Contato:', data);

    status.textContent = 'Mensagem enviada! Em breve a equipe entra em contato.';
    form.reset();
  });
})();// PROCT - Landing page

// ---------- Vídeo do início: respeita quem prefere menos movimento ----------
(function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
})();

// ---------- Menu some ao rolar para baixo, volta ao rolar para cima ----------
(function initAutoHideNav() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const HIDE_AFTER = 80; // px: só começa a esconder depois de sair da faixa do topo
  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    if (scrollingDown && currentScrollY > HIDE_AFTER) {
      topbar.classList.add('topbar--hidden');
    } else {
      topbar.classList.remove('topbar--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();

// ---------- Link ativo no menu conforme a seção visível ----------
(function initActiveNav() {
  const links = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('main section[id]');
  if (!('IntersectionObserver' in window) || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
})();

// ---------- Formulário de contato ----------
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  const rules = {
    nome: (v) => (v.trim().length < 2 ? 'Informe seu nome.' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Informe um email válido.'),
    telefone: (v) => (v.trim() === '' || v.replace(/\D/g, '').length >= 10 ? '' : 'Informe DDD + número.'),
    mensagem: (v) => (v.trim().length < 5 ? 'Escreva uma mensagem.' : ''),
  };

  function validateField(name) {
    const input = form.elements[name];
    const message = rules[name](input.value);
    const field = input.closest('.field');
    field.classList.toggle('has-error', Boolean(message));
    form.querySelector(`[data-error-for="${name}"]`).textContent = message;
    return !message;
  }

  Object.keys(rules).forEach((name) => {
    form.elements[name].addEventListener('blur', () => validateField(name));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';

    const allValid = Object.keys(rules).map(validateField).every(Boolean);
    if (!allValid) return;

    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: enviar `data` para o backend (ex.: fetch('/api/contato', { method: 'POST', ... }))
    console.log('Contato:', data);

    status.textContent = 'Mensagem enviada! Em breve a equipe entra em contato.';
    form.reset();
  });
})();// PROCT - Landing page

// ---------- Vídeo do início: respeita quem prefere menos movimento ----------
(function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
})();

// ---------- Menu some ao rolar para baixo, volta ao rolar para cima ----------
(function initAutoHideNav() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const HIDE_AFTER = 80; // px: só começa a esconder depois de sair da faixa do topo
  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    if (scrollingDown && currentScrollY > HIDE_AFTER) {
      topbar.classList.add('topbar--hidden');
    } else {
      topbar.classList.remove('topbar--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();

// ---------- Link ativo no menu conforme a seção visível ----------
(function initActiveNav() {
  const links = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('main section[id]');
  if (!('IntersectionObserver' in window) || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
})();

// ---------- Card giratório (frente: foto / verso: texto sobre o PROCT) ----------
(function initFlipCard() {
  const card = document.getElementById('how-flip-card');
  if (!card) return;

  function toggleFlip() {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
  }

  card.addEventListener('click', toggleFlip);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFlip();
    }
  });
})();

// ---------- Modal do vídeo de demonstração ----------
(function initDemoModal() {
  const openBtn = document.getElementById('demo-open');
  const modal = document.getElementById('demo-modal');
  const video = document.getElementById('demo-video');
  if (!openBtn || !modal || !video) return;

  function onKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }

  function openModal() {
    modal.hidden = false;
    video.currentTime = 0;
    video.play().catch(() => {
      // autoplay pode ser bloqueado pelo navegador; o usuário dá play manualmente
    });
    document.addEventListener('keydown', onKeydown);
  }

  function closeModal() {
    modal.hidden = true;
    video.pause();
    document.removeEventListener('keydown', onKeydown);
  }

  openBtn.addEventListener('click', openModal);
  modal.querySelectorAll('[data-demo-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });
})();

// ---------- Formulário de contato ----------
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  const rules = {
    nome: (v) => (v.trim().length < 2 ? 'Informe seu nome.' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Informe um email válido.'),
    telefone: (v) => (v.trim() === '' || v.replace(/\D/g, '').length >= 10 ? '' : 'Informe DDD + número.'),
    mensagem: (v) => (v.trim().length < 5 ? 'Escreva uma mensagem.' : ''),
  };

  function validateField(name) {
    const input = form.elements[name];
    const message = rules[name](input.value);
    const field = input.closest('.field');
    field.classList.toggle('has-error', Boolean(message));
    form.querySelector(`[data-error-for="${name}"]`).textContent = message;
    return !message;
  }

  Object.keys(rules).forEach((name) => {
    form.elements[name].addEventListener('blur', () => validateField(name));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';

    const allValid = Object.keys(rules).map(validateField).every(Boolean);
    if (!allValid) return;

    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: enviar `data` para o backend (ex.: fetch('/api/contato', { method: 'POST', ... }))
    console.log('Contato:', data);

    status.textContent = 'Mensagem enviada! Em breve a equipe entra em contato.';
    form.reset();
  });
})();