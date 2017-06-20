window.onload=function(){
		/*屏幕改变事件— 修改html font-size大小*/
	window.onresize = function(){
		var width=$(document.body).outerWidth(true);
        var offWidth =width /375*100;
         $("html").css("font-size",offWidth);
   }
	zishiying();
	banner();
	news();
	
}
//宽度自适应
function zishiying(){
	//通过window.screen.width获取屏幕的宽度
		var width=$(document.body).outerWidth(true);
        var offWidth =width /375*100; 
        $("html").css("font-size",offWidth);//把rem的值复制给顶级标签html的font-size
}
function banner(){
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplayDisableOnInteraction : false,
    autoplay: 3000,//可选选项，自动滑动
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
  }) 
}
function news(){
	var url="json/new.json";
	$.ajax({
        type: "get",
        dataType: "json",
        url: url,
        data:null,
        success: function (data){
        	console.log(data);
        	creat(data);
        }
    });
}
function creat(data){
	$.each(data.result.data, function(id, obj) {
		var $dom=$("<li>"+
						"<a href="+obj.url+">"+
							"<img src="+obj.thumbnail_pic_s+"/>"+
							"<p>"+obj.title+"</p>"+
						"</a>"+
					"</li>");
		
		$(".new-data").append($dom);
	});
	
}
