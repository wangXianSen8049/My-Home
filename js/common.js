window.onload=function(){
		/*屏幕改变事件— 修改html font-size大小*/
	window.onresize = function(){
		var width=$(document.body).outerWidth(true);
        var offWidth =width /375*100;
         $("html").css("font-size",offWidth);
   }
	
}
//宽度自适应
function zishiying(){
	//通过window.screen.width获取屏幕的宽度
		var width=$(document.body).outerWidth(true);
        var offWidth =width /375*100; 
        $("html").css("font-size",offWidth);//把rem的值复制给顶级标签html的font-size
}