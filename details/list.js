//获取操作对象
var row=document.querySelector('.row');
var pagination1=document.querySelector('.pagination');
(async function(){
    var dt=await promiseAjax({
        url:'./list.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:15,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/15)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*15,m*15)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
            ar1.forEach(item=>{
                str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
                     <ol class="breadcrumb">
                         <li><a href="#">${item.cat_one_id}</a></li>
                         <li><a href="#">${item.cat_two_id}</a></li>
                         <li class="active">${item.cat_three_id}</li>
                     </ol>
                     <img src="${item.goods_small_logo}" >
                     <div class="caption">
                     <h5 class="h5">${item.goods_name}</h5>
                     <p>￥${item.goods_price}</p>
                     <p><a href="#" class="btn btn-primary" role="button">进入购物车</a> <a href="./xiangqing.html?id=${item.goods_id}" class="btn btn-default" role="button">查看商品详情</a></p>
                     </div>
               </div>
             </div>    
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
        }
    })
})()