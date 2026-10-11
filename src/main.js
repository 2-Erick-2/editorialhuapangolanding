/**
 * Editorial Huapango - Production Client Logic
 * Basado al 100% en el Dossier Oficial de Editorial Huapango (Canva)
 * Zero-dependency, ultra-fast performance
 */

// Datos oficiales extraídos directamente del Dossier Editorial Huapango
const CATALOG = {
  nahual: {
    title: 'Nahual',
    author: 'Luis Armando Rosado',
    genre: 'Realismo Mágico • Colección Raíces',
    price: '$250 MXN',
    cover: './books/portada-nahual.jpg',
    coverWebp: './books/portada-nahual.webp',
    dimensions: '18.00 × 12.50 cm',
    weight: '153 g',
    paper: 'Bond crema 70 g',
    binding: 'Cubierta flexible de bolsillo',
    publishDate: '23 de abril de 2026',
    mlUrl: 'https://www.mercadolibre.com.mx/nahual--luis-armando-rosado--editorial-huapango/up/MLMU4103853249?pdp_filters=seller_id%3A2478697092',
    videoUrl: 'https://youtu.be/NWZO-iJArZs?si=C-PgVdboNMJFdN5F',
    synopsis: 'Un cuento largo de comedy horror donde un nahual pone de cabeza al pueblo al darle caza. Una inmersión en el misticismo del monte fronterizo y la transmutación humana donde las criaturas míticas desafían el orden cotidiano del noreste.',
    quote: '«Fue Miguel, el hijo de Atilano el que lo vio primero. Algo parecido a un perro, bebía embelesado la tibia sangre encharcada dentro de la panza de un becerro.»'
  },
  terregal: {
    title: 'Terregal: Entre este & los próximos mil años',
    author: 'Eduardo Serrato & Luis Armando Rosado',
    genre: 'Mexa-ficción norestense • Colección Raíces',
    price: '$250 MXN',
    cover: './books/portada-terregal.jpg',
    coverWebp: './books/portada-terregal.webp',
    dimensions: '18.00 × 12.50 cm',
    weight: '176 g',
    paper: 'Bond crema 70 g',
    binding: 'Cubierta flexible de bolsillo',
    publishDate: '23 de abril de 2026',
    prologue: 'Prólogo de Renato Tinajero',
    mlUrl: 'https://www.mercadolibre.com.mx/terregal-entre-este-y-los-proximos-mil-anos/up/MLMU4172477919?pdp_filters=seller_id%3A2478697092',
    videoUrl: 'https://youtu.be/NWZO-iJArZs?si=C-PgVdboNMJFdN5F',
    synopsis: 'El uróboros contemporáneo: una coautoría de 100 cuentos cortos de mexa-ficción donde el sarcasmo protagoniza en todo momento este imaginario retrofuturista del desierto norestense.',
    quote: '«¿Qué polvo se levanta si agitamos las páginas del sinsentido entre pasado y futuro?»'
  },
  imaginar: {
    title: 'Todo lo que puedas imaginar',
    hashtag: '#TPi',
    author: 'Vanessa Aranda',
    genre: 'Infantil • Cuentos a todas partes',
    price: '$150 MXN',
    cover: './books/portada-todo-lo-que-puedas-imaginar.jpg',
    coverWebp: './books/portada-todo-lo-que-puedas-imaginar.webp',
    dimensions: '18.00 × 12.50 cm',
    weight: '110 g',
    paper: 'Bond crema 70 g',
    binding: 'Cubierta flexible de bolsillo',
    publishDate: '23 de abril de 2026',
    mlUrl: 'https://www.mercadolibre.com.mx/todo-lo-que-puedas-imaginar-cuentos-a-todas-partes/up/MLMU4190757094?pdp_filters=seller_id%3A2478697092',
    videoUrl: 'https://youtu.be/NWZO-iJArZs?si=C-PgVdboNMJFdN5F',
    synopsis: 'Una guía escondida entre las páginas donde niños y grandes se sientan a leer y encuentran en sus líneas un recordatorio lúdico del poder inagotable de soñar desde cualquier rincón.',
    quote: '«Una invitación a quedarnos con la mejor versión de nuestra imaginación.»'
  },
  renacer: {
    title: 'Renacer en piel del tiempo',
    author: 'Ángelus',
    genre: 'Poesía contemporánea • Colección Raíces',
    price: '$250 MXN',
    cover: './books/portada-renacer-en-piel-del-tiempo.jpg',
    coverWebp: './books/portada-renacer-en-piel-del-tiempo.webp',
    dimensions: '18.00 × 12.50 cm',
    weight: 'Formato ligero',
    paper: 'Bond crema 70 g',
    binding: 'Cubierta flexible de bolsillo',
    publishDate: '23 de abril de 2026',
    mlUrl: 'https://www.mercadolibre.com.mx/renacer-en-piel-del-tiempo-poesia-de-lo-cotidiano/up/MLMU4190729604?pdp_filters=seller_id%3A2478697092',
    videoUrl: 'https://youtu.be/NWZO-iJArZs?si=C-PgVdboNMJFdN5F',
    synopsis: 'Poemario íntimo que reencuentra al lector con su propia vida. Versos que caminan sobre la piel de la memoria cotidiana, capturando la belleza y la fragilidad del tiempo.',
    quote: '«No es necesario que arda toda la noche, basta con que encienda lo suficiente para recordarnos que la vida pese a sus sombras sigue siendo habitable.»'
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

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
        toggleMobileMenu(false);
      }
    });
  }

  // 3. Scroll Reveal Animations (IntersectionObserver)
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
    threshold: 0.08
  });

  document.querySelectorAll('.fade-up').forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Interactive Book Modal con Datos Oficiales
  const modalBackdrop = document.getElementById('bookModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalBookTitle');
  const modalHashtag = document.getElementById('modalBookHashtag');
  const modalAuthor = document.getElementById('modalBookAuthor');
  const modalGenre = document.getElementById('modalBookGenre');
  const modalPrice = document.getElementById('modalBookPrice');
  const modalDimensions = document.getElementById('modalBookDimensions');
  const modalWeight = document.getElementById('modalBookWeight');
  const modalBinding = document.getElementById('modalBookBinding');
  const modalPublishDate = document.getElementById('modalBookPublishDate');
  const modalSynopsis = document.getElementById('modalBookSynopsis');
  const modalQuote = document.getElementById('modalBookQuote');
  const modalCover = document.getElementById('modalBookCover');
  const modalCoverWebp = document.getElementById('modalBookCoverWebp');
  const modalBuyLink = document.getElementById('modalBuyLink');
  const modalVideoLink = document.getElementById('modalVideoLink');

  function openBookModal(bookKey) {
    const data = CATALOG[bookKey];
    if (!data || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalHashtag) {
      modalHashtag.textContent = data.hashtag || '';
      modalHashtag.classList.toggle('hidden', !data.hashtag);
    }
    if (modalAuthor) modalAuthor.textContent = `Por ${data.author}`;
    if (modalGenre) modalGenre.textContent = data.genre;
    if (modalPrice) modalPrice.textContent = data.price;
    if (modalDimensions) modalDimensions.textContent = data.dimensions;
    if (modalWeight) modalWeight.textContent = data.weight;
    if (modalBinding) modalBinding.textContent = data.binding;
    if (modalPublishDate) modalPublishDate.textContent = data.publishDate;
    if (modalSynopsis) modalSynopsis.textContent = data.synopsis;
    if (modalQuote) modalQuote.textContent = data.quote;
    
    if (modalCoverWebp) modalCoverWebp.srcset = data.coverWebp;
    if (modalCover) {
      modalCover.src = data.cover;
      modalCover.alt = `Portada oficial de ${data.title}`;
    }

    if (modalVideoLink) {
      if (data.videoUrl) {
        modalVideoLink.href = data.videoUrl;
        modalVideoLink.classList.remove('hidden');
      } else {
        modalVideoLink.classList.add('hidden');
      }
    }

    // Compra directa en la publicación de Mercado Libre de cada libro
    if (modalBuyLink && data.mlUrl) {
      modalBuyLink.href = data.mlUrl;
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

    // Accesibilidad con teclado Enter/Espacio
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const bookKey = trigger.getAttribute('data-book-target');
        openBookModal(bookKey);
      }
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
