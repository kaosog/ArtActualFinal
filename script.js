for (let i = 1; i <= 10; i++) {
    $('#book').append(`<div class="page" id="page${i}"></div>`);
    $(`#page${i}`).load(`pages/page${i}.html`);
  }
  
  $(document).ready(function () {
    $('#book').turn({
      width: 1200,
      height: 700,
      autoCenter: true,
      elevation: 50,
      gradients: true,
      duration: 1000
    });
  
    $(window).on('keydown', function (e) {
      if (e.target && e.target.tagName.toLowerCase() !== 'input') {
        if (e.keyCode === 37) $('#book').turn('previous');
        else if (e.keyCode === 39) $('#book').turn('next');
      }
    });
  
    $('#book').on('click', function (e) {
      const offset = $(this).offset();
      const width = $(this).width();
      const clickX = e.pageX - offset.left;
  
      if (clickX < width / 2) {
        $(this).turn('previous');
      } else {
        $(this).turn('next');
      }
    });
  
    $('#book').on('wheel', function (e) {
      e.preventDefault();
      const delta = e.originalEvent.deltaY;
      if (delta > 0) {
        $(this).turn('next');
      } else {
        $(this).turn('previous');
      }
    });
  });

  $(document).ready(function () {
    // existing setup...
  
    $('#page-slider').on('input', function () {
      const page = parseInt($(this).val());
      $('#book').turn('page', page);
      $('#page-display').text(`Page ${page}`);
    });
  
    $('#book').bind('turned', function (e, page) {
      $('#page-slider').val(page);
      $('#page-display').text(`Page ${page}`);
    });
  });
  
  