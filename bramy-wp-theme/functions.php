<?php

function bramy_ternopola_enqueue_scripts() {
    // Підключення Swiper CSS
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    
    // Підключення Leaflet CSS
    wp_enqueue_style('leaflet-css', 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css');
    
    // Головні стилі (Tailwind)
    wp_enqueue_style('bramy-main-css', get_template_directory_uri() . '/assets/css/output.css', array(), time());
    
    // Стилі самої теми
    wp_enqueue_style('bramy-style', get_stylesheet_uri(), array(), time());

    // Leaflet JS
    wp_enqueue_script('leaflet-js', 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js', array(), null, true);
    
    // Swiper JS
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
    
    // Власний скрипт
    wp_enqueue_script('bramy-script', get_template_directory_uri() . '/assets/script.js', array('leaflet-js', 'swiper-js'), time(), true);
    
    // Передаємо шлях до папки теми в JavaScript
    wp_localize_script('bramy-script', 'bramyTheme', array(
        'themeUrl' => get_template_directory_uri()
    ));
}
add_action('wp_enqueue_scripts', 'bramy_ternopola_enqueue_scripts');

function bramy_ternopola_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'bramy_ternopola_setup');
