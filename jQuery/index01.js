window.onload=function(){

	//封装一个获取元素的方法

	function byId(id){
		return typeof(id) === "string"?document.getElementById(id):id;
	}

	var index=0,
		timer=null,
		pics=byId("pics").getElementsByTagName("div"),
		dots=byId("dots").getElementsByTagName("span"),
		prev=byId("prev"),
		next=byId("next"),
		len=pics.length;


	function slideImg(){
		var main=byId("main");

		//鼠标在图片上时，清除定时器，轮播停止
		main.onmouseover=function(){
			if(timer) clearInterval(timer);
		}

		//鼠标离开图片时，轮播继续
		main.onmouseout=function(){
			timer=setInterval(function(){
				index++;
				if(index>=len) index=0;
				//切换图片
				changeImg();
			},2000);
		}
		main.onmouseout();


		//点击圆点切换图片
		for(var d=0;d<len;d++){
			//给所有span添加id属性，作为span的索引
			dots[d].setAttribute("id",d);
			dots[d].onclick=function(){
				index=this.id;
				changeImg();
			}
		}


		//点击按钮切换图片
		prev.onclick=function(){
			index++;
			if(index>=len) index=0;
			changeImg();
		}
		next.onclick=function(){
			index--;
			if(index<0) index=len-1;
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


	var menu_list=byId("menu_list").getElementsByTagName("li"),
		sub_lists=byId("sub_list")
		sub_list=byId("sub_list").getElementsByTagName("div"),
		sub_list_li=byId("sub_list").getElementsByTagName("ul"),
		lens=menu_list.length;

		

		
		for(var s=0;s<lens;s++){
			menu_list[s].setAttribute("data_index",s);
			menu_list[s].onmouseover=function(){
				idx=this.getAttribute("data_index");
				for(var y=0;y<lens;y++){
					sub_list[y].style.display="none";
					// menu_list[y].style.backgroundColor="#f01414";
					// menu_list[y].style.color="#fff";
				}
				
				sub_list[idx].style.display="block";
				// menu_list[idx].style.backgroundColor="#fff";
				// menu_list[idx].style.color="#f01414";
				
			}
			menu_list[s].onmouseout=function(){
				sub_list[idx].style.display="none";
			}
			
			sub_list[s].onmouseover=function(){
				this.style.display="block";
			}
				
			
			sub_list[s].onmouseout=function(){
				this.style.display="none";
			}
		}




	slideImg();


	

}


