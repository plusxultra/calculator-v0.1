var result = document.querySelector("#result");
var input = document.querySelector("#input");

function inputNum(n){
    input.value = input.value + n;
}

function deleteNum(){
    input.value = input.value.substr(0,input.value.length-1);
}

function deleteAll(){
    input.value = result.value = "";
}

function computeNum(){
    result.value = input.value;
    if (input.value.includes("+")){
        var ans = input.value.split("+");
        input.value = parseFloat(ans[0]) + parseFloat(ans[1])
    }
    else if (input.value.includes("-")){
        var ans = input.value.split("-");
        input.value = parseFloat(ans[0]) - parseFloat(ans[1]);
    }
    else if (input.value.includes("*")){
        var ans = input.value.split("*");
        input.value = parseFloat(ans[0]) * parseFloat(ans[1]);
    }
    else if (input.value.includes("/")){
        var ans = input.value.split("/");
        input.value = parseFloat(ans[0]) / parseFloat(ans[1]);
    }
    else{
        input.value = input.value;
    }
}