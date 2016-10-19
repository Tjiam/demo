function Carousel(Obj){
        this.$carousel=Obj,
        this.$ct=this.$carousel.find(".img-ct"),
        this.$imgs=this.$ct.children(),
        this.$pre=this.$carousel.find('.pre'),
        this.$next=this.$carousel.find('.next'),
        this.imgWidth=this.$imgs.width(),
        this.imgCount=this.$imgs.size(),
        this.imgRealCount=this.$imgs.size()+2,
        this.$bullet=this.$carousel.find('.bullet');
        this.clone();
        this.bind();
}

Carousel.prototype ={
            curIdx : 0,
            isPlaying : false,

        clone : function(){
            this.$ct.prepend(this.$imgs.last().clone());//将最后一张图复制放在第一图前方
            this.$ct.append(this.$imgs.first().clone());//将第一张图放在最后一张图后方
            this.$ct.css({left: 0-this.imgWidth, width: this.imgRealCount*this.imgWidth})//设置好定位于宽度
        },
        bind : function(){
            var that=this;
            this.$next.on('click',function(){ //点击显示下一张
                that.playNext();
            });
            this.$pre.on('click',function(){//点击显示上一张
                that.playPre();
            });
            this.$bullet.find('li').on('click',function(){//点击排列点显示对应图片
                console.log(2);
                var idx=$(this).index();
                if(idx>that.curIdx){
                    that.playNext(idx-that.curIdx);
                }
                if(idx<that.curIdx){
                    that.playPre(this.curIdx-idx);
                }
            })
        },

        playNext : function(idx){//显示下一张图片函数
            var     that=this,
                    idx=idx || 1;
            if(this.isPlaying){ //判断是否在播放中
                return;
            }
            isPlaying = true;
            that.$ct.animate({left:'-='+that.imgWidth*idx},function(){//动画,偏移对应的宽度
                that.curIdx=(that.curIdx+idx)%that.imgCount;//余数始终对应初始的索引,解释:如四张图片,第三张图的索引为2,点击4次后,当前索引则为6,依然显示第三张图片.除以4的余数后余数为2.
                console.log(that.curIdx);
                if(that.curIdx===0){//刚好完成一个循环时,再跳到一张图片.
                that.$ct.css({left: 0-that.imgWidth});
                that.curIdx=0;
            }
            isPlaying = false;
            that.setBullet();
        })
    },
    playPre : function(idx){
            var that=this,
            idx=idx || 1;
            if(this.isPlaying){
                return;
            }
            isPlaying = true;
            that.$ct.animate({left:'+='+that.imgWidth*idx},function(){
                that.curIdx=(that.imgCount+that.curIdx-idx)%that.imgCount;
                console.log(that.curIdx);
                if(that.curIdx===(that.imgCount-1)){
                that.$ct.css({left: 0-that.imgWidth*that.imgCount});
            }
            isPlaying = false;
            that.setBullet();
        })

    },
    setBullet : function(){
        var that=this;
        this.$bullet.children().removeClass('active')
        this.$bullet.children().eq(that.curIdx).addClass('active')
        console.log(that.curIdx)
    }
}

$('.carousel').each(function(){
		new Carousel($(this));
});
