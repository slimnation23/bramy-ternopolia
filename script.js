import { client, urlFor } from './sanity.js';

let mapData = [];

async function fetchSanityData() {
  try {
    const homepage = await client.fetch(`*[_type == "homepage"][0]`);
    const projects = await client.fetch(`*[_type == "project"] | order(_createdAt asc)`);
    const mapPoints = await client.fetch(`*[_type == "mapPoint"] | order(id asc)`);
    const instagramPosts = await client.fetch(`*[_type == "instagramPost"] | order(order asc, _createdAt desc)`);
    
    if (homepage) {
      if (homepage.header) {
        if (homepage.header.logo) {
          const logoUrl = urlFor(homepage.header.logo).width(200).url();
          const dLogo = document.getElementById('header-logo-desktop');
          const mLogo = document.getElementById('header-logo-mobile');
          if (dLogo) dLogo.src = logoUrl;
          if (mLogo) mLogo.src = logoUrl;
        }
      }

      if (homepage.hero) {
        if (homepage.hero.title) document.getElementById('hero-title').textContent = homepage.hero.title;
        if (homepage.hero.description) document.getElementById('hero-desc').textContent = homepage.hero.description;
        if (homepage.hero.buttonText) document.getElementById('hero-btn').textContent = homepage.hero.buttonText;
        if (homepage.hero.backgroundImage) document.getElementById('hero-section').style.backgroundImage = `url(${urlFor(homepage.hero.backgroundImage).width(1920).url()})`;
      }
      
      if (homepage.about) {
        if (homepage.about.title) document.getElementById('about-title').textContent = homepage.about.title;
        if (homepage.about.description) document.getElementById('about-desc').textContent = homepage.about.description;
        if (homepage.about.image) document.getElementById('about-img').src = urlFor(homepage.about.image).width(800).url();
      }
      
      if (homepage.instagram) {
        if (homepage.instagram.text) document.getElementById('insta-text').textContent = homepage.instagram.text;
      }
      
      if (homepage.projectsText) {
        if (homepage.projectsText.title) document.getElementById('projects-title').textContent = homepage.projectsText.title;
        if (homepage.projectsText.description) document.getElementById('projects-desc').textContent = homepage.projectsText.description;
      }

      if (homepage.restore) {
        if (homepage.restore.title) document.getElementById('restore-title').textContent = homepage.restore.title;
        if (homepage.restore.description) document.getElementById('restore-desc').textContent = homepage.restore.description;
        if (homepage.restore.buttonText) document.getElementById('restore-btn').textContent = homepage.restore.buttonText;
        if (homepage.restore.buttonLink) document.getElementById('restore-btn').href = homepage.restore.buttonLink;
        if (homepage.restore.backgroundImage) document.getElementById('restore-section').style.backgroundImage = `url(${urlFor(homepage.restore.backgroundImage).width(1920).url()})`;
      }

      if (homepage.events) {
        if (homepage.events.title) document.getElementById('events-title').textContent = homepage.events.title;
        if (homepage.events.description) document.getElementById('events-desc').textContent = homepage.events.description;
        if (homepage.events.gallery && homepage.events.gallery.length === 6) {
          const g = homepage.events.gallery;
          document.getElementById('events-gallery').innerHTML = `
            <div class="flex flex-col gap-4 md:gap-6 h-[450px] md:h-[700px] lg:h-[800px]">
              <div class="h-[45%] w-full"><img src="${urlFor(g[0]).height(400).url()}" class="w-full h-full object-cover" alt="event" /></div>
              <div class="h-[55%] w-full"><img src="${urlFor(g[1]).height(500).url()}" class="w-full h-full object-cover" alt="event" /></div>
            </div>
            <div class="flex flex-col gap-4 md:gap-6 h-[450px] md:h-[700px] lg:h-[800px]">
              <div class="h-[55%] w-full"><img src="${urlFor(g[2]).height(500).url()}" class="w-full h-full object-cover" alt="event" /></div>
              <div class="h-[45%] w-full"><img src="${urlFor(g[3]).height(400).url()}" class="w-full h-full object-cover" alt="event" /></div>
            </div>
            <div class="col-span-2 md:col-span-1 flex flex-row md:flex-col gap-4 md:gap-6 h-[250px] md:h-[700px] lg:h-[800px]">
              <div class="w-1/2 md:w-full h-full md:h-[45%]"><img src="${urlFor(g[4]).height(400).url()}" class="w-full h-full object-cover" alt="event" /></div>
              <div class="w-1/2 md:w-full h-full md:h-[55%]"><img src="${urlFor(g[5]).height(500).url()}" class="w-full h-full object-cover" alt="event" /></div>
            </div>
          `;
        }
      }

      if (homepage.futureEvents) {
        if (homepage.futureEvents.title) document.getElementById('future-events-title').textContent = homepage.futureEvents.title;
      }

      if (homepage.merch) {
        if (homepage.merch.title) document.getElementById('merch-title').textContent = homepage.merch.title;
        if (homepage.merch.description) document.getElementById('merch-desc').textContent = homepage.merch.description;
      }

      if (homepage.map) {
        if (homepage.map.title) document.getElementById('map-section-title').innerHTML = homepage.map.title.replace(/\n/g, '<br/>');
        if (homepage.map.description) document.getElementById('map-section-desc').textContent = homepage.map.description;
      }

      if (homepage.support) {
        if (homepage.support.title) document.getElementById('support-title').textContent = homepage.support.title;
        if (homepage.support.description) document.getElementById('support-desc').textContent = homepage.support.description;
        if (homepage.support.patreon) {
          const btn = document.getElementById('support-patreon');
          if (homepage.support.patreon.link) btn.href = homepage.support.patreon.link;
          if (homepage.support.patreon.text) btn.textContent = homepage.support.patreon.text;
        }
        if (homepage.support.mono) {
          const btn = document.getElementById('support-mono');
          if (homepage.support.mono.link) btn.href = homepage.support.mono.link;
          if (homepage.support.mono.text) btn.textContent = homepage.support.mono.text;
        }
        if (homepage.support.backgroundImage) document.getElementById('support-section').style.backgroundImage = `url(${urlFor(homepage.support.backgroundImage).width(1920).url()})`;
      }

      if (homepage.footer) {
        if (homepage.footer.logo) {
          const logoUrl = urlFor(homepage.footer.logo).width(200).url();
          const fLogo = document.getElementById('footer-logo');
          if (fLogo) fLogo.src = logoUrl;
        }
        if (homepage.footer.description) document.getElementById('footer-desc').textContent = homepage.footer.description;
        if (homepage.footer.facebook) document.getElementById('footer-fb').href = homepage.footer.facebook;
        if (homepage.footer.youtube) document.getElementById('footer-yt').href = homepage.footer.youtube;
        if (homepage.footer.instagram) document.getElementById('footer-ig').href = homepage.footer.instagram;
        
        if (homepage.footer.copyright) document.getElementById('footer-copyright').textContent = homepage.footer.copyright;
        if (homepage.footer.privacy) {
          const p = document.getElementById('footer-privacy');
          if (homepage.footer.privacy.text) p.textContent = homepage.footer.privacy.text;
          if (homepage.footer.privacy.link) p.href = homepage.footer.privacy.link;
        }
        if (homepage.footer.terms) {
          const t = document.getElementById('footer-terms');
          if (homepage.footer.terms.text) t.textContent = homepage.footer.terms.text;
          if (homepage.footer.terms.link) t.href = homepage.footer.terms.link;
        }
      }
    }
    
    if (projects && projects.length > 0) {
      const wrapper = document.getElementById('projects-wrapper-1');
      if (wrapper) {
        wrapper.innerHTML = projects.map(proj => {
          if (proj.image) {
            return `
              <div class="swiper-slide relative">
                <img src="${urlFor(proj.image).height(500).url()}" class="w-full h-56 lg:h-[452px] object-cover" alt="${proj.title || 'Project'}" />
                <p class="text-xl lg:text-4xl font-bold absolute bottom-2 lg:bottom-7 left-2 lg:left-7 right-2 lg:right-7 drop-shadow-md">${proj.title || ''}</p>
              </div>
            `;
          }
          return '';
        }).join('');
      }
    }

    if (instagramPosts && instagramPosts.length > 0) {
      const wrapper = document.getElementById('insta-wrapper');
      if (wrapper) {
        wrapper.innerHTML = instagramPosts.map(post => {
          if (post.image) {
            return `<a href="${post.link || '#'}" target="_blank" class="swiper-slide !w-[288px]"><img src="${urlFor(post.image).height(400).url()}" alt="${post.title || 'Instagram'}" class="w-full h-[362px] object-cover" /></a>`;
          }
          return '';
        }).join('');
      }
    }

    const futureEventDocs = await client.fetch(`*[_type == "futureEvent"] | order(order asc, _createdAt desc)`);
    if (futureEventDocs && futureEventDocs.length > 0) {
      const wrapper = document.getElementById('future-events-wrapper');
      if (wrapper) {
        wrapper.innerHTML = futureEventDocs.map(slide => `
          <div class="swiper-slide">
            <div class="relative">
              <img src="${slide.image ? urlFor(slide.image).height(400).url() : ''}" class="w-full h-48 lg:h-[372px] object-cover" alt="event slide" />
              <span class="text-lg lg:text-3xl font-bold absolute right-2 top-2 md:right-6 md:top-6">${slide.date || ''}</span>
              <p class="text-lg lg:text-3xl font-bold absolute bottom-2 left-2 md:left-6 md:bottom-6">${slide.title || ''}</p>
            </div>
            <div class="flex flex-col gap-4 mt-4 lg:mt-0 lg:p-6 text-black">
              <p class="text-lg lg:text-xl font-medium">${slide.description || ''}</p>
              ${(slide.buttonLink || slide.buttonText) ? `<a href="${slide.buttonLink || '#'}" target="_blank" class="btn-primary-small bg-transparent text-center">${slide.buttonText || 'Зареєструватись'}</a>` : ''}
            </div>
          </div>
        `).join('');
      }
    }

    const merchItems = await client.fetch(`*[_type == "merchItem"] | order(order asc, _createdAt desc)`);
    if (merchItems && merchItems.length > 0) {
      const wrapper = document.getElementById('merch-wrapper');
      if (wrapper) {
        wrapper.innerHTML = merchItems.map(item => {
          if (item.image) {
            return `
              <div class="swiper-slide relative">
                <img src="${urlFor(item.image).height(500).url()}" class="md:w-full h-auto lg:h-[492px] lg:object-cover" alt="${item.title || 'merch'}" />
              </div>
            `;
          }
          return '';
        }).join('');
      }
    }

    if (mapPoints && mapPoints.length > 0) {
      mapData = mapPoints.map(point => {
        let lat = 0, lng = 0;
        if (point.coordinates) {
          const parts = point.coordinates.split(',');
          if (parts.length >= 2) {
            lat = parseFloat(parts[0].trim());
            lng = parseFloat(parts[1].trim());
          }
        }
        return {
          id: point.id,
          title: point.title || '',
          coords: [lat, lng],
          desc: point.desc || '',
          vitrazh: point.vitrazh || '',
          photo: point.photoAuthors || [],
          images: point.images ? point.images.map(img => urlFor(img).height(600).url()) : []
        };
      });
    }
    
    initSliders();
    initMapMarkers();
    
  } catch (error) {
    console.error("Помилка при завантаженні даних з Sanity:", error);
    initSliders();
    initMapMarkers(); // Відмалювати хоча б пусту мапу
  }
}

function initSliders() {
  const swiper = new Swiper('.eventsSlider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
  });

  document.querySelectorAll('.projectsSlider').forEach(sliderElement => {
    const wrapper = sliderElement.parentElement;
    const slideCount = sliderElement.querySelectorAll('.swiper-slide').length;
    
    new Swiper(sliderElement, {
      loop: slideCount >= 3,
      navigation: {
        nextEl: wrapper.querySelector('.projects-next'),
        prevEl: wrapper.querySelector('.projects-prev'),
      },
      breakpoints: {
        320: { slidesPerView: 1.1, spaceBetween: 16 },
        767: { slidesPerView: 2, spaceBetween: 24 },
        1280: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  });

  const actualEventsSwiper = new Swiper('.actualEventsSlider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    grabCursor: true,
    freeMode: true,
    mousewheel: {
      forceToAxis: true,
    },
  });
}

// Leaflet Map Logic
const map = L.map('leaflet-map', {
  scrollWheelZoom: false,
}).setView([49.552, 25.592], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let mapDetailSwiper;

const initMapDetailSlider = (totalSlides) => {
  if (mapDetailSwiper) {
    mapDetailSwiper.destroy(true, true);
  }

  mapDetailSwiper = new Swiper('.mapDetailSlider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: totalSlides > 1,
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
        if(document.getElementById('map-slide-current')) document.getElementById('map-slide-current').textContent = current;
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

  if (document.getElementById('map-point-id')) document.getElementById('map-point-id').textContent = data.id;
  if (document.getElementById('map-point-title')) document.getElementById('map-point-title').textContent = data.title;
  if (document.getElementById('map-point-desc')) document.getElementById('map-point-desc').textContent = data.desc;
  
  if (document.getElementById('map-point-vitrazh')) {
    document.getElementById('map-point-vitrazh').textContent = data.vitrazh || 'Немає даних';
  }

  const photoEl = document.getElementById('map-point-photo');
  if (photoEl) {
    if (data.photo && data.photo.length > 0) {
      photoEl.innerHTML = `Фото: ${data.photo.map(author => `<span class="underline">${author}</span>`).join(', ')}`;
      photoEl.classList.remove('hidden');
    } else {
      photoEl.classList.add('hidden');
    }
  }

  // Update slides
  const wrapper = document.getElementById('map-slider-wrapper');
  if (wrapper && data.images && data.images.length > 0) {
    wrapper.innerHTML = data.images
      .map(
        (img) => `
      <div class="swiper-slide">
        <img src="${img}" class="w-full h-full object-cover" alt="${data.title}">
      </div>
    `,
      )
      .join('');
    initMapDetailSlider(data.images.length);
  } else if (wrapper) {
    wrapper.innerHTML = '<div class="swiper-slide flex items-center justify-center bg-gray-200 h-full w-full">Немає фотографій</div>';
    initMapDetailSlider(1);
  }
};

function initMapMarkers() {
  if (mapData.length > 0) {
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
    updateMapDetail(mapData[0].id);
  }
}

fetchSanityData();

// Мобільне меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenuBtn.children[0].style.transform = 'translateY(10px) rotate(45deg)';
    mobileMenuBtn.children[1].style.opacity = '0';
    mobileMenuBtn.children[2].style.transform = 'translateY(-10px) rotate(-45deg)';
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuBtn.children[0].style.transform = 'translateY(0) rotate(0)';
    mobileMenuBtn.children[1].style.opacity = '1';
    mobileMenuBtn.children[2].style.transform = 'translateY(0) rotate(0)';
    document.body.style.overflow = 'auto';
  }
}

if(mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});
