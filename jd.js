function hidden() {
    var div = document.getElementsByClassName("qr")[0];
    var right = document.getElementsByClassName("right");
    var li_a = right[0].getElementsByTagName("a");
    var jd = li_a[li_a.length - 1];
    jd.onmouseover = function () {

        div.className = "qr show";

    }
    jd.onmouseout = function () {


        div.className = "qr hide";

    }
}
window.onload = hidden;
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
function leftSort() {
    var left = document.getElementsByClassName("leftSort")[0];
    var liArr = left.getElementsByTagName("li");
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].onmousemove = function () {
            for (var j = 0; j < liArr.length; j++) {
                liArr[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#d1d1d1";
        }
        liArr[i].onmouseout = function () {
            this.style.backgroundColor = "";
        }
    }
}
function closeBanner() {
    var banner = document.getElementsByClassName("banner")[0];
    var a2 = document.getElementById("a2");
    var close = null;
    a2.onclick = function () {
        close = setInterval(function () {
            banner.style.opacity -= 0.1;
            if (banner.style.opacity < 0) {
                banner.style.display = "none";
                clearInterval(close);
            }
        }, 60)
    }
}
// 轮播图
function changePic() {
    var slideShow = document.getElementsByClassName("slideShow")[0];
    var ulOne = slideShow.getElementsByTagName("ul")[0];
    var liArr = ulOne.getElementsByTagName("li");
    var spanner = document.getElementsByClassName("spanner")[0];
    var spanArr = spanner.getElementsByTagName("span");
    var cricle = document.getElementsByClassName("cricle")[0];
    var Arr = cricle.getElementsByTagName("li");
    var imgWidth = liArr[0].offsetWidth;
    //复制第一张图片到最后一张的后面
    var ulNewLi = ulOne.children[0].cloneNode(true);
    ulOne.appendChild(ulNewLi);

   //鼠标移到小圆点上时会变颜色，并且上面的图片也跟着变动
   for (var i = 0; i < Arr.length; i++) {
    Arr[i].index = i;
    Arr[i].onmouseover = function () {
        for (var j = 0; j < Arr.length; j++) {
            Arr[j].className = "";
        }
        this.className = "current";
        key = square = this.index;
        animate(ulOne, -this.index * imgWidth);
    }
}
   
    //自动播放
    
    var slide = setInterval(autoplay, 2000);
    var key = 0;
    var square = 0;
    function autoplay() {
        key++;
        if (key > Arr.length) {
            ulOne.style.left = 0;
            key = 1;
        }
        animate(ulOne, -key * imgWidth);
        square++;
        if (square > Arr.length - 1 ){
            square = 0;
        }
        for (var i = 0; i < Arr.length; i++) {
            Arr[i].className = "";
        }
        Arr[square].className = "current";

    }

     //当鼠标放在盒子上时停止定时器，移开开始，并且鼠标悬停时显示两边的span标签
     slideShow.onmouseover = function () {
        spanner.style.display = "block";
        clearInterval(slide);
    }
    slideShow.onmouseout = function () {
        spanner.style.display = "none";
        slide =setInterval(autoplay,2000);
   
    }



    

    //左边小箭头
    spanArr[0].onclick = function () {
        key--;
        if (key < 0) {
            ulOne.style.left = -imgWidth * (Arr.length) + "px";
            key = Arr.length - 1;
        }
        animate(ulOne, -key * imgWidth);
        square--;
        if (square < 0) {
            square = Arr.length - 1;
        }
        for (var i = 0; i < Arr.length; i++) {
            Arr[i].className = "";
        }
        Arr[square].className = "current";
    }


    //右边小箭头
    spanArr[1].onclick = function () {
        autoplay();
    }

   

    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }

        }, 10)
    }
    


    var info = document.getElementsByClassName("info")[0];
    var one = info.children[0];
    var two = info.children[2];
    var message = document.getElementsByClassName("message")[0];
    var left = message.children[0];
    var inforWidth = left.offsetWidth;
    one.onmousemove = function () {
        if(message.style.left!=0){
            animate(message, 0)
        }
    }
    two.onmouseover = function () {
        animate(message, -inforWidth);
    }
    
}


//添加小图标
function icon_all() {
    var iconGroup = [
        { "name": "话费", "icon": "icon-huafei" },
        { "name": "机票", "icon": "icon-jipiao" },
        { "name": "酒店", "icon": "icon-fill1" },
        { "name": "游戏", "icon": "icon-huodong" },
        { "name": "企业购", "icon": "icon-qiye" },
        { "name": "加油卡", "icon": "icon-jiayouzhan" },
        { "name": "电影票", "icon": "icon-dianyingpiao" },
        { "name": "火车票", "icon": "icon-huochepiaomianxing" },
        { "name": "众筹", "icon": "icon-zhongchou" },
        { "name": "理财", "icon": "icon-licai" },
        { "name": "礼品卡", "icon": "icon-wodelipinqia" },
        { "name": "白条", "icon": "icon-dabaitiao" }
    ]
    var iconAll = document.getElementsByClassName("iconAll")[0];
    for (var i = 0; i < iconGroup.length; i++) {
        iconAll.innerHTML += "<li>" +
            "<a><i class='iconfont " + iconGroup[i].icon + "'></i>" + iconGroup[i].name + "</a>" +
            "</li>";
    }
}
function lightIcon() {
    var iconAll = document.getElementsByClassName("iconAll")[0];
    for (var i = 0; i < iconAll.children.length; i++) {
        iconAll.children[i].onmouseover = function () {
            for (var j = 0; j < iconAll.children.length; j++) {
                iconAll.children[j].firstChild.style.color = "";
            }
            this.firstChild.style.color = "#e85f5b";
        }
        iconAll.children[i].onmouseout = function () {
            this.firstChild.style.color = "";
        }
    }
}

//倒计时
function DJS() {
    var countDown = document.getElementsByClassName("countDown")[0];
    var ulDjs = countDown.getElementsByTagName("ul")[0];
    setInterval(function () {
        var now = new Date();
        var target = new Date("2018/12/30 0:0:0");
        var long = target.getTime() - now.getTime();
        var day = parseInt(long / 1000 / 60 / 60 / 24);
        var hour = parseInt(long / 1000 / 60 / 60 % 24);
        var minu = parseInt(long / 1000 / 60 % 60);
        var sec = parseInt(long / 1000 % 60);
        day < 10 ? "0" + day : day;
        hour < 10 ? "0" + hour : hour;
        minu < 10 ? "0" + minu : minu;
        sec < 10 ? "0" + sec : sec;
        ulDjs.innerHTML = "<li>" + day + "</li>" +
            "<li>" + hour + "</li>" +
            "<li>" + minu + "</li>";
    }, 1000)
}
function goodsSlide(){
    var goodsInfo=[
        {"img":"../images/goods1.jpg","words":"美味山泉红酒","price1":"1080","price2":"668"},
        {"img":"../images/goods2.jpg","words":"翡翠陶瓷碗","price1":"324","price2":"168"},
        {"img":"../images/goods3.jpg","words":"启力啤酒","price1":"12","price2":"6"},
        {"img":"../images/goods4.jpg","words":"乔丹羽毛球拍","price1":"368","price2":"224"},
        {"img":"../images/goods5.jpg","words":"pringles薯片","price1":"32","price2":"22"},
        {"img":"../images/goods6.jpg","words":"米老头花生米卷","price1":"24","price2":"16"},
        {"img":"../images/goods7.jpg","words":"零食辣条大礼包","price1":"88","price2":"68"},
        {"img":"../images/goods8.jpg","words":"慕斯夹心山楂卷","price1":"32","price2":"18"}
    ]
    var goods=document.getElementsByClassName("goods")[0];
    var box=goods.getElementsByClassName("box")[0];
    for(var i=0;i<goodsInfo.length;i++){
        box.innerHTML+="<div style='width:189px;height:276px;float:left;background-color:#fff;border-right:1px solid #f0f0f0'>"+
                        "<img src='"+goodsInfo[i].img+"' title='"+goodsInfo[i].words+"' style='width:189px;height:190px;'></img>"+
                        "<p style='height:auto;text-align:center;font-size:16px;'>"+goodsInfo[i].words+"</p>"+
                        "<div style='width:162px;height:30px;margin:10px auto;border:1px solid #e83632'>"+
                        "<span style='width:81px;height:30px;line-height:30px;text-align:center;background-color:#e83632;display:inline-block;color:#fff;font-weight:bold'>"+goodsInfo[i].price2+"</span>"+
                        "<span style='width:81px;height:30px;line-height:30px;text-align:center;background-color:#fff;text-decoration:line-through;display:inline-block;color:#e1e3e1;font-weight:bold'>"+goodsInfo[i].price1+"</span>"+
                        "</div>"+
                        "</div>";


    }
    var spanAll=document.getElementsByClassName("spanAll")[0];
    var spanGroup=spanAll.getElementsByTagName("span");
    var goods=document.getElementsByClassName("goods")[0];
    var box=goods.getElementsByClassName("box")[0];
    var divWidth=goods.offsetWidth;
    var allWidth=box.offsetWidth;
    var num=allWidth/divWidth;
    var newDiv1=box.children[0].cloneNode(true);
    console.log(newDiv1);
    var newDiv2=box.children[1].cloneNode(true);
    var newDiv3=box.children[2].cloneNode(true);
    var newDiv4=box.children[3].cloneNode(true);
    console.log(newDiv2);
    console.log(newDiv3);
    console.log(newDiv4);
    box.appendChild(newDiv1);
    box.appendChild(newDiv2);
    box.appendChild(newDiv3);
    box.appendChild(newDiv4);
    var k=0;
    spanGroup[0].onclick=function (){
        k--;
        if(k<0){
            box.style.left=-(num-1)*divWidth+"px";
            k=num-2;
        }
        animate(box,-k*divWidth);
    }
    spanGroup[1].onclick=function (){
        k++;
        if(k>num-1){
            box.style.left=0;
            k=1;
        }
        animate(box,-k*divWidth);
    }
    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }

        }, 10)
    }
}
function floatNav(){
    var mainNav=document.getElementsByClassName("fuN")[0];
    var bodyDiv=document.getElementsByClassName("body")[0];
    var nav=document.getElementsByClassName("nav")[0];
    var center=document.getElementsByClassName("center")[0];
    var s=mainNav.getElementsByClassName("floatNav")[0];
    var tHeight=nav.offsetHeight;
    var bHeight=bodyDiv.offsetHeight;
    var allHeight=tHeight+bHeight;
    console.log(nav.offsetHeight);
    window.onscroll=function (){
        if(scroll().top>245){
            mainNav.style.display="inline";
            mainNav.className+="fixed ";
            center.style.marginTop=49+"px";
        }else{
            mainNav.className="";
            mainNav.style.display="none";
            center.style.marginTop=1+"px";
        }
    }

}
function smallSlide(){
    var s_slide=document.getElementsByClassName("smallSlide")[0];
    var s_ul=s_slide.getElementsByTagName("ul")[0];
    var s_arr=s_ul.getElementsByTagName("li");
    var s_num=document.getElementsByClassName("smallNum")[0];
    var s_liArr=s_num.getElementsByTagName("li");
    var s_imgWidth=s_arr[0].offsetWidth;
    console.log(s_imgWidth);
    var s_newLi=s_arr[0].cloneNode(true);
    console.log(s_newLi);
    s_ul.appendChild(s_newLi);


    for (var i = 0; i < s_liArr.length; i++) {
        s_liArr[i].index = i;
        s_liArr[i].onmouseover = function () {
            for (var j = 0; j < s_liArr.length; j++) {
                s_liArr[j].className = "";
            }
            this.className = "s_current";
            key = square = this.index;
            animate(s_ul, -this.index * s_imgWidth);
        }
    }
    
    
    var slide = setInterval(autoplay, 1000);
    
    var key = 0;
    var square = 0;
    function autoplay() {
        key++;
        if (key > s_liArr.length) {
            s_ul.style.left = 0;
            key = 1;
        }
        animate(s_ul, -key * s_imgWidth);
        square++;
        if (square > s_liArr.length - 1 ){
            square = 0;
        }
        for (var i = 0; i < s_liArr.length; i++) {
            s_liArr[i].className = "";
        }
        s_liArr[square].className = "s_current";

    }
    

    function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target-ele.offsetLeft)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },18);
    }

}


addLoadEvent(leftSort);
addLoadEvent(closeBanner);
addLoadEvent(changePic);
addLoadEvent(icon_all);
addLoadEvent(lightIcon);
addLoadEvent(DJS);
addLoadEvent(goodsSlide);
addLoadEvent(floatNav);
addLoadEvent(smallSlide);