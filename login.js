// import 'my.js'

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
function qrMove(){
    var qr =document.getElementsByClassName("qr-main")[0];
    var qrCode=document.getElementsByClassName("qrCode")[0];
    var qrImg = qrCode.getElementsByTagName("img")[0];
    var qrHelp=document.getElementsByClassName("qr-help")[0];
    qr.onmouseover=function(){
        qrImg.style.left=0+"px"
        qrHelp.style.display="block"
    }
    qr.onmouseout=function(){
        qrImg.style.left=64+"px"
        qrHelp.style.display="none"
    }
}
function loginWay(){
    var box=document.getElementsByClassName("box")[0];
    var ulOne=box.getElementsByTagName("ul")[0];
    var liArr=ulOne.getElementsByTagName("li");
    var qrAll=document.getElementsByClassName("qr-all")[0];
    var liFont=qrAll.getElementsByClassName("lifont");
    liArr[0].onclick=function (){
        for(var i=0;i<liArr.length;i++){
            liArr[i].className=""
        }
        for(var j=0;j<liFont.length;j++){
            liFont[j].className="lifont"
        }
        this.className="light";
        liFont[0].className="lifont show";
    }
    liArr[2].onclick=function (){
        for(var i=0;i<liArr.length;i++){
            liArr[i].className=""
        }
        for(var j=0;j<liFont.length;j++){
            liFont[j].className="lifont"
        }
        this.className="light";
        liFont[1].className="lifont show";
    }

}

addLoadEvent(qrMove);
addLoadEvent(loginWay);