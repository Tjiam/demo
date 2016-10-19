$( window ).on( "load", function(){
      function waterFall($node){
          var $wrapW=$node.outerWidth(true), //获取瀑布流每个图片包裹层的宽度
                  $cols =Math.floor($(window).width()/$wrapW),//计算出每横向能放置多少列图片
                  arrH=[];//创建数组,用于储存每列数组的高度

                  for(var i=0;i<$cols;i++){//创建好数组长度,也就是横排占位数
                      arrH.push(0);
                  }
                  $node.each(function(){//遍历每个包裹层
                              var $cur = $(this);
                              var idx = 0,//初始化高度数组的索引,设为0
                                  minSumHeight = arrH[0];//初始化数组中最小高度值,设为0
                              for(var i=0;i<arrH.length; i++){//找出数组中的最小值以及索引
                                        if(arrH[i] < minSumHeight){
                                            idx = i;
                                            minSumHeight = arrH[i];
                                        }
                              }
                              $cur.css({//用绝对定位将包裹层定位在高度最小一列图片的下方
                                  'position':'absolute',
                                  'left': $wrapW*idx,
                                  'top': minSumHeight
                          });
                          arrH[idx] = $cur.outerHeight(true) + arrH[idx];//更新储存每列图片高度的数组
                          console.log(arrH)
                  })
              $(window).on('resize',function(){// 当窗口大小发生变化时,重新进行瀑布流排列
                  waterFall();
              })
      }
      waterFall($('.wrap'));
});
