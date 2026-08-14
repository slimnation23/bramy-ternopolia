    <footer class="py-20 bg-gray2">
      <div class="lg:container mx-auto px-5 flex flex-col gap-16">
        <div
          class="flex flex-col md:flex-row justify-between md:items-center gap-5"
        >
          <a href="#" class="w-fit">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/icon.svg" alt="logo" class="h-9 w-52" />
          </a>
          <div
            class="md:w-1/2 flex flex-col md:flex-row gap-2.5 md:gap-11 md:items-center"
          >
            <p class="text-2xl">Ми в соцмережах</p>
            <div class="flex gap-9 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=100094400920484"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-70 transition-all"
              >
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/fb.svg" alt="fb" class="w-12 h-12" />
              </a>
              <a
                href="https://www.youtube.com/@BramyTernopola"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-70 transition-all"
              >
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/youtube.svg"
                  alt="youtube"
                  class="w-12 h-12"
                />
              </a>
              <a
                href="https://www.instagram.com/bramy.ternopola/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-70 transition-all"
              >
                <img
                  src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/insta.svg"
                  alt="insta"
                  class="w-12 h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-5">
          <p>© 2025 Громадська організація Брами Тернополя</p>
          <a
            href="#"
            class="hover:opacity-70 transition-all duration-300 ease-in-out"
          >
            Конфіденційність та політика
          </a>
          <a
            href="#"
            class="hover:opacity-70 transition-all duration-300 ease-in-out"
          >
            Правила та умови
          </a>
        </div>
      </div>
    </footer>

    
    
    
  <?php wp_footer(); ?>
  </body>
</html>
