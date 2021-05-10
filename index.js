

var allClear = document.getElementById('all-clear');
var clear = document.getElementById('clear');
var mod = document.getElementById('operator-mod');
var divide = document.getElementById('operator-divide');
var num7 = document.getElementById('num7');
var num8 = document.getElementById('num8');
var num9 = document.getElementById('num9');
var multiply = document.getElementById('operator-multiply');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var minus = document.getElementById('operator-minus');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var plus = document.getElementById('operator-plus');
var num0 = document.getElementById('num0');
var dot = document.getElementById('operator-dot');
var equals = document.getElementById('operator-equals');


var inputBox = document.getElementById('input-box');
var inputBoxSmall = document.getElementById('input-box-small');



allClear.addEventListener('click' , function(){
    inputBox.value = "";
    inputBoxSmall.value = "";
})

clear.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value).substr(0 , String(inputBox.value).length-1);
})


num1.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "1";
})

num2.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "2";
})

num3.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "3";
})

num4.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "4";
})

num5.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "5";
})

num6.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "6";
})

num7.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "7";
})

num8.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "8";
})

num9.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "9";
})

num0.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + "0";
})
dot.addEventListener('click' , function(){
    inputBox.value = String(inputBox.value) + ".";
})




function solve(){
    var x = "";
    if(String(inputBox.value).length >0){
        x = String(inputBoxSmall.value) + String(inputBox.value);
        console.log(x)
    }else{
        x = String(inputBoxSmall.value).substr(0 , String(inputBoxSmall.value).length-1);
    }
    var result = eval(x);
    inputBox.value = result;
    inputBoxSmall.value = "";
}





plus.addEventListener('click' , function(){
    if(String(inputBox.value).length === 0){
        inputBox.value = "0"
    }
    inputBoxSmall.value += inputBox.value + "+"
    inputBox.value = "";
})

minus.addEventListener('click' , function(){
    if(String(inputBox.value).length === 0){
        inputBox.value = "0"
    }
    inputBoxSmall.value += inputBox.value + "-"
    inputBox.value = "";
})
multiply.addEventListener('click' , function(){
    if(String(inputBox.value).length === 0){
        inputBox.value = "0"
    }
    inputBoxSmall.value += inputBox.value + "*"
    inputBox.value = "";
})
divide.addEventListener('click' , function(){
    if(String(inputBox.value).length === 0){
        inputBox.value = "0"
    }
    inputBoxSmall.value += inputBox.value + "/"
    inputBox.value = "";
})

mod.addEventListener('click' , function(){
    if(String(inputBox.value).length === 0){
        inputBox.value = "0"
    }
    inputBoxSmall.value += inputBox.value + "%"
    inputBox.value = "";
})

equals.addEventListener('click' , function(){
    solve();
} )

document.addEventListener('keyup' , function(event){
    var keyCode = event.keyCode;
    console.log(keyCode)
    switch(keyCode){
        case 49:
            console.log("1");
            inputBox.value = String(inputBox.value) + "1";
            break;
        case 50:
            console.log("2");
            inputBox.value = String(inputBox.value) + "2";
            break;
        case 51:
            console.log("3");
            inputBox.value = String(inputBox.value) + "3";
            break;
        case 52:
            console.log("4");
            inputBox.value = String(inputBox.value) + "4";
            break;
        case 53:
            console.log("5");
            inputBox.value = String(inputBox.value) + "5";
            break;
        case 54:
            console.log("6");
            inputBox.value = String(inputBox.value) + "6";
            break;
        case 55:
            console.log("7");
            inputBox.value = String(inputBox.value) + "7";
            break;
        case 56:
            console.log("8");
            inputBox.value = String(inputBox.value) + "8";
            break;
        case 57:
            console.log("9");
            inputBox.value = String(inputBox.value) + "9";
            break;
        case 48:
            console.log("0");
            inputBox.value = String(inputBox.value) + "0";
            break;
        case 8:
            console.log("backspace");
            inputBox.value = String(inputBox.value).substr(0 , String(inputBox.value).length-1);
            break;

        default:
            console.log("invalid Input");
    }
})

// document.addEventListener('keyup' , function(event){
//     var keyCode = event.keyCode;
//     switch(keyCode){
        
//         default:
//             console.log("Invalid Input")
//     }
// })