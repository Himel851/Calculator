function deleteAll(){

    document.getElementById("result").value = " ";
}
function calculator(value){

    document.getElementById("result").value += value;

}
function resultAll(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}