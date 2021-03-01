/* 获取操作对象 */
var form = document.getElementById("form");
var username1 = document.getElementById("username");
var email = document.getElementById("email")
var small1 = document.querySelectorAll(".small1");
var pwd = document.getElementById("password");
var pwd2 = document.getElementById("password2");
var but = document.querySelector('.button')


var user=false
//验证账号
username1.onblur=function(){
    //获取输入框内容
    var val=username1.value
    var reg=/^[0-9A-Za-z]\w{5,11}$/
    if(reg.test(val)){
        username1.className="biankuan";
        user=true
        small1[0].className="small1";
        small1[0].style.display="none";
    }else{
        small1[0].style.display="block";
        this.focus()
        user=false
    }
}
//邮箱验证
var email1=false
email.onblur=function(){
    var val=this.value
    var reg=/^[1-9]\d{5,9}@qq\.com$/
    if(reg.test(val)){
        this.className="biankuan";
        email1=true
        small1[1].style.display="none";
    }else{
        small1[1].style.display="block";
        email1=false
        this.focus()
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
        this.className="biankuan";
        user=true
        small1[2].className="small1";
        small1[2].style.display="none";
    }else{
        small1[2].style.display="block";
        this.focus()
        pwd1=false
    }
}
var pwd3=pwd.value;
//确定密码
pwd2.onblur=function() {
    if (pwd.value !== pwd2.value) {
        small1[3].style.display="block";
        this.focus()
    }else{
        this.className="biankuan";
        user=true
        small1[3].className="small1";
        small1[3].style.display="none";
    }
  }

 //注册事件
 but.onclick=function(e){
    e.preventDefault()
    
    if(username1.value==""||pwd.value==""||pwd2.value==""||email.value==""){
           alert("表单输入不完整")
        return false
    }
    if(pwd.value!==pwd2.value){
        alert("密码不对")
        return false
    }
        $.ajax({
            url: 'http://47.115.76.70:5000/api/users/register',
            type: 'post',
            data: { username:username1.value,password:pwd.value,email:email.value },
            success: function (data) {
                if(data.code===400){
                    alert(data.message)
                    return false
                }
                window.location.href='../sign in/sign in.html'
                console.log(data);
            },
            error: function (error) {
                alert(error)
            }
        })
}
















       