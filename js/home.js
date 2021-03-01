// 放大镜
/* 获取操作对象 */
var box= document.querySelector('.box_top');
var boximg= box.querySelector('img');
var mark =document.querySelector('.mark');
var divImgs=document.querySelector('.divImgs');
var imgs = divImgs.querySelectorAll('img');
var imgright = document.querySelector('.imgRight');
var rightImg = imgright.querySelector('img');

//给左边盒子绑定三个事件
    box.onmouseover=function(e){
        mark.style.display="block";
           imgright.style.display="block";
    }
    // 移动
    box.onmousemove=function(e){
        e=e||window.event;
        move(e)
    }
    // 移出
    box.onmouseout=function(){
        mark.style.display="none";
        imgright.style.display="none";
    }

    // 移动函数
    function move(e){
        // 获取当前移动距离
        var x1 = e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2);
        var y1 = e.pageY-box.offsetTop-parseInt(mark.offsetHeight/2);
        //获取移动距离
        var maxX = box.offsetWidth-mark.offsetWidth;
        var maxY = box.offsetHeight-mark.offsetHeight;
        //右边图片的移动
        var rightX,rightY
        //水平判断
        if (x1<=0){
            mark.style.left="0px";
            rightX=0;
        }else if(x1>=maxX){
            mark.style.left=maxX+"px";
            rightX=maxX
        }else{
            mark.style.left=x1+"px";
            rightX=x1;
        }
        //垂直方式
        if(y1<=0){
            mark.style.top="0px";
            rightY=0;
        }else if(y1>=maxY){
            mark.style.top=maxY+"px";
            rightY=maxY;
        }else{
            mark.style.top=y1+"px";
            rightY=y1
        }
        // 让右边图片移动
        rightImg.style.top= -2*rightY+'px'
        rightImg.style.left= -2*rightX+'px'
    }
    //给下面5个小图绑定点击事件
    for(var i=0;i<imgs.length;i++){
        imgs[i].onmouseover=function(){
            //去掉所有的图片边框
            for(var j=0;j<imgs.length;j++){
                imgs[j].className='';
            }
            //给当前选中的对象添加边框
            this.className="imgborder"
            //获取当前划入图片的地址
            var url1=this.getAttribute("src")
            //分别修改两边的图片
            boximg.setAttribute('src',url1)
            rightImg.setAttribute('src',url1)
        }
    }
    /* 赠品大图 */
    var img1=document.querySelector("#imgbox")
    var imgbox=document.querySelector('.imgbox');

    img1.onmouseover=function(){
        imgbox.style.display="block"
    }
    img1.onmouseout=function(){
        imgbox.style.display="none"
    }
    /* table选项卡 */
    // 获取操作对象
    var details = document.querySelector(".details");
    var ul1 = details.querySelector(".ul1");
    var aArr = ul1.querySelectorAll("a");
    var xqbox = document.querySelector(".xqbox");
    var boxArr = xqbox.querySelectorAll('.index');
    // var xiangqing = document.querySelector(".xiangqing");
    // var pinjia = document.querySelector(".pinjia");
    // var guige = document.querySelector(".guige");
    // var xuzhi = document.querySelector(".xuzhi");

    // 给a标签绑定循环点击事件
    for(var i=0;i<aArr.length;i++){
        // aArr[i].index=i;
        aArr[i].setAttribute('index',i);
        console.log(aArr[i]);
        aArr[i].onclick=function(){
            for(var j=0;j<aArr.length;j++){
                aArr[j].className=''
                boxArr[j].style.display="none";
            }
            this.className="bgcolor"
            boxArr[this.getAttribute('index')].style.display="block";

        }
    }


    $(".jia").click(function(){
        var n =$(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
    });
    $(".jian").click(function(){
        var n =$(this).siblings(".itxt").val();
        if(n == 1){
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
    });

    $(".shop").click(()=>{
        var src = $(".imgRight img")[0].src;
        console.log(src);
        var goodstitle =$(".goodstitle").text();
        var price =$(".price").text();
        var num =$(".itxt").val();
        var desc =$(".desc").text();

        let goods={
            src,goodstitle,price,num,desc
        }
        var goodsList = localStorage.getItem("goodsList")
        console.log(goodsList);
        if(!goodsList){
            localStorage.setItem('goodsList', JSON.stringify([goods]))
        }else{
            goodsList = [...JSON.parse(goodsList),goods]
            console.log(goodsList);
            localStorage.setItem('goodsList', JSON.stringify(goodsList))
        }
       


    })

