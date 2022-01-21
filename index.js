var outputBox = document.getElementById("output-screen");

function display(num){
        outputBox.value =  outputBox.value + num;
}
function calculate(){
    try{
        outputBox.value = eval(outputBox.value);
    }
    catch(err){
        alert('Invalid');
    }
}
function clr(){
    
    outputBox.value = "";
}
function del(){
    outputBox.value = outputBox.value.slice(0,-1);
}

