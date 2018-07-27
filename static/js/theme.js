// Mobile-friendly topbar menu
$(function() {
  var menu = $('#menu');
  var menuButton = $('#menu-button');
  var menuButtonArrow = $('#menu-button-arrow');
  menuButton.click(function(event) {
    menu.toggleClass('menu-visible');
    menuButtonArrow.toggleClass('vertical-flip');
    event.preventDefault();
    return false;
  });
});
