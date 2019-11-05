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
//北京时间20191105 18点更新类别
category=["正常","其他畸形","多个","背景"]
//添加分类
for (i in category)
{
autoadd(category[i])
}
setTimeout(showimage(),2000)
var noticeimg = document.getElementById("noticeimage")
        var ncontext = noticeimg.getContext("2d")
        var image = new Image()

        window.onload = function(){
            image.src = "https://cloudtom.github.io/spermanno/sperm.jpg"
            

            
            image.onload = function(){
                noticeimg.width = 750
                noticeimg.height = image.height
                ncontext.drawImage( image , 0 , 15 )
              let ctx=ncontext;
              ctx.font = "16px bold 宋体";
              ctx.fillStyle="#2894FF";
              ctx.fillText("正常精子图片示例：",5,30);

            }


        }

