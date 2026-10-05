/**
 * Editorial Huapango - Production Client Logic
 * Lightweight, zero-dependency, ultra-fast performance
 */

// Book Catalog Data for interactive previews
const CATALOG = {
  nahual: {
    title: 'Nahual',
    author: 'Luis Armando Rosado',
    genre: 'Realismo Mágico / Colección Raíces No. 01',
    price: '$180 MXN',
    pages: '144 páginas',
    isbn: '978-607-99120-0-4',
    format: 'Bolsillo (11 × 17 cm) • Bond Crema 70g',
    digitalAvailable: true,
    synopsis: 'Una inmersión al misticismo del monte fronterizo tamaulipeco. Nahual desentierra los relatos ancestrales de transmutación y supervivencia que habitan las márgenes del río Bravo, donde lo humano y la bestia conviven en una tensa tregua poética.',
    quote: '«El murmullo del río no era agua, sino palabras que nadie se atrevió a imprimir...»'
  },
  terregal: {
    title: 'Terregal',
    author: 'Armando Rosado & Eduardo Serrato',
    genre: 'Mexa-ficción / Frontera Viva No. 02',
    price: '$190 MXN',
    pages: '168 páginas',
    isbn: '978-607-99120-1-1',
    format: 'Bolsillo (11 × 17 cm) • Bond Crema 70g',
    digitalAvailable: true,
    synopsis: 'Ficción especulativa desde las entrañas del desierto. Terregal relata historias cruzadas en una Reynosa distópica donde las tolvaneras borran las memorias colectivas y los habitantes reinventan su lenguaje para no ser devorados por el silencio.',
    quote: '«El polvo no ensucia: edifica la arqueología de los que nos quedamos a resistir.»'
  },
  imaginar: {
    title: 'Todo Lo Que Puedas Imaginar',
    author: 'Vanessa Aranda',
    genre: 'Cuento Infantil Ilustrado / Colección Semillas No. 03',
    price: '$160 MXN',
    pages: '64 páginas a color',
    isbn: '978-607-99120-2-8',
    format: 'Bolsillo Infantil • Couché mate 130g',
    digitalAvailable: true,
    synopsis: 'Una travesía lúdica sobre la creatividad de las infancias en el norte. A través de ilustraciones sensibles y texto rimado, la autora invita a niñas y niños a descubrir que el desierto florece cada vez que un sueño se dibuja.',
    quote: '«Si cierras los ojos, el viento te presta alas de mariposa monarca.»'
  },
  renacer: {
    title: 'Renacer en Piel del Tiempo',
    author: 'Ángelus',
    genre: 'Poesía Contemporánea / Lira Norteña No. 04',
    price: '$170 MXN',
    pages: '112 páginas',
    isbn: '978-607-99120-3-5',
    format: 'Bolsillo (11 × 17 cm) • Bond Crema 70g',
    digitalAvailable: true,
    synopsis: 'Un poemario íntimo y desgarrador sobre el paso de las horas, las heridas de la piel y la persistencia de la ternura en tiempos convulsos. Versos concisos que respiran al ritmo del desierto y la noche tamaulipeca.',
    quote: '«Nombrar la herida es el primer paso para convertirla en canto.»'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle & Accessibility
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');

  function toggleMobileMenu(forceState) {
    if (!mobileMenuBtn || !mobileMenu) return;
    const isExpanded = forceState !== undefined 
      ? !forceState 
      : mobileMenuBtn.getAttribute('aria-expanded') === 'true';

    const newState = !isExpanded;
    mobileMenuBtn.setAttribute('aria-expanded', String(newState));
    
    if (newState) {
      mobileMenu.classList.remove('hidden');
      if (menuIconOpen) menuIconOpen.classList.add('hidden');
      if (menuIconClose) menuIconClose.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());

    // Close on navigation link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
        toggleMobileMenu(false);
      }
    });
  }

  // 3. Scroll Reveal Animations (IntersectionObserver with passive observation)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  document.querySelectorAll('.fade-up').forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Interactive Book Modal
  const modalBackdrop = document.getElementById('bookModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalBookTitle');
  const modalAuthor = document.getElementById('modalBookAuthor');
  const modalGenre = document.getElementById('modalBookGenre');
  const modalPrice = document.getElementById('modalBookPrice');
  const modalPages = document.getElementById('modalBookPages');
  const modalIsbn = document.getElementById('modalBookIsbn');
  const modalFormat = document.getElementById('modalBookFormat');
  const modalSynopsis = document.getElementById('modalBookSynopsis');
  const modalQuote = document.getElementById('modalBookQuote');
  const modalWaLink = document.getElementById('modalWaLink');

  function openBookModal(bookKey) {
    const data = CATALOG[bookKey];
    if (!data || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalAuthor) modalAuthor.textContent = data.author;
    if (modalGenre) modalGenre.textContent = data.genre;
    if (modalPrice) modalPrice.textContent = data.price;
    if (modalPages) modalPages.textContent = data.pages;
    if (modalIsbn) modalIsbn.textContent = `ISBN: ${data.isbn}`;
    if (modalFormat) modalFormat.textContent = data.format;
    if (modalSynopsis) modalSynopsis.textContent = data.synopsis;
    if (modalQuote) modalQuote.textContent = data.quote;

    // Generate WhatsApp direct order link
    if (modalWaLink) {
      const waMsg = encodeURIComponent(`Hola Editorial Huapango, deseo adquirir una copia del libro "${data.title}" (${data.author}). ¿Me podrían brindar detalles de pago y envío?`);
      modalWaLink.href = `https://wa.me/528994112236?text=${waMsg}`;
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-book-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const bookKey = trigger.getAttribute('data-book-target');
      openBookModal(bookKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBookModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeBookModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeBookModal();
      }
    });
  }

  // 5. Active Header Navigation Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').replace('#', '');
      if (targetId === currentId) {
        link.classList.add('text-terregal-600', 'font-bold');
      } else {
        link.classList.remove('text-terregal-600', 'font-bold');
      }
    });
  }, { passive: true });
});
