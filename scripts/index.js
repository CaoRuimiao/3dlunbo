window.onload=function(){
	var sence=document.getElementById('sence');
	var title=document.getElementById('title');

	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
//  3D轮播-----------------------------------------------------------------
	title.style.background='rgb('+r+','+g+','+b+')';
	title.innerHTML='3D轮播';
	var rongQi=document.createElement('div');
	rongQi.setAttribute('id','rongQi');
	sence.appendChild(rongQi);
	for(i=0;i<5;i++){
		var mian=document.createElement('div');
		mian.setAttribute('class','mian');
		rongQi.appendChild(mian);
	}
	mian=document.getElementsByClassName('mian');
	// var colors=['red','green','blue','yellow','pink'];
	var images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	var shuJu=['translateX(0px)','translate3d(120px,0,-100px)','translate3d(240px,0,-200px)','translate3d(-240px,0,-200px)','translate3d(-120px,0,-100px)'];
	var z_Index=['3','2','1','1','2'];
	var lunBo=function(){
		for(i=0;i<mian.length;i++){
			// mian[i].innerHTML=i;
			mian[i].style.webkitTransition='all .6s ease';
			// mian[i].style.background=colors[i];
			mian[i].style.background='url(./images/'+images[i]+')';
			mian[i].style.backgroundSize='cover';
			mian[i].style.webkitTransform=shuJu[i];
			mian[i].style.zIndex=z_Index[i];	
		}
		shuJu.unshift(shuJu.pop());
		z_Index.unshift(z_Index.pop());
	};
	//  点击暂停，2s后继续轮播
	for(var j=0;j<mian.length;j++){
		mian[j].onclick=function(){
			clearInterval(timerId);
			timerId2=setTimeout(function(){
				timerId=setInterval(lunBo,1000);
			},2000);
		};
	}
	

	var fixTips=document.getElementById('fixTips');
	var kaiguan=true,timerId,timerId2;
	fixTips.onclick=function(){
		if(kaiguan){
			timerId=setInterval(lunBo,1000);
			kaiguan=false;
		}else{
			clearInterval(timerId);
			kaiguan=true;
		}	
	};

};