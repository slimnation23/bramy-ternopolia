const swiper = new Swiper('.eventsSlider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
  },
});

// Projects Slider
const projectsSwiper = new Swiper('.projectsSlider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.projects-next',
    prevEl: '.projects-prev',
  },
});

// Actual Events Slider (Break-out)
const actualEventsSwiper = new Swiper('.actualEventsSlider', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  slidesOffsetBefore: offsets.contentStart,
  slidesOffsetAfter: offsets.paddingLeft,
  grabCursor: true,
  freeMode: true,
  mousewheel: {
    forceToAxis: true,
  },
});

window.addEventListener('resize', () => {
  offsets = getSliderOffsets();

  // Update Instagram overlapping slider
  swiper.params.slidesOffsetBefore = offsets.overlapOffset;
  swiper.params.slidesOffsetAfter = offsets.paddingLeft;
  swiper.update();

  // Update break-out events slider
  actualEventsSwiper.params.slidesOffsetBefore = offsets.contentStart;
  actualEventsSwiper.params.slidesOffsetAfter = offsets.paddingLeft;
  actualEventsSwiper.update();
});

// Interactive Map
const mapData = [
  {
    id: 1,
    title: 'Сагайдачного, 11',
    coords: [49.5524448714347, 25.59096657666662],
    desc: 'Сецесійна брама початку XX століття, відреставрована завдяки ГО «Брами Тернополя» у 2024 році.',
    vitrazh: 'Ліля Василько',
    photo: ['Захар Дябло', 'Анна Золотнюк'],
    images: ['images/img-1.webp', 'images/img-2.webp', 'images/img-3.webp'],
  },
  {
    id: 2,
    title: 'Валова, 5',
    coords: [49.553, 25.594],
    desc: 'Історична пам’ятка архітектури, що зберегла унікальні ковані елементи. Була відновлена у 2023 році.',
    vitrazh: 'Майстерня «Вітраж»',
    photo: ['Олег Петренко'],
    images: ['images/img-2.webp', 'images/img-3.webp', 'images/img-5.webp'],
  },
  {
    id: 3,
    title: 'Руська, 12',
    coords: [49.551, 25.591],
    desc: 'Одна з найстаріших брам міста, яка вимагала складного конструктивного укріплення фундаменту.',
    vitrazh: 'Архівні дані',
    photo: ['Ірина Кравчук'],
    images: ['images/img-5.webp', 'images/img-1.webp', 'images/img-4.webp'],
  },
];

let mapDetailSwiper;

const initMapDetailSlider = (totalSlides) => {
  if (mapDetailSwiper) {
    mapDetailSwiper.destroy(true, true);
  }

  mapDetailSwiper = new Swiper('.mapDetailSlider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.map-detail-next',
    },
    pagination: {
      el: '.map-detail-pagination',
      clickable: true,
      bulletClass: 'w-2 h-2 rounded-full border border-black bg-white/50 cursor-pointer transition-all',
      bulletActiveClass: '!bg-black !w-4',
    },
    on: {
      slideChange: function () {
        const current = (this.realIndex + 1).toString().padStart(2, '0');
        document.getElementById('map-slide-current').textContent = current;
      },
    },
  });

  if (document.getElementById('map-slide-total')) {
    document.getElementById('map-slide-total').textContent = totalSlides.toString().padStart(2, '0');
  }
};

const updateMapDetail = (id) => {
  const data = mapData.find((item) => item.id === id);
  if (!data) return;

  // Update text content
  if (document.getElementById('map-point-id')) document.getElementById('map-point-id').textContent = data.id;
  if (document.getElementById('map-point-title')) document.getElementById('map-point-title').textContent = data.title;
  if (document.getElementById('map-point-desc')) document.getElementById('map-point-desc').textContent = data.desc;
  if (document.getElementById('map-point-vitrazh'))
    document.getElementById('map-point-vitrazh').textContent = data.vitrazh;

  // Update slides
  const wrapper = document.getElementById('map-slider-wrapper');
  if (wrapper) {
    wrapper.innerHTML = data.images
      .map(
        (img) => `
      <div class="swiper-slide">
        <img src="${img}" class="w-full h-full object-cover" alt="${data.title}">
      </div>
    `,
      )
      .join('');
  }

  initMapDetailSlider(data.images.length);
};

// Initialize Leaflet Map
const map = L.map('leaflet-map', {
  scrollWheelZoom: false,
}).setView([49.552, 25.592], 15);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

mapData.forEach((point) => {
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `<span>${point.id}</span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  L.marker(point.coords, { icon: customIcon })
    .addTo(map)
    .on('click', () => updateMapDetail(point.id));
});

// Initial load
updateMapDetail(1);

// Мобільне меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove('translate-x-full');
    // Анімація перетворення гамбургера на хрестик
    mobileMenuBtn.children[0].style.transform = 'translateY(10px) rotate(45deg)';
    mobileMenuBtn.children[1].style.opacity = '0';
    mobileMenuBtn.children[2].style.transform = 'translateY(-10px) rotate(-45deg)';
    document.body.style.overflow = 'hidden'; // Заборона скролінгу
  } else {
    mobileMenu.classList.add('translate-x-full');
    // Повернення гамбургера до початкового стану
    mobileMenuBtn.children[0].style.transform = 'translateY(0) rotate(0)';
    mobileMenuBtn.children[1].style.opacity = '1';
    mobileMenuBtn.children[2].style.transform = 'translateY(0) rotate(0)';
    document.body.style.overflow = 'auto'; // Дозвіл скролінгу
  }
}

mobileMenuBtn.addEventListener('click', toggleMenu);

// Закриття меню при кліку на посилання
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});
