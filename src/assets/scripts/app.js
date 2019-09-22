import $ from 'jquery';
import priorityNav from 'priority-nav';

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
        $footerNavTitle.on('click', (e) => {
          let $aim = $(e.target);
          $aim.next().toggleClass('footer-nav__list_open').fadeToggle(200);
        });
        $footerNavLists.hide();
        $footerNavListsOpen.each(function() {
          $(this).show();
        });
        isMobile = true;
      }
    }
    else if (isMobile) {
      $footerNav.removeClass('footer-nav_mobile');
      $footerNavTitle.off('click');
      $footerNavLists.show();
      isMobile = false;
    }
  });

});

// Test
console.log('Ready!');
