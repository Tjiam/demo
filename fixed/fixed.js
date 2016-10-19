$('.nav').each(function(){
    var $nav=$(this),
          $offsetTop=$nav.offset().top,
          $offsetLeft=$nav.offset().left,
          $navWidth=$nav.width(),
          $navHeght=$nav.height();

    $(window).on('scroll',function(){
              var scrollTop=$(this).scrollTop();
              if(scrollTop>=$offsetTop){ //判断滚动条滚动的值是否大于等于$nav到文档顶部的值,也就是$nav是否挨到了可是窗口的顶部
                                    setFixed();   //固定
              }else{
                                    unFixed(); //接触固定
             }
    });

    function setFixed(){//固定
        $nav.css({
            'position' : 'fixed' ,
            'top' : 0,
            'left' : $offsetLeft,
            'width' : $navWidth,
            'margin' : 0,
            'z-index' : 2,
        });
    }

    function unFixed(){
        $nav.removeAttr('style');
    }
});
