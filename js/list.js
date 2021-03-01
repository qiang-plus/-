  renderGoods()





    //1.全选
    $(".checkall").change(function(){
      $(".j-checkbox").prop("checked",$(this).prop("checked"));
    });
    $(".j-checkbox").change(function(){
      if($(".j-checkbox:checked").length===$(".j-checkbox").length){
        $(".checkall").prop("checked",true);
      }else{
        $(".checkall").prop("checked",false);
      }
    })
    //2.加号+
$(".increment").click(function(){
  var n =$(this).siblings(".itxt").val();
  n++;
  $(this).siblings(".itxt").val(n);
  // 金额获取
  var p =$(this).parent().siblings(".price").html();
  p=p.substr(1);
  // 金额
  $(this).parent().siblings(".money1").html("￥" +(p*n).toFixed(2) );
  getSum();
});

// 3减号-
$(".decrement").click(function(){
  var n =$(this).siblings(".itxt").val();
  if(n == 1){
      return false;
  }
  n--;
  $(this).siblings(".itxt").val(n);
   // 金额获取
   var p =$(this).parent().siblings(".price").html();
   p=p.substr(1);
   // 金额
   $(this).parent().siblings(".money1").html("￥" + (p*n).toFixed(2) );
   getSum();
});
  // 4，金额
$(".itxt").change(function(){
  var n = $(this).val();
  var p =$(this).parent().siblings(".price").html();
   p=p.substr(1);
   $(this).parent().siblings(".money1").html("￥" + (p*n).toFixed(2) );
   getSum();
});
// 5.勾选的总价
// var money = 0;
//   $(".j-checkbox:checked").each(function(i,ele){
//     console.log(1111)
//     money+= parseFloat($(ele).parent().siblings(".money1").substr(1).html());

//   })

// 6.总数和总计
// getSum();
function getSum(){
  var count = 0; //总件数
  var money = 0;//总价钱
  $(".itxt").each(function(i,ele){
    count += parseInt($(ele).val());
  });
  $(".jsuan em").text(count);
  $(".money1").each(function(i,ele){
    money+= parseFloat($(ele).text().substr(1));
  });
  $(".zongjia em").text(money.toFixed(2));
}

// 删除模块
// 1.删除
$('.goodslist').on('click', 'span', function(){
  var index=+$(this).attr('index');
  var goodsList= localStorage.getItem("goodsList") || []
  goodslist =JSON.parse(goodsList);
  goodslist.splice(index,1)
  console.log(goodslist);
  localStorage.setItem('goodsList', JSON.stringify(goodslist))
  renderGoods()
  console.log(goodslist,index,1);
})





// $(".shanchu").click(function(){
//   var index=+$(this).attr('index');
//   var goodsList= localStorage.getItem("goodsList") || []
//   goodslist =JSON.parse(goodsList);
//   goodslist.splice(index,1)
//   console.log(goodslist);
//   localStorage.setItem('goodsList', JSON.stringify(goodslist))
//   renderGoods()
//   console.log(goodslist,index,1);
// })
// 2.删除勾选
$(".quanshan").click(function(){
  $(".j-checkbox:checked").parents(".lie1").remove();
})

// 渲染函数
 function renderGoods(){
   var goods = localStorage.getItem('goodsList') ? JSON.parse(localStorage.getItem('goodsList')) : [];
   var str = ``
    for( var i=0;i<goods.length;i++){
      // console.log(goods[i]);
      str+=`<div class="lie1">
      <div class="xuan1"><input type="checkbox" class="j-checkbox"></div>
      <div class="img1"><img src="${goods[i].src}" alt=""style="width:100px;"></div>
      <div class="top_r">
          <div class="miaoshu">
              <a href="#">${goods[i].goodstitle}</a>
              <p style=""></p>
          </div>
          <div class="price" style="color: #898989;">¥${goods[i].price}</div>
          <div class="number">
              <input type="button" name="minus" value="-" class="decrement">
              <input type="text" name="amount" value="1" class="itxt">
              <input type="button" name="plus" value="+"class="increment">
          </div>
          <div class="money1">￥${goods[i].price}</div>
          <span class="shanchu" index="${i}">删除</span>
      </div>
  </div>`
    }
  $(".goodslist").html(str);
 }
$(".jsuan").click(function(){
  alert("支付成功")
  $(".j-checkbox:checked").parents(".lie1").remove();
})













 
