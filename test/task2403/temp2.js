window.onload = function () {
    var   username = document.querySelector("#username");
            pwd1 = document.querySelector("#password1");
            pwd2 = document.querySelector("#password2");
            btn = document.querySelector("#btn");

            msguser = document.querySelector(".msg-user");
            msgpwd1 = document.querySelector(".msg-pwd1");
            msgpwd2 = document.querySelector(".msg-pwd2");



            username.addEventListener('change',function(){
                if(!(/(^[a-zA-Z0-9_]{3,10}$)/g.test(username.value))){
                    msguser.innerHTML ="用户名格式错误"
                }else{
                    ajax({
                        url:'task-24-3.php',
                        type:'post',
                        data:{
                            username:username.value
                        },
                        success:function(ret){
                                userhandle(ret);
                        },
                        error:function(){
                            console.log('出错了')
                        }
                    })
                }
            })

            function userhandle(str){
                if(str == 1){
                    msguser.innerHTML =" 用户名已存在"
                } else {
                    msguser.innerHTML="用户名可用";
                }
            }

            //密码验证
            pwd1.addEventListener('change',function(){

                if(/(^[a-zA-Z0-9]{6,15}$)/g.test(pwd1.value)){
                    msgpwd1.innerHTML='可以使用';
                    return;
                }
                    if(/(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(pwd1.value)){
                        msgpwd1.innerHTML='密码格式不正确';
                        return;
                    }
                    msgpwd1.innerHTML='密码可以使用';
                    return;
            })

            pwd2.addEventListener('change',function(){
                if(pwd2.value===pwd1.value){
                    msgpwd2.innerHTML='OK';
                    return;
                }
                    msgpwd2.innerHTML='两次密码输入不一致';
            })

            btn.addEventListener('click',function(){
                if(msguser.innerHTML=='用户名可用' && msgpwd2.innerHTML=='OK'){
                    alert('注册成功');
                } else {
                     alert('出现错误')
                }
            })
};
