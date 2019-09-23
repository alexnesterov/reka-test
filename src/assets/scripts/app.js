import $ from 'jquery';
import priorityNav from 'priority-nav';
import Swiper from 'swiper';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

let $window = $(window);

$window.on('load', function() {
  $('body').addClass('page_ready');
});

$(function() {
  var nav = priorityNav.init({
    mainNavWrapper: '.menu__nav-wrap .menu__nav',
    mainNav: '.menu__nav-wrap .menu__nav .menu__nav-list',
    navDropdownLabel: 'Ещё',
    navDropdownClassName: 'menu__nav-dropdown',
    navDropdownToggleClassName: 'menu__nav-dropdown-toggle'
  });
});

/**
 * Notify
 */
$(function() {
  let $notify = $('.notify'),
    $notifyClose = $notify.find('.notify__close');

  $notifyClose.on('click', () => {
    $notify.remove();
  });
});

/**
 * Hero Slider
 */
$(function() {
  let mySwiper = new Swiper('.hero .swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.hero .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.hero .swiper-button-next',
      prevEl: '.hero .swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.hero .swiper-scrollbar',
    },
    speed: 600,
    breakpoints: {
      // when window width is >= 320px
      320: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
    }
  });
});

/**
 * Features Slider
 */
$(function() {
  let mySwiper = new Swiper('.features .swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    loop: true,
    pagination: {
      el: '.features .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.features .swiper-button-next',
      prevEl: '.features .swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.features .swiper-scrollbar',
    },
    speed: 600,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });
});

/**
 * Logos Slider
 */
$(function() {
  let mySwiper = new Swiper('.logos .swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    pagination: {
      el: '.logos .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.logos .swiper-button-next',
      prevEl: '.logos .swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.logos .swiper-scrollbar',
    },
    speed: 600,
    breakpoints: {
      // when window width is >= 320px
      320: {
        centeredSlides: true,
        slidesPerView: 'auto',
      },
      992: {
        slidesPerView: 5,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 6,
        centeredSlides: false,
      },
    }
  });
});

/**
 * Top Products Slider
 */
$(function() {
  let mySwiper = new Swiper('.top-products .swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    pagination: {
      el: '.top-products .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.top-products .swiper-button-next',
      prevEl: '.top-products .swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.top-products .swiper-scrollbar',
    },
    speed: 600,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 4,
        centeredSlides: false,
      },
    }
  });
});

/**
 * Footer Nav
 */
$(function() {
  let $footerNav = $('.footer-nav'),
    $footerNavTitle = $footerNav.find('.footer-nav__title'),
    $footerNavLists = $footerNav.find('.footer-nav__list');
  let isMobile = false;

  $window.on('resize load', () => {
    let windowWidth = $(window).width();
    let $footerNavListsOpen = $footerNav.find('.footer-nav__list_open');

    if (windowWidth <= 992) {
      if (!isMobile) {
        $footerNav.addClass('footer-nav_mobile');
        $footerNavTitle.on('click', e => {
          let $aim = $(e.target);
          $aim
            .next()
            .toggleClass('footer-nav__list_open')
            .fadeToggle(200);
        });
        $footerNavLists.hide();
        $footerNavListsOpen.each(function() {
          $(this).show();
        });
        isMobile = true;
      }
    } else if (isMobile) {
      $footerNav.removeClass('footer-nav_mobile');
      $footerNavTitle.off('click');
      $footerNavLists.show();
      isMobile = false;
    }
  });
});

// Test
console.log('Ready!');
