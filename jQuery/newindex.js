window.onload=function(){

	//封装一个获取元素的方法

	function byId(id){
		return typeof(id) === "string"?document.getElementById(id):id;
	}


	var index=0,
		timer=null,
		main=byId("main"),
		pics=byId("pics").getElementsByTagName("div"),
		dots=byId("dots").getElementsByTagName("span"),
		prev=byId("prev"),
		next=byId("next"),
		len=pics.length;


	function slideImg(){

		//当鼠标在图片上时，停止轮播；
		main.onmouseover=function(){
			if(timer) clearInterval(timer);
		}


		//当鼠标滑过图片时，开始轮播；
		main.onmouseout=function(){
			timer=setInterval(function(){
				index++;
				if(index>=len) index=0;
				//切换图片
				changeImg();
			},2000);
		}
		main.onmouseout();


		//点击按钮切换图片
		next.onclick=function(){
			index++;
			if(index>=len) index=0;
			changeImg();
		}
		prev.onclick=function(){
			index--;
			if(index<0) index=len-1;
			changeImg();
		}


		//点击圆点切换图片
		for(var d=0;d<len;d++){
			//给所有span添加id属性，作为span的索引
			dots[d].setAttribute("id",d);
			dots[d].onclick=function(){
				index=this.id;
				changeImg();
			}
		}



		//切换图片
		function changeImg(){
			//将所有的div遍历，隐藏
			for (var i=0;i<len; i++) {
				pics[i].style.display="none";
				dots[i].className="";
			}
			pics[index].style.display="block";
			dots[index].className="active";
		}
	}
	slideImg();

}