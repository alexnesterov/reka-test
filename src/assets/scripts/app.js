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

$(window).on('load', function() {
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

// Test
console.log('Ready!');
