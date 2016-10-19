      var index = 2,
       $ct= $(".ct"),
       $more =$(".more"),
       clock;

      load();     //先执行load函数加载可是区的内容

      $(window).on('scroll',function(){//滚动一次可能会发起多个请求,用函数节流,限制加载次数
            if(clock) clearTimeout(clock);
            clock = setTimeout(function(){
                if(!isVisible($more)) return;
                load();
             }, 100);
      });
      function load(){ //加载方法
            $.ajax({ //ajax
               url: "scrollLoad.php",
               type: "get",
                 data:{
                    pageStart: index,
                    len:12
                 },
                 success: function(res){ //成功后执行的函数
                    success(res);
                 },
                 error: function(){//失败后执行的函数
                    error();
                 }
            });
      }

      function success(res){
         console.log(res);
         var arr = JSON.parse(res); //将后台响应的字符串解析成JSON对象
         for(var i=0; i<arr.data.length; i++){
             $ct.append('<li>内容'+arr.data[i]+'</li>')
         }
         index += 12; //index更新
      }
      function error(){
         alert("出错了!");
      }

      function isVisible($node){//判断节点是否出现在可是区
          var winH = $(window).height(),
              scrollTop = $(window).scrollTop(),
              offsetH = $node.offset().top;
          if((offsetH < winH+scrollTop )&&(offsetH > scrollTop )){
              return true;
          }else{
              return false;
          }
      }
