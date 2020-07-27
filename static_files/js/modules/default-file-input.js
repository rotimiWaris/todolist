'use strict';

(function ($) {
  $('.input-default-wrapper').on('change', '.input-default-js', function (e) {

    var $this = $(e.target),
      $label = $this.next('label'),
      $files = $this[0].files;
    var fileName = '';

    if ($files && $files.length > 1) {
      fileName = ($this.attr('data-multiple-target') || '').replace('{target}', $files.length);
    } else if (e.target.value) {
      fileName = e.target.value.split('\\').pop();
    }
    fileName ? $label.find('.span-choose-file').html(fileName) : $label.html($label.html());
  });
})(jQuery);

(function ($) {
  let date = new Date();
  let currentHour = date.getHours();

  let message;

  if (currentHour >= 5 && currentHour < 12) {
    message = "Good Morning"

  } else if (currentHour >= 12 && currentHour < 18) {
    message = "Good Afternoon"

  } else if (currentHour >= 18 && currentHour < 24) {
    message = "Good Evening"

  } else if (currentHour >= 24 && currentHour < 5) {
    message = "You Should be sleeping"

  } else {
    message = "Are you from another planet"
  }

  console.log("message")
})