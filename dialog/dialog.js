function Dialog(){

}
Dialog.prototype={
    defualts : {      //默认设置
        title:'',      //标题栏内容
        content:'默认内容',      //内容栏默认内容
        isShowConfirmBtn:true,      //确定按钮显示(默认true)
        isShowCancelBtn:true,      //取消按钮显示(默认true)
    },
    open : function(opts){
        this.create();
        this.setOpts(opts);
        this.bindEvent();
    },
    setOpts : function(opts){ // opts为对话框显示内容的设置,作为参数传入
        var settings=$.extend({},this.defualts,opts);      //扩展,进行合并为settings(设置的内容 )
        if(!settings.title){      //判断是否有title
            this.$dialog.find('.dialog-header ').hide();      //隐藏标题栏
        }else{
            this.$dialog.find('.dialog-header .title').text(settings.title);      //显示title内容
        }
        this.$dialog.find('.dialog-content').html(settings.content);       //显示内容层内容
        if(settings.isShowConfirmBtn){      //判断是否显示确定按钮
            this.$dialog.find('.dialog-footer .confirm').show(); //显示确定按钮
        }else{
            this.$dialog.find('dialog-footer .confirm').hide();      //隐藏确定按钮
        }
        if(settings.isShowCancelBtn){      //判断是否显示取消按钮
            this.$dialog.find('.dialog-footer .cancel').show();       //显示取消按钮
        }else{
            this.$dialog.find('.dialog-footer .cancel').hide();      //隐藏取消按钮
        }
        if(settings.onConfirm){       //判断是否存在点击确定按钮时候还有后续函数
            this.$dialog.find('.dialog-footer .confirm').on('click',settings.onConfirm); //点击确定按钮后执行后续函数
        }
        if(settings.onCancel){      //判断是否存在点击取消按钮时候还有后续函数
            this.$dialog.find('.dialog-footer .cancel').on('click',settings.onCancel);      //点击取消按钮时候执行后续函数
        }

    },
    create : function(){      //创建对话框DOM结构
        var dialog='<div class="dialog">';
        dialog+='<div class="dialog-header"><div class="title"></div><a href="#" class="close">X</a></div>';
        dialog+='<div class="dialog-content"></div>';
        dialog+='<div class="dialog-footer"><a href="#" class="confirm">确定</a><a href="#" class="cancel">取消</a></div></div>';
        this.$dialog=$(dialog);
        $(document.body).append(this.$dialog); //添加进body中
    },
    bindEvent : function(){  //绑定各事件
        var that=this,
         diaX,
         diaY,
         isMove=false;

        that.$dialog.on('mousedown',function(e){ //当鼠标按下后
            e.preventDefault();
            diaX=e.pageX-$(this).offset().left;      //鼠标相对文档左边缘位置与对话框相对文档左边缘位置的差值
            diaY=e.pageY-$(this).offset().top;      //鼠标相对文档上边缘位置与对话框相对文档上边缘位置的差值
            isMove=true;      //设置为正在移动中
        });
        $(document).on('mousemove',function(e){ //当鼠标按下并且移动时
            var moveX=e.pageX-diaX,      //鼠标移动后对话框相对文档左边缘位置
                  moveY=e.pageY-diaY;      //鼠标移动后对话框相对文档上边缘位置
            if(isMove){      //判断是否正在移动
                that.$dialog.offset({          //将对话框相对文档进行新的定位
                    left:moveX,
                    top:moveY
                })
            }
        });
        $(document).on('mouseup',function(e){      //鼠标抬起后
            isMove=false;      //停止移动
        });
        that.$dialog.find('.confirm').on('click',function(e){       //点击确定按钮后执行的函数
            e.preventDefault();
            that.$dialog.hide();
        });
        that.$dialog.find('.cancel').on('click',function(e){      //点击取消按钮后执行的函数
            e.preventDefault();
            that.$dialog.hide();
        });
        that.$dialog.find('.close').on('click',function(e){      //点击关闭(X)后后执行的函数
            e.preventDefault();
            that.$dialog.hide();
        });
    }
}

    $('#open1').on('click',function(){
        new Dialog().open();
    });
    $('#open2').on('click',function(){
        new Dialog().open({
            title:'hello-wold',
            content:'内容可进行修改',
            isShowConfirmBtn:false
        });

    });
    $('#open3').on('click',function(){
        new Dialog().open({
            title:'hello-wold',
            content:'<ul><li>列表1</li><li>列表2</li><li>列表1</li><li>列表1</li></ul>',
            onConfirm:function(){
                alert('确定')
            },
            onCancel:function(){
                alert('取消')
            }
        })
    })
    $('#open4').on('click',function(){
        new Dialog().open({
            title:'春风自来',
            content:'<a href="http://baidu.com">百度</a>',
            isShowCancelBtn:false,
            isShowConfirmBtn:false
        });
    });
    $('#open5').on('click',function(){
        new Dialog().open({
            title:'你好',
            content:'',
            isShowCancelBtn:false
        });
    });
