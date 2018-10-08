window.onload=function check() {
    var submitFlg = true;
    //验证姓名
    var regpname={regstr:/^[\u4e00-\u9fa5\w]{1,6}$/,tip:'请输入1-6位的汉字、英文、数字、下划线'};
    var pname= document.getElementById("pname").value;
    var spans = document.getElementById("pname").parentNode.getElementsByTagName("span");
    spans[0].innerHTML="";
    if(!regpname.regstr.test(pname)){
        spans[0].innerHTML=regpname.tip;
            submitFlg = false;
        }
        //验证用户名
        var regusername={regstr:/^[\w]{1,6}$/,tip:'请输入1-6位的英文、数字、下划线'};
        var username= document.getElementById("username").value;
        var spans = document.getElementById("username").parentNode.getElementsByTagName("span");
        spans[0].innerHTML="";
        if(!regusername.regstr.test(username)){
            spans[0].innerHTML=regusername.tip;
                submitFlg = false;
            }
            //验证密码
            var regpassword={regstr:/^[\w@#*]{1,6}$/,tip:'请输入1-6位的英文、数字、下划线、@、#、*'};
            var password= document.getElementById("password").value;
            var spans = document.getElementById("password").parentNode.getElementsByTagName("span");
            spans[0].innerHTML="";
            if(!regpassword.regstr.test(password)){
                spans[0].innerHTML=regpassword.tip;
                    submitFlg = false;
                }
                var repassword=document.getElementById("repassword").value;
                var spans = document.getElementById("repassword").parentNode.getElementsByTagName("span");
                spans[0].innerHTML="";
                if(repassword!=password){
                    spans[0].innerHTML="两次输入的密码不一致";
                        submitFlg = false;
                    }
                    //验证邮箱
                    var regemail={regstr:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,tip:'请确认邮箱格式'};
                    var email= document.getElementById("email").value;
                    var spans = document.getElementById("email").parentNode.getElementsByTagName("span");
                    spans[0].innerHTML="";
                    if(!regemail.regstr.test(email)){
                        spans[0].innerHTML=regemail.tip;
                        submitFlg = false;
                    }
                    //验证电话
                    var regphone={regstr:/^1\d{10}$/,tip:'请输入11位的手机号'};
                    var phone= document.getElementById("phone").value;
                    var spans = document.getElementById("phone").parentNode.getElementsByTagName("span");
                    spans[0].innerHTML="";
                    if(!regphone.regstr.test(phone)){
                        spans[0].innerHTML=regphone.tip;
                            submitFlg = false;
                        }
                        return submitFlg;
    }