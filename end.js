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
setTimeout(showimage(),2000)
var noticeimg = document.getElementById("noticeimage")
        var ncontext = noticeimg.getContext("2d")
        var image = new Image()

        window.onload = function(){
            image.src = "https://cloudtom.github.io/spermanno/sperm.jpg"
            

            
            image.onload = function(){
                noticeimg.width = 750
                noticeimg.height = image.height
                ncontext.drawImage( image , 0 , 0 )

            }


        }

