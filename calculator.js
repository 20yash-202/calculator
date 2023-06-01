function putscreen0(){
    let num1= document.getElementById('display').value;
    document.getElementById('display').value= num1 + "0"; }
function putscreen1(){
    let num2= document.getElementById('display').value;
    document.getElementById('display').value= num2 +"1"; }
function putscreen2(){
     let num3= document.getElementById('display').value;
    document.getElementById('display').value= num3 + "2"; }
function putscreen3(){
     let num4= document.getElementById('display').value;
    document.getElementById('display').value= num4 + "3"; }
function putscreen4(){
     let num5= document.getElementById('display').value;
    document.getElementById('display').value= num5 + "4"; }
function putscreen5(){
     let num6= document.getElementById('display').value;
    document.getElementById('display').value= num6 + "5"; }
function putscreen6(){
     let num7= document.getElementById('display').value;
    document.getElementById('display').value= num7 + "6"; }
function putscreen7(){
     let num8= document.getElementById('display').value;
    document.getElementById('display').value= num8 + "7"; }
function putscreen8(){
     let num9= document.getElementById('display').value;
    document.getElementById('display').value= num9 + "8"; }
function putscreen9(){
     let num10= document.getElementById('display').value;
    document.getElementById('display').value= num10 + "9"; }
function putscreen10(){
     let num11= document.getElementById('display').value;
    document.getElementById('display').value= num11 + "."; }
function putscreen11(){
     let num12= document.getElementById('display').value;
    document.getElementById('display').value= num12 + "*"; }
function putscreen12(){
     let num13= document.getElementById('display').value;
    document.getElementById('display').value= num13 + "-"; }
function putscreen13(){
     let num14= document.getElementById('display').value;
    document.getElementById('display').value= num14 + "+"; }
function putscreen14(){
     let num15= document.getElementById('display').value;
    document.getElementById('display').value= num15 + "/"; }
function remove(){
document.getElementById('display').value= "";
}
function cut(){
    let a= document.getElementById('display').value;
    a= a.slice(0,-1);
    document.getElementById('display').value= a;
}
function root(){
    let b = document.getElementById('display').value;
    let result= Math.sqrt(b);
    document.getElementById('display').value= result;
} 
function percent(){
    let c = document.getElementById('display').value;
    if(c.includes("+")== true || c.includes("-")== true || c.includes("/")== true || c.includes("*")== true){
        alert("value must not be an expression!!!!");}
    else{let result= c* 100;
    document.getElementById('display').value= result + "%";}
} 
function calc(){
    let d = document.getElementById('display').value;
    let result= Function("return " + d)();
    document.getElementById('display').value= result;
} 
function lograthmic(){
    let e = document.getElementById('display').value;
    let result= Math.log(e);
    document.getElementById('display').value= result;
} 
function sin(){
    let f = document.getElementById('display').value;
    let result= Math.sin(f);
    document.getElementById('display').value= result;
} 
function cos(){
    let g = document.getElementById('display').value;
    let result= Math.cos(g);
    document.getElementById('display').value= result;
} 