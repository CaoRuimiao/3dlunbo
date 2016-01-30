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
	var colors=['red','green','blue','yellow','pink'];
	var shuJu=['translateX(0px)','translate3d(90px,0,-100px)','translate3d(180px,0,-200px)','translate3d(-180px,0,-200px)','translate3d(-90px,0,-100px)'];
	var z_Index=['3','2','1','1','2'];
	var lunBo=function(){
		for(i=0;i<mian.length;i++){
			mian[i].innerHTML=i;
			mian[i].index=i;
			mian[i].style.webkitTransition='all .6s ease';
			mian[i].style.background=colors[i];
			mian[i].style.webkitTransform=shuJu[i];
			mian[i].style.zIndex=z_Index[i];	
		}
		shuJu.unshift(shuJu.pop());
		z_Index.unshift(z_Index.pop());
	};
	

	var fixTips=document.getElementById('fixTips');
	var kaiguan=true,timerId;
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