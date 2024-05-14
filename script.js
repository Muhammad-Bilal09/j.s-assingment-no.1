document.getElementById("alertname").onclick = function () {
    alert("Muhhammad Bilal")
    document.getElementById("statement").innerHTML = 'Muhammad Bilal'
}
document.getElementById("alertnumber").onclick = function () {
    alert("123")
    document.getElementById("statement").innerHTML = 123
}
document.getElementById("showvariablename").onclick = function () {
    let html = "<ul><li>a variable name can't contian space.</li><li>a variable name contain letter,number,doller signand underscores.</li><li>though a variable name can't be any of javascript keyword.for example,<code>useralert</code>and<code>myvar</code>are legal</li><li>captile letters are fine ,but be careful. variable name are case sensitive.a <code>rose</code>is not a<code>Rose</code>.if you assign te string'floribundas' to te variable <code>rose</code>,and ten ak javascript for the value assigned to <code>Rose</code>,you'll come up empty</li></ul>"
    document.getElementById("output").innerHTML = html
}
document.getElementById("showcamelcaseexampel").onclick = function () {
    let text ="<ul><h3>Exampels</h3><li>user</li><li>userRespons</li><li>userResponsTime</li><li>userResponsTimeLimit</li></ul>"
    document.getElementById("output").innerHTML = text
}
document.getElementById("sum 2 number").onclick = function () {
    var num1 =10;
    var num2 =20;
    sum =num1+num2;
    document.getElementById("statement").innerHTML = "var num1 =10;<br>    var num2 =20;<br>   sum =num1+num2;"
    document.getElementById("output").innerHTML = sum
}
document.getElementById("subtract 2 number").onclick = function () {
    var num1 =10
    var num2 =20
    subtract =num1-num2
    document.getElementById("statement").innerHTML = "var num1 =10; <br> var num2 =20; <br> subtract =num1-num2;"

    document.getElementById("output").innerHTML = subtract
    }
    document.getElementById("multiply 2 number").onclick = function () {
        var num1 =10
        var num2 =20
        mult =num1*num2
        document.getElementById("statement").innerHTML = "var num1 =10; <br> var num2 =20; <br> mult =num1*num2;"
        document.getElementById("output").innerHTML = mult
    }
    document.getElementById("divide 2 number").onclick = function () {
        var num1 =10
        var num2 =20
        divide =num1/num2
        document.getElementById("statement").innerHTML = "var num1 =10; <br> var num2 =20; <br>  divide =num1/num2;"
        document.getElementById("output").innerHTML = divide

    }
    document.getElementById("calculate some number") .onclick = function(){
        document.getElementById("statement").innerHTML = "null"
        document.getElementById("output").innerHTML = "null"   
    }
    document.getElementById("clear").onclick = function () {
        document.getElementById("statement").innerHTML = ""
    }
    document.getElementById("clear2").onclick = function () {
        document.getElementById("output").innerHTML = ""
    }