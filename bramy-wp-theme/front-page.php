<?php get_header(); ?>
    <!-- Hero -->
    <section
      class="bg-[url('../images/tarnopol-001.png')] w-full flex flex-col min-h-[600px] md:h-[744px] bg-cover bg-center py-6 md:py-14 relative z-0"
    >
      <div
        class="lg:container mx-auto px-5 flex flex-col justify-between flex-1 w-full text-white"
      >
        <h1
          class="font-ermilov uppercase text-3xl lg:text-5xl !leading-[1.2] lg:!leading-[64px] max-w-4xl"
        >
          <?php 
            $hero_title = function_exists('get_field') ? get_field('hero_title') : '';
            echo $hero_title ? $hero_title : 'Розповідаємо про Тернопільщину - зберігаємо її архітектурну спадщину';
          ?>
        </h1>
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-4 mt-12 md:mt-0"
        >
          <p class="text-xl lg:text-2xl max-w-xl">
            <?php 
              $hero_desc = function_exists('get_field') ? get_field('hero_desc') : '';
              echo $hero_desc ? $hero_desc : 'Ми зберігаємо архітектурну спадщину Тернопільщини через освіту, дії громади та любов до краю.';
            ?>
          </p>
          <a
            href="#support"
            class="btn-secondary-small w-full md:w-auto shrink-0 text-center"
          >
            <?php 
              $hero_btn = function_exists('get_field') ? get_field('hero_btn_text') : '';
              echo $hero_btn ? $hero_btn : 'Долучайся до змін';
            ?>
          </a>
        </div>
      </div>
    </section>

    <!-- About Us -->
    <section id="about" class="py-16 lg:py-28">
      <div
        class="lg:container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-20"
      >
        <div class="flex flex-col gap-3 lg:gap-5 lg:w-1/2">
          <h2 class="text-4xl font-ermilov uppercase">
            <?php 
              $about_title = function_exists('get_field') ? get_field('about_title') : '';
              echo $about_title ? $about_title : 'Про нас';
            ?>
          </h2>
          <div class="text-xl text-justify space-y-4">
            <?php 
              $about_desc = function_exists('get_field') ? get_field('about_desc') : '';
              echo $about_desc ? $about_desc : 'Ми - ініціатива, створена у 2022 році...';
            ?>
          </div>
        </div>
        <div class="lg:w-1/2">
          <?php 
            $about_img = function_exists('get_field') ? get_field('about_img') : '';
            $img_url = $about_img ? $about_img : get_template_directory_uri() . '/assets/images/about-us.png';
          ?>
          <img src="<?php echo esc_url($img_url); ?>" alt="about us" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Follow us -->
    <section class="w-full py-12 relative overflow-hidden bg-[#221C09]/15">
      <div class="lg:container mx-auto flex flex-col gap-10 relative px-5">
        <div class="text-xl font-medium leading-tight md:w-1/2">
          <?php 
            $insta_text = function_exists('get_field') ? get_field('insta_text') : '';
            echo $insta_text ? $insta_text : 'Слідкуйте за нами у <b>Instagram:</b> архітектурні відкриття, <br/> бекстейдж реставрацій, історії та анонси подій.';
          ?>
        </div>

        <!-- Slider -->
        <div class="swiper eventsSlider w-full h-full !overflow-visible">
          <div class="swiper-wrapper">
            <?php for ($i = 1; $i <= 5; $i++): ?>
              <?php 
                $insta_img = function_exists('get_field') ? get_field('insta_img_' . $i) : '';
                $insta_link = function_exists('get_field') ? get_field('insta_link_' . $i) : '';
                
                $img_url = $insta_img ? $insta_img : get_template_directory_uri() . '/assets/images/slider/' . $i . '.png';
                $link_url = $insta_link ? $insta_link : '#';
              ?>
              <a href="<?php echo esc_url($link_url); ?>" target="_blank" class="swiper-slide !w-[288px]">
                <img
                  src="<?php echo esc_url($img_url); ?>"
                  alt="instagram"
                  class="w-full h-[362px] object-cover"
                />
              </a>
            <?php endfor; ?>
          </div>
        </div>
      </div>
    </section>

    <!-- Our projects -->
    <section id="projects" class="pt-14 pb-14 md:pb-24">
      <div class="lg:container mx-auto flex flex-col gap-6 lg:gap-8 px-5">
        <div class="flex flex-col gap-3 lg:gap-5">
          <h2 class="text-4xl font-ermilov uppercase">Наші проєкти</h2>
          <p class="text-lg lg:text-2xl max-w-2xl">
            Ми вже втілили низку проєктів, які демонструють, що спільна турбота
            про спадщину це можливо
          </p>
        </div>
        <div class="flex gap-20 relative">
          <!-- Custom Navigation Arrows -->
          <button
            class="projects-prev absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full hidden md:flex items-center justify-center"
          >
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/Arrow-left.svg"
              alt="left"
              class="object-fill"
            />
          </button>
          <button
            class="projects-next absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full hidden md:flex items-center justify-center"
          >
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/Arrow-right.svg"
              alt="right"
              class="object-fill"
            />
          </button>
          <div class="swiper projectsSlider relative w-full h-full">
            <div class="swiper-wrapper text-white">
              <?php
                $projects_query = new WP_Query(array(
                  'post_type'      => 'bramy_project',
                  'posts_per_page' => -1, // Всі проєкти
                  'post_status'    => 'publish',
                  'orderby'        => 'date',
                  'order'          => 'DESC'
                ));

                if ($projects_query->have_posts()) :
                  while ($projects_query->have_posts()) : $projects_query->the_post();
                    $thumbnail_url = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : get_template_directory_uri() . '/assets/images/slider/project-1.png';
              ?>
                <div class="swiper-slide relative">
                  <img
                    src="<?php echo esc_url($thumbnail_url); ?>"
                    class="w-full h-56 lg:h-[452px] object-cover"
                    alt="<?php echo esc_attr(get_the_title()); ?>"
                  />
                  <p
                    class="text-xl lg:text-4xl font-bold absolute bottom-2 lg:bottom-7 left-2 lg:left-7 right-2 lg:right-7"
                  >
                    <?php the_title(); ?>
                  </p>
                </div>
              <?php
                  endwhile;
                  wp_reset_postdata();
                else :
              ?>
                <!-- Fallback / Demo Slides if no projects are added yet -->
                <div class="swiper-slide relative">
                  <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/slider/project-1.png"
                    class="w-full h-56 lg:h-[452px] object-cover"
                    alt="Demo Project"
                  />
                  <p class="text-xl lg:text-4xl font-bold absolute bottom-2 lg:bottom-7 left-2 lg:left-7 right-2 lg:right-7">
                    Кована сецесійна брама (Демо)
                  </p>
                </div>
                <div class="swiper-slide relative">
                  <img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/slider/project-2.png"
                    class="w-full h-56 lg:h-[452px] object-cover"
                    alt="Demo Project"
                  />
                  <p class="text-xl lg:text-4xl font-bold absolute bottom-2 lg:bottom-7 left-2 lg:left-7 right-2 lg:right-7">
                    100 літні розписи (Демо)
                  </p>
                </div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Restore -->
    <section
      class="bg-[url('../images/restore-bg.png')] w-full flex flex-col min-h-[496px] bg-cover bg-center py-6 md:py-14 relative z-0"
    >
      <div
        class="lg:container mx-auto px-5 flex flex-col gap-5 justify-between flex-1 w-full text-white"
      >
        <h2 class="text-4xl font-ermilov uppercase max-w-2xl">
          Хочете відновити свою браму, розписи чи ліпнину?
        </h2>
        <div
          class="flex flex-col lg:flex-row justify-between lg:items-center gap-5"
        >
          <p class="text-lg lg:text-2xl max-w-2xl">
            Якщо ви мешкаєте в будинку з історією - ми можемо допомогти.
            Заповніть форму, і ми зв’яжемося з вами.
          </p>
          <a
            href="https://docs.google.com/forms/d/1Sidz5hJRD-VHfCTXhAw-ZLKpiSwG63sZ5EjhoqSMnAY/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary-small w-full text-center sm:w-fit"
          >
            Заповнити форму
          </a>
        </div>
      </div>
    </section>

    <!-- Our events -->
    <section id="events" class="py-16 lg:py-28">
      <div
        class="lg:container mx-auto mb-10 px-5 flex flex-col gap-6 lg:gap-10"
      >
        <div class="flex flex-col gap-3 lg:gap-5">
          <h2 class="text-4xl font-ermilov uppercase">Наші події</h2>
          <p class="text-lg lg:text-2xl max-w-2xl">
            Ми проводимо публічні освітні події, лекції, воркшопи та екскурсії.
            А також проводимо події для корпоративних клієнтів
          </p>
        </div>

        <!-- Gallery -->
        <div class="lg:container mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <!-- 1 col -->
            <div
              class="flex flex-col gap-4 md:gap-6 h-[450px] md:h-[700px] lg:h-[800px]"
            >
              <div class="h-[45%] w-full">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-1.png"
                  class="w-full h-full object-cover"
                  alt="event 1"
                />
              </div>
              <div class="h-[55%] w-full">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-4.png"
                  class="w-full h-full object-cover"
                  alt="event 2"
                />
              </div>
            </div>

            <!-- 2 col -->
            <div
              class="flex flex-col gap-4 md:gap-6 h-[450px] md:h-[700px] lg:h-[800px]"
            >
              <div class="h-[55%] w-full">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-2.png"
                  class="w-full h-full object-cover"
                  alt="event 3"
                />
              </div>
              <div class="h-[45%] w-full">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-5.png"
                  class="w-full h-full object-cover"
                  alt="event 4"
                />
              </div>
            </div>

            <!-- 3 col -->
            <div
              class="col-span-2 md:col-span-1 flex flex-row md:flex-col gap-4 md:gap-6 h-[250px] md:h-[700px] lg:h-[800px]"
            >
              <div class="w-1/2 md:w-full h-full md:h-[45%]">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-3.png"
                  class="w-full h-full object-cover"
                  alt="event 5"
                />
              </div>
              <div class="w-1/2 md:w-full h-full md:h-[55%]">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/event-6.png"
                  class="w-full h-full object-cover"
                  alt="event 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future events -->
    <section class="w-full py-12 relative overflow-hidden bg-[#221C09]/15">
      <div
        class="lg:container mx-auto flex flex-col gap-3 lg:gap-5 relative px-5"
      >
        <h2 class="text-4xl font-ermilov uppercase">Анонс МАЙБУТНІХ ПОДІЙ</h2>

        <div
          class="swiper projectsSlider relative w-full h-full !overflow-visible"
        >
          <div class="swiper-wrapper text-white">
            <!-- Slide 1 -->
            <div class="swiper-slide">
              <div class="relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/future-event.png"
                  class="w-full h-48 lg:h-[372px] object-cover"
                  alt="event slide"
                />
                <span
                  class="text-lg lg:text-3xl font-bold absolute right-2 top-2 md:right-6 md:top-6"
                >
                  /20/06/
                </span>
                <p
                  class="text-lg lg:text-3xl font-bold absolute bottom-2 left-2 md:left-6 md:bottom-6"
                >
                  Екскурсія інтелектуальний Тернопіль
                </p>
              </div>

              <div class="flex flex-col gap-4 mt-4 lg:mt-0 lg:p-6 text-black">
                <p class="text-lg lg:text-xl font-medium">
                  Ця унікальна мандрівка з істориком Володимиром Окаринським
                  відкриє Тернопіль крізь призму його української інтеліґенції.
                  Учасники пройдуть місцями, де жили й працювали видатні діячі
                  культури, та побачать будинки, в яких зароджувалася ідея нашої
                  державності.
                </p>
                <a
                  href="#support"
                  class="btn-primary-small bg-transparent text-center"
                >
                  Заповнити форму
                </a>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide">
              <div class="relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/future-event.png"
                  class="w-full h-48 lg:h-[372px] object-cover"
                  alt="event slide"
                />
                <span
                  class="text-lg lg:text-3xl font-bold absolute right-2 top-2 md:right-6 md:top-6"
                >
                  /20/06/
                </span>
                <p
                  class="text-lg lg:text-3xl font-bold absolute bottom-2 left-2 md:left-6 md:bottom-6"
                >
                  Екскурсія інтелектуальний Тернопіль
                </p>
              </div>

              <div class="flex flex-col gap-4 mt-4 lg:mt-0 lg:p-6 text-black">
                <p class="text-lg lg:text-xl font-medium">
                  Ця унікальна мандрівка з істориком Володимиром Окаринським
                  відкриє Тернопіль крізь призму його української інтеліґенції.
                  Учасники пройдуть місцями, де жили й працювали видатні діячі
                  культури, та побачать будинки, в яких зароджувалася ідея нашої
                  державності.
                </p>
                <a
                  href="#support"
                  class="btn-primary-small bg-transparent text-center"
                >
                  Заповнити форму
                </a>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide">
              <div class="relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/events/future-event.png"
                  class="w-full h-48 lg:h-[372px] object-cover"
                  alt="event slide"
                />
                <span
                  class="text-lg lg:text-3xl font-bold absolute right-2 top-2 md:right-6 md:top-6"
                >
                  /20/06/
                </span>
                <p
                  class="text-lg lg:text-3xl font-bold absolute bottom-2 left-2 md:left-6 md:bottom-6"
                >
                  Екскурсія інтелектуальний Тернопіль
                </p>
              </div>

              <div class="flex flex-col gap-4 mt-4 lg:mt-0 lg:p-6 text-black">
                <p class="text-lg lg:text-xl font-medium">
                  Ця унікальна мандрівка з істориком Володимиром Окаринським
                  відкриє Тернопіль крізь призму його української інтеліґенції.
                  Учасники пройдуть місцями, де жили й працювали видатні діячі
                  культури, та побачать будинки, в яких зароджувалася ідея нашої
                  державності.
                </p>
                <a
                  href="#support"
                  class="btn-primary-small bg-transparent text-center"
                >
                  Заповнити форму
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our merch -->
    <section id="projects" class="pt-14 pb-14 md:pb-24">
      <div class="lg:container mx-auto flex flex-col gap-6 lg:gap-8 px-5">
        <div class="flex flex-col gap-3 lg:gap-5">
          <h2 class="text-4xl font-ermilov uppercase">Наш мерч</h2>
          <p class="text-lg lg:text-2xl max-w-2xl">
            Це візуальне продовження наших цінностей. Лімітована серія одягу та
            сувенірів, розроблена з увагою до деталей.
          </p>
        </div>
        <div class="flex gap-20 relative">
          <!-- Custom Navigation Arrows -->
          <button
            class="projects-prev absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full hidden md:flex items-center justify-center"
          >
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/Arrow-left.svg"
              alt="left"
              class="object-fill"
            />
          </button>
          <button
            class="projects-next absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full hidden md:flex items-center justify-center"
          >
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/Arrow-right.svg"
              alt="right"
              class="object-fill"
            />
          </button>
          <div class="swiper projectsSlider relative w-full h-full">
            <div class="swiper-wrapper text-white">
              <!-- Slide 1 -->
              <div class="swiper-slide relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/merch.png"
                  class="md:w-full h-auto lg:h-[492px] lg:object-cover"
                  alt="Project slide"
                />
              </div>
              <!-- Slide 2 -->
              <div class="swiper-slide relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/merch.png"
                  class="md:w-full h-auto lg:h-[492px] lg:object-cover"
                  alt="Project slide"
                />
              </div>
              <!-- Slide 3 -->
              <div class="swiper-slide relative">
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/merch.png"
                  class="md:w-full h-auto lg:h-[492px] lg:object-cover"
                  alt="Project slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section id="map" class="py-16 lg:py-28">
      <div class="lg:container mx-auto flex flex-col gap-3 lg:gap-5 px-5">
        <h2 class="text-4xl font-ermilov uppercase">
          Інтерактивна мапа
          <br />
          історичних брам Тернополя
        </h2>
        <p class="text-lg lg:text-2xl max-w-2xl">
          Ми створили інтерактивну мапу старих брам Тернополя, як пам’ять про
          архітектуру та важливість дії. Перегляньте, та долучіться до їхнього
          збереження.
        </p>

        <div class="mt-12 flex flex-col lg:flex-row gap-5 lg:gap-10">
          <!-- Map Container -->
          <div class="lg:w-1/2 flex flex-col gap-5 lg:gap-10">
            <div id="leaflet-map" class="h-[400px]"></div>
            <div id="map-detail-info" class="max-w-lg">
              <div class="flex items-center gap-4 mb-4 lg:mb-8">
                <div
                  class="flex items-center justify-center border-cyan border-2 rounded-full w-10 h-10 text-white"
                >
                  <span
                    id="map-point-id"
                    class="flex items-center justify-center rounded-full p-2 w-8 h-8 bg-cyan font-bold text-xl"
                  >
                    1
                  </span>
                </div>
                <h3
                  id="map-point-title"
                  class="text-3xl font-bold font-ermilov"
                >
                  Сагайдачного, 11
                </h3>
              </div>
              <div class="flex flex-col gap-4 text-lg pl-14">
                <p
                  id="map-point-desc"
                  class="text-lg lg:text-2xl text-justify leading-tight"
                >
                  Сецесійна брама початку XX століття, відреставрована завдяки
                  ГО «Брами Тернополя» у 2024 році.
                </p>
                <p class="text-base lg:text-lg">
                  Вітраж:
                  <a
                    href="#"
                    id="map-point-vitrazh"
                    class="underline hover:opacity-70 transition-all"
                  >
                    Ліля Василько
                  </a>
                </p>
                <p id="map-point-photo" class="text-base lg:text-lg">
                  Фото:
                  <a href="#" class="underline hover:opacity-70 transition-all">
                    Захар Дябло
                  </a>
                  ,
                  <a href="#" class="underline hover:opacity-70 transition-all">
                    Анна Золотнюк
                  </a>
                </p>
              </div>
              <div class="md:w-1/2 pl-14 flex flex-col justify-between">
                <!-- Slide counter or pagination if needed -->
                <div class="mt-8 flex items-center gap-2">
                  <span id="map-slide-current" class="text-sm font-bold">
                    01
                  </span>
                  <span class="text-sm opacity-30">/</span>
                  <span id="map-slide-total" class="text-sm opacity-30">
                    03
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Detail Info & Slider -->
          <div
            class="flex flex-col lg:w-1/2 md:flex-row bg-white relative rounded-sm overflow-hidden min-h-[417px]"
          >
            <!-- Right Slider Part -->
            <div
              class="w-full max-w-[450px] mx-auto lg:max-w-full relative h-[500px] lg:h-[656px]"
            >
              <div class="swiper mapDetailSlider h-full">
                <div class="swiper-wrapper" id="map-slider-wrapper">
                  <!-- Slides will be injected via JS -->
                </div>

                <!-- Custom Pagination -->
                <div
                  class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 map-detail-pagination"
                ></div>
              </div>

              <!-- Navigation Arrow -->
              <button
                class="map-detail-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section
      id="support"
      class="bg-[url('../images/support-bg.png')] w-full flex flex-col min-h-[496px] bg-cover bg-center py-6 md:py-14 relative z-0"
    >
      <div
        class="lg:container mx-auto px-5 flex flex-col gap-5 justify-between flex-1 w-full text-white"
      >
        <h2 class="text-4xl lg:text-6xl font-ermilov uppercase">
          Бажаєте підтримати проєкт?
        </h2>
        <div
          class="flex flex-col lg:flex-row justify-between lg:items-center gap-5"
        >
          <p class="text-lg lg:text-2xl max-w-xl">
            Допоможіть нам зберегти спадщину Тернопілля. Ваша підтримка це ще
            одна врятована брама, ще один віднайдений розпис, ще одне
            дослідження.
          </p>
          <div class="flex flex-col sm:flex-row gap-5 lg:gap-10">
            <a
              href="https://www.patreon.com/cw/bramy_tarnopola"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary-small w-full text-center sm:w-fit hover:opacity-80 transition-opacity"
            >
              Patreon
            </a>
            <a
              href="https://base.monobank.ua/Aj6jJ2bVpGWR6d#subscriptions"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary-small w-full text-center sm:w-fit hover:opacity-80 transition-opacity"
            >
              MONO Base
            </a>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>
