document.querySelector("#notice").innerHTML="<div>正常精子图片参考：</div><img src='https://cloudtom.github.io/spermanno/sperm.jpg' width="100%"><div>精子正常标准WHO第五版：精子头外形光滑、规则，大体上呈椭圆形，长度区间3.7-4.7微米，宽度区间2.5-3.2微米，长宽比区间1.3-1.8。</div><div>异常标准：超过两个空泡或未染色空泡区域占头部的20%以上，顶体后区有空泡</div><div>出现多个精子：单独放一类</div><div>未出现精子或出现部分精子（不超过50%）：算背景；超过50%算其他</div><div>首先判断长宽比，长宽比在区间内则观察椭圆拟合线，如精子边缘与椭圆拟合线基本吻合且长度和宽度均在区间内则为正常。如长宽比过小则为圆头，长度及宽度均超过区间则为大头。如长宽比在区间内，宽度长度小于区间则为小头。</div>"
//美国西部时间20190725 21点更新
//更新程序版本号
document.querySelector("h1").innerText="图片分类-v5.3"
//更新自动添加分类功能
  function autoadd(aname){
  var elem=parseDom('<div onclick="classify(this,'+classlabel+')" class="cbutton">'+aname+'</div>');
  document.querySelector("#container").append(elem[0])
  classnum[classlabel]=0
  classlabel++}
//分类类别
category=["正常","圆头","大头","小头","其他畸形","多个","背景","不确定","临界状态"]
//添加分类
for (i in category)
{
autoadd(category[i])
}
//美国西部时间20190729 19点更新
var maxl=4.7;
var minl=3.7;
var maxw=3.2;
var minw=2.5;
var maxs=1.8;
var mins=1.3;
var posi=15;
draw_point=function () {
    //获取画笔
    let ctx=context;

    context.drawImage(canvas,0,0,canvas.width*3 , canvas.height*3)
    //设置绘制颜色
    
    ctx.fillStyle="#00FFFF";
    ctx.fillRect(loca.lengthstartx-2,loca.lengthstarty-2,4,4);    

    ctx.fillStyle="#7CFC00";
    ctx.fillRect(loca.lengthendx-2,loca.lengthendy-2,4,4);   
    
    ctx.fillStyle="#FF4500";
    ctx.fillRect(loca.widthstartx-2,loca.widthstarty-2,4,4);
 
    ctx.fillStyle="#FFFF00";
    ctx.fillRect(loca.widthendx-2,loca.widthendy-2,4,4);
    

    
    
    //设置字体样式
    ctx.font = "16px bold 宋体";
    //设置文字位置
    if(loca.lengthendy!=0&&loca.lengthstarty!=0){
    if((loca.lengthendy<55&&loca.lengthendx<110)||(loca.lengthstarty<55&&loca.lengthstartyx<110)){
      posi=canvas.height*3-55;
    }else{
      posi=15;
    }
    }
    if(loca.widthendy!=0&&loca.widthstarty!=0){
      if((loca.widthendy<55&&loca.widthendx<110)||(loca.widthstarty<55&&loca.widthstartx<110)){
      posi=canvas.height*3-60;
      }
    }
    //绘制文字

    if(loca.lengthendx!=0&&loca.lengthstartx!=0){
    slen = ((Math.sqrt((loca.lengthendx-loca.lengthstartx)*(loca.lengthendx-loca.lengthstartx)+(loca.lengthendy-loca.lengthstarty)*(loca.lengthendy-loca.lengthstarty)))/12.2).toFixed(2);
    if(slen>maxl)
    ctx.fillStyle="#FF2D2D";
    else if(slen<minl)
    ctx.fillStyle="#2894FF";
    else
    ctx.fillStyle="#7CFC00";
    ctx.fillText("长度:"+slen+"微米",5,posi);
    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.strokeStyle="pink"
    ctx.moveTo(loca.lengthstartx,loca.lengthstarty);
    ctx.lineTo(loca.lengthendx,loca.lengthendy);
    ctx.stroke();
    s++
    }
    if(loca.widthendx!=0&&loca.widthstartx!=0){
    wlen = ((Math.sqrt((loca.widthendx-loca.widthstartx)*(loca.widthendx-loca.widthstartx)+(loca.widthendy-loca.widthstarty)*(loca.widthendy-loca.widthstarty)))/12.2).toFixed(2);
    if(wlen>maxw)
    ctx.fillStyle="#FF2D2D";
    else if(wlen<minw)
    ctx.fillStyle="#2894FF";
    else
    ctx.fillStyle="#7CFC00";
    ctx.fillText("宽度:"+wlen+"微米",5,posi+20);
    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.strokeStyle="pink"
    ctx.moveTo(loca.widthstartx,loca.widthstarty);
    ctx.lineTo(loca.widthendx,loca.widthendy);
    ctx.stroke();
    s++
    }
    if(slen!=0&&wlen!=0){   
    if((slen/wlen)>maxs)
    ctx.fillStyle="#FF2D2D";
    else if((slen/wlen)<mins)
    ctx.fillStyle="#2894FF";
    else
    ctx.fillStyle="#7CFC00";     
    ctx.fillText("长宽比:"+(slen/wlen).toFixed(3),5,posi+40);
    drawellipse(slen,wlen)
    }
}
