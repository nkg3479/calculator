$("button").click(compute);
const textp=document.querySelector(".text1");
const textc=document.querySelector(".text2");
var l=0;
var c=0;
var e="";
var p=0;
window.addEventListener("load",()=>{
    l=0;
    c=0;
    e="";
    p=0;
    $(".text1").val("");
    $(".text2").val("0");
});
function compute(){
    var a=$(this).text();
    const n=!isNaN(a);
    if(n){
        if(p==1){
            c=`${c}${a}`;
            $(".text2").val(`${c}`);
        }
        else{
            c=(c*10)+parseInt(a);
            $(".text2").val(`${c}`);
            // textc.innerHTML=`${c}`;
        }
    }
    else
    {
        c=parseFloat(c);
        if(a=="AC"){
            l=0;
            c=0;
            e="";
            $(".text1").val("");
            $(".text2").val("0");
            p=0;
        }
        else if(a=="DEL"){
            c=$(".text2").text();
            if(c.length>=1){
                $(".text2").val(c.substring(0,(c.length-1)));
            }
            else{
                $(".text2").val("");
            }
        }
        else if(a=="="){
            if(e==""){
                $(".text1").val(`${c}=${calculate(e)}`);
            }
            else{
                $(".text1").val(`${l}${e}${c}=${calculate(e)}`);
            }
            $(".text2").val("");
            p=0;

        }
        else if(a=="."){
            if(p==0){
                c=`${c}.`;
                $(".text2").val(`${c}`);
                p=1;
            }
        }
        else
        {
            l=calculate(e);
            console.log(l);
            $(".text1").val(`${l}${a}`);
            // textp.innerHTML=`${l}${a}`;
            e=`${a}`;
            $(".text2").val("");
            c=0;
            p=0;
        }
        
    }
    
}
function calculate(e){
    switch(e){
        case "":{
            return c;
        }
        case '+':{
            return l+c;
        }
        case "-":{
            return l-c;
        }
        case "*":{
            return l*c;
        }
        case "/":{
            return l/c;
        }
        case "%":{
            return l%c;
        }
    }
}