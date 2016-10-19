$('.tabs li ').on('click', function(e){
    e.preventDefault();
    var $tabli=$(this);
    var idx=$tabli.index();

    $tabli.siblings().removeClass('active');
    $tabli.addClass('active');

    $tabli.parents('#box').find('.wrap').removeClass('active');
    $tabli.parents('#box').find('.wrap').eq(idx).addClass('active');
});

$('.wrap .prod').on('mouseenter', function(e){
      $(this).addClass('hover');
});

$('.prod').on('mouseleave', function(e){
      $(this).removeClass('hover');
});
