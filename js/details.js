var userinfo1 =localStorage.getItem("userinfo");
var login =document.querySelector(".login");
var register =document.querySelector(".register");
var userinfo = document.querySelector(".userinfo");
if(userinfo1){
    login.style.display="none";
    register.style.display="none";
    userinfo.innerText=`用户名：${JSON.parse(userinfo1).username}`
}else{
    login.style.display="block";
    register.style.display="block";
    userinfo.innerText=''
}
console.log(userinfo1)










//获取操作对象
var row=document.querySelector('.row');
var pagination1=document.querySelector('.pagination');
(async function(){
    var dt=await promiseAjax({
        url:'../php/list.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:40,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/40)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*40,m*40)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <div class="list_1">
                <a href="../home page/home.html">
                <img src="${item.lianjie}"
                alt="卡西欧手表 G-SHOCK 【新品】G-SQUAD运动训练系列 蓝牙连接计步训练多功能  防水防震运动表款GBD-100SM"></a>
                <p class="main_h2_r_p"><a href="#">${item.name}</a></p>
                <p> <span style="color: red; font-weight: 600;">${item.jiage}</span></p>
                <ul>
                    <li><a href="#"><img src="https://statics6.casiostore.com.cn/publics/images/old/goods-list/addcart.png" alt=""> 加入购物车</a></li>
                    <li>|</li>
                    <li><a href="#"><img src="https://statics6.casiostore.com.cn/publics/images/old/goods-list/compare.png" alt="">对比</a> </li>
                    <li>|</li>
                    <li><a href="#"><img src="https://statics6.casiostore.com.cn/publics/images/old/goods-list/collect.png" alt=""> 收藏</a></li>
                </ul>

            </div>
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
        }
    })
})()

// 分页器


// 下拉菜单
//获取操作对象
var head1 = document.querySelector(".head_1")
var li1 = head1.querySelector(".wrist_watch")
var menu1 =document.querySelector('.menu') 
var li2 = head1.querySelector('.clocks')
var menu2 =document.querySelector('.menu1') 
var li3 = head1.querySelector('.music')
var menu3 =document.querySelector('.menu2') 
var li4 = head1.querySelector('.dictionary')
var menu4 =document.querySelector('.menu3') 
var li5 = head1.querySelector('.calculator')
var menu5 =document.querySelector('.menu4') 
var li6 = head1.querySelector('.limit')
var menu6 =document.querySelector('.menu5') 
var li7 = head1.querySelector('.parts')
var menu7 =document.querySelector('.menu6') 
var li10 = head1.querySelector('.member')
var menu10 =document.querySelector('.menu7') 
//给每个li绑定鼠标滑入事件
// li1
li1.onmouseover=function(){
    menu1.style.display="block";
}
menu1.onmouseout=function(){
    menu1.style.display="none";
}
menu1.onmouseover=function(){
    menu1.style.display="block";
}
li1.onmouseout=function(){
    menu1.style.display="none";
}
// li2
li2.onmouseover=function(){
    menu2.style.display="block";
}
menu2.onmouseout=function(){
    menu2.style.display="none";
}
menu2.onmouseover=function(){
    menu2.style.display="block";
}
li2.onmouseout=function(){
    menu2.style.display="none";
}
// li3
li3.onmouseover=function(){
    menu3.style.display="block";
}
menu3.onmouseout=function(){
    menu3.style.display="none";
}
menu3.onmouseover=function(){
    menu3.style.display="block";
}
li3.onmouseout=function(){
    menu3.style.display="none";
}
// li4
li4.onmouseover=function(){
    menu4.style.display="block";
}
menu4.onmouseout=function(){
    menu4.style.display="none";
}
menu4.onmouseover=function(){
    menu4.style.display="block";
}
li4.onmouseout=function(){
    menu4.style.display="none";
}
// li5
li5.onmouseover=function(){
    menu5.style.display="block";
}
menu5.onmouseout=function(){
    menu5.style.display="none";
}
menu5.onmouseover=function(){
    menu5.style.display="block";
}
li5.onmouseout=function(){
    menu5.style.display="none";
}
// li6
li6.onmouseover=function(){
    menu6.style.display="block";
}
menu6.onmouseout=function(){
    menu6.style.display="none";
}
menu6.onmouseover=function(){
    menu6.style.display="block";
}
li6.onmouseout=function(){
    menu6.style.display="none";
}
// li7

li7.onmouseover=function(){
    menu7.style.display="block";
}
menu7.onmouseout=function(){
    menu7.style.display="none";
}
menu7.onmouseover=function(){
    menu7.style.display="block";
}
li7.onmouseout=function(){
    menu7.style.display="none";
}
// li10
li10.onmouseover=function(){
    menu10.style.display="block ";
}
menu10.onmouseout=function(){
    menu10.style.display="none";
}
menu10.onmouseover=function(){
    menu10.style.display="block ";
}
li10.onmouseout=function(){
    menu10.style.display="none ";
}

// 分类菜单
/* 点击菜单下拉 */
var gengduo1 = document.querySelectorAll(".gengduo");
var tr2 = document.querySelectorAll(".tr2");
var tr3 = document.querySelectorAll(".tr3");
var tr4 = document.querySelectorAll(".tr4");

    // 绑定点击事件
        gengduo1[0].onclick=function(){
            if(tr2[0].style.display=="none"){
            tr2[0].style.display="flex";  
            }else{ 
                tr2[0].style.display="none";
            }
        }
        gengduo1[1].onclick=function(){
            if(tr3[0].style.display=="none"){
            tr3[0].style.display="flex";  
            }else{ 
                tr3[0].style.display="none";
            }
        }
        gengduo1[2].onclick=function(){
            if(tr4[0].style.display=="none"){
            tr4[0].style.display="flex";  
            }else{ 
                tr4[0].style.display="none";
            }
        }
// 轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true , // 循环模式选项
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // // 如果需要滚动条
    scrollbar: {el: 'null',},
  })        
 





