<!doctype html>
<html <?php language_attributes(); ?>>
<head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bramy Ternopola</title>
    <link rel="icon" type="image/svg+xml" href="<?php echo get_template_directory_uri(); ?>/assets/images/icons/mob-icon.svg" />
    
    
    
  <?php wp_head(); ?>
  </head>

  <body>
    <!-- Header -->
    <header class="relative bg-white z-50">
      <nav
        class="lg:container mx-auto pt-10 pb-5 px-5 flex justify-between items-center transition-all duration-700"
      >
        <a href="#" class="relative z-50">
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon.svg"
            class="hidden lg:block"
            width="182"
            height="32"
            alt="icon"
          />
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/mob-icon.svg"
            class="block lg:hidden"
            width="41"
            height="26"
            alt="icon"
          />
        </a>

        <!-- Десктопне меню -->
        <div class="hidden md:flex items-center text-xl md:gap-14">
          <?php
          wp_nav_menu(array(
              'theme_location' => 'header-menu',
              'container'      => false,
              'menu_class'     => 'font-medium flex items-center gap-5 lg:gap-14',
              'fallback_cb'    => false
          ));
          ?>
          <a href="#support" class="btn-primary-small">Підтримати</a>
        </div>

        <!-- Кнопка мобільного меню (гамбургер) -->
        <button
          id="mobile-menu-btn"
          class="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 relative z-50 focus:outline-none"
        >
          <span
            class="w-8 h-1 bg-black rounded-full transition-all duration-300"
          ></span>
          <span
            class="w-8 h-1 bg-black rounded-full transition-all duration-300"
          ></span>
          <span
            class="w-8 h-1 bg-black rounded-full transition-all duration-300"
          ></span>
        </button>
      </nav>

      <!-- Мобільне меню (випадаюче) -->
      <div
        id="mobile-menu"
        class="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-5"
      >
        <?php
        wp_nav_menu(array(
            'theme_location' => 'mobile-menu',
            'container'      => false,
            'menu_class'     => 'font-medium flex flex-col gap-8 text-2xl',
            'fallback_cb'    => false
        ));
        ?>
        <div class="mt-12">
          <a
            href="#support"
            class="btn-primary-small w-full text-center mobile-link"
          >
            Підтримати
          </a>
        </div>
      </div>
    </header>
