document.getElementById("res").addEventListener("click", function () {
    let value1 = parseFloat(document.getElementById("num1").value);
    let value2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("demo").innerHTML = value1 + value2;
});