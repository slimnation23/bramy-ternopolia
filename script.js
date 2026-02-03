// Slider
const getSliderOffsets = () => {
  const screenWidth = window.innerWidth;
  const containerWidth = Math.min(1280, screenWidth - 48);
  const paddingLeft = (screenWidth - containerWidth) / 2;
  const beforeOffset = screenWidth > 1024 ? screenWidth * 0.45 : paddingLeft;
  const afterOffset = paddingLeft;

  return { beforeOffset, afterOffset };
};

const { beforeOffset, afterOffset } = getSliderOffsets();

const swiper = new Swiper('.eventsSlider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  freeMode: true,
  slidesOffsetBefore: beforeOffset,
  slidesOffsetAfter: afterOffset,
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