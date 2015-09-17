$(document).ready(function() {

  $('.modal').on('hidden.bs.modal', function(){
    $("iframe").each(function() {
            var src= $(this).attr('src');
            $(this).attr('src',src);
    });
  });

});
