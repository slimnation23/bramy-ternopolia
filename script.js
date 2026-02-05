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
