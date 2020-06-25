$(document).ready(() => {

  $('.downarrow').on('click', event => {
    $(event.currentTarget).toggleClass('uparrow');
    $(event.currentTarget).parent().siblings().toggleClass('hide');
  })

});
