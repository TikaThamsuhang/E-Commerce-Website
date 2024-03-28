$(document).ready(function() {

    $('.image-choose input').on('click', function() {
        var imagetype = $(this).attr('data-image');
  
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + imagetype + ']').addClass('active');
        $(this).addClass('active');
    });
  
  });
  