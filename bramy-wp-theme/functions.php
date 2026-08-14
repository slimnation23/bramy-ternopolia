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

// Реєстрація меню
function bramy_register_menus() {
    register_nav_menus(array(
        'header-menu' => 'Головне меню (Шапка)',
        'mobile-menu' => 'Мобільне меню'
    ));
}
add_action('init', 'bramy_register_menus');

// Додавання Tailwind класів до посилань <a> в меню
function bramy_menu_link_classes($atts, $item, $args) {
    if (isset($args->theme_location)) {
        if ($args->theme_location == 'header-menu') {
            $atts['class'] = 'hover:opacity-70 transition-all duration-300 ease-in-out';
        } elseif ($args->theme_location == 'mobile-menu') {
            $atts['class'] = 'mobile-link hover:opacity-70';
        }
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'bramy_menu_link_classes', 10, 3);

// Реєстрація Custom Post Type для "Проєктів"
function bramy_register_projects_cpt() {
    $labels = array(
        'name'                  => 'Проєкти',
        'singular_name'         => 'Проєкт',
        'menu_name'             => 'Проєкти',
        'add_new'               => 'Додати новий',
        'add_new_item'          => 'Додати новий проєкт',
        'edit_item'             => 'Редагувати проєкт',
        'new_item'              => 'Новий проєкт',
        'view_item'             => 'Переглянути проєкт',
        'search_items'          => 'Шукати проєкти',
        'not_found'             => 'Проєктів не знайдено',
        'not_found_in_trash'    => 'В кошику проєктів не знайдено',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'projects' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'menu_icon'          => 'dashicons-hammer', // Іконка молотка в адмінці
        'supports'           => array( 'title', 'thumbnail' ), // Заголовок і Мініатюра
    );

    register_post_type( 'bramy_project', $args );
}
add_action( 'init', 'bramy_register_projects_cpt' );
