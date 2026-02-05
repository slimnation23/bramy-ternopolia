const getSliderOffsets = () => {
  const screenWidth = window.innerWidth;
  const containerWidth = Math.min(1280, screenWidth - 48);
  const paddingLeft = (screenWidth - containerWidth) / 2;

  // paddingLeft + 24px (px-6) is where the content actually starts
  const contentStart = paddingLeft + 24;

  // This one is for the overlapping slider (starts at ~46% of screen)
  const overlapOffset = screenWidth > 1024 ? screenWidth * 0.46 : contentStart;

  return { contentStart, overlapOffset, paddingLeft };
};

const offsets = getSliderOffsets();

const swiper = new Swiper('.eventsSlider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  freeMode: true,
  slidesOffsetBefore: offsets.overlapOffset,
  slidesOffsetAfter: offsets.paddingLeft,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
  },
});

window.addEventListener('resize', () => {
  const { beforeOffset, afterOffset } = getSliderOffsets();
  swiper.params.slidesOffsetBefore = beforeOffset;
  swiper.params.slidesOffsetAfter = afterOffset;
  swiper.update();
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
  const newOffsets = getSliderOffsets();

  // Update overlapping slider
  swiper.params.slidesOffsetBefore = newOffsets.overlapOffset;
  swiper.params.slidesOffsetAfter = newOffsets.paddingLeft;
  swiper.update();

  // Update break-out events slider
  actualEventsSwiper.params.slidesOffsetBefore = newOffsets.contentStart;
  actualEventsSwiper.params.slidesOffsetAfter = newOffsets.paddingLeft;
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

const initMapDetailSlider = () => {
  if (mapDetailSwiper) mapDetailSwiper.destroy();

  mapDetailSwiper = new Swiper('.mapDetailSlider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
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
        const total = this.slides.length.toString().padStart(2, '0'); // Corrected total slides calculation for loop if needed, but here simple
        document.getElementById('map-slide-current').textContent = current;
      },
    },
  });
};

const updateMapDetail = (id) => {
  const data = mapData.find((item) => item.id === id);
  if (!data) return;

  // Update text content
  document.getElementById('map-point-id').textContent = data.id;
  document.getElementById('map-point-title').textContent = data.title;
  document.getElementById('map-point-desc').textContent = data.desc;
  document.getElementById('map-point-vitrazh').textContent = data.vitrazh;

  // Update slides
  const wrapper = document.getElementById('map-slider-wrapper');
  wrapper.innerHTML = data.images
    .map(
      (img) => `
    <div class="swiper-slide">
      <img src="${img}" class="w-full h-full object-cover" alt="${data.title}">
    </div>
  `,
    )
    .join('');

  document.getElementById('map-slide-total').textContent = data.images.length.toString().padStart(2, '0');

  initMapDetailSlider();
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
