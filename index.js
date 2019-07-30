function setupdate(){
document.querySelector("#notice").innerHTML="<div>正常精子图片参考：</div><img src='https://cloudtom.github.io/spermanno/sperm.jpg' width='100%'><div>精子正常标准WHO第五版：精子头外形光滑、规则，大体上呈椭圆形，长度区间3.7-4.7微米，宽度区间2.5-3.2微米，长宽比区间1.3-1.8。</div><div>异常标准：超过两个空泡或未染色空泡区域占头部的20%以上，顶体后区有空泡</div><div>出现多个精子：单独放一类</div><div>未出现精子或出现部分精子（不超过50%）：算背景；超过50%算其他</div><div>首先判断长宽比，长宽比在区间内则观察椭圆拟合线，如精子边缘与椭圆拟合线基本吻合且长度和宽度均在区间内则为正常。如长宽比过小则为圆头，长度及宽度均超过区间则为大头。如长宽比在区间内，宽度长度小于区间则为小头。</div>"
//更新程序版本号
document.querySelector("h1").innerText="图片分类-v5.3"

//美国西部时间20190725 21点更新

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
}  
//美国西部时间20190729 21点更新
var maxl=4.7;
var minl=3.7;
var maxw=3.2;
var minw=2.5;
var maxs=1.8;
var minq=1.3;
var posi=15;
