var products = [ //创建用于储存数据的数组
      {
            img: 'img/gold.jpg',
            prodname: '金块 ',
            prodprice: '￥405.00'
      },{
            img: 'img/gold.jpg',
            prodname: '金块 ',
            prodprice: '￥100.00'
      },{
            img: 'img/gold.jpg',
            prodname: '金块 ',
            prodprice: '￥45.00'
      }
];
$(function(){//待DOM加载完成之后执行预先定义好的函数
     for (var k in products) {//遍历数组
      var str = '';
      str += '<li class="prod">';
      str += '<div class="cover"><a class="btn" href="">立即抢购</a></div>';
      str +='<img src="'+products[k].img+'"alt="">'
      str +='<p class="prodname">'+products[k].prodname+'</p>'
      str += '<div class="prodprice">'+products[k].prodprice+'</div>';
      str += '</a></li>';
      $('.addbtn').on('click',function(e){
               e.preventDefault();
               $('.wrap').append(str);//添加元素
      })
     }
})

$('.wrap').on('mouseenter','.prod',function(e){//绑定事件,当鼠标放入图片时显示阴影
      $(this).addClass('hover');
});
$('.wrap').on('mouseleave','.prod', function(e){//绑定事件,当鼠标离开图片时去除阴影
      $(this).removeClass('hover');
});
