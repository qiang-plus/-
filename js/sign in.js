// 表单验证
// 获取操作元素
var sign_2_1 = document.querySelector('.sign_2_1');
var name1 = document.querySelector('.username');
var pwd = document.querySelector('.pwd');
var tishi = document.querySelector('.tishi');
var tishi1 = document.querySelector('.tishi1');
var inp1 = document.querySelector(".inp");

var user=false
        //验证账号
       name1.onblur=function(){
            //获取输入框内容
            var val=this.value
            var reg=/^[0-9A-Za-z]\w{5,11}$/
            if(reg.test(val)){
                sign_2_1.className="biankuang";
                user=true
                tishi.style.display="none";
            }else{
                tishi.style.display="block";
                this.focus()
                user=false
            }
        }
        var pwd1=false
        //密码验证
        pwd.onblur=function(){
            var val=this.value
            var reg=/^\w{6,16}$/
            if(reg.test(val)){
                var a=0 //数字
                var b=0 //小写字母
                var c=0 //大写字母
                var d=0 //下划线
                //遍历当前字符串
                for(var i=0;i<val.length;i++){
                    //判断当前字符是否为数字
                    if("0"<=val[i] && val[i]<="9"){
                        a=1
                    }else if('a'<=val[i] && val[i]<='z'){
                        b=1
                    }else if('A'<=val[i] && val[i]<="Z"){
                        c=1
                    }else{
                        d=1
                    }
                }
                sign_2_1.className="biankuang";
                pwd1=true
                tishi1.style.display="none";
            }else{
                tishi1.style.display="block";
                this.focus()
                pwd1=false
            }
        }
        // 给登录绑定点击事件
        inp1.onclick=function(e){
            e.preventDefault()
            $.ajax({
                url: 'http://47.115.76.70:5000/api/users/login',
                type: 'post',
                data: { username:name1.value,password:pwd.value, },
                success: function (data) {
                    if(data.code===400){
                        alert(data.message)
                        return false
                    }
                    alert(data.message);
                    let userinfo={ username:name1.value,token:data.token}
                    localStorage.setItem("userinfo",JSON.stringify(userinfo))
                    window.location.href="../details/details.html"
                },
                error: function (error) {
                    alert(error)
                }
            })
        }


        // 