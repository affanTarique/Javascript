var bulb= document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click", function() {
    if (flag == 0) {
        bulb.style.backgroundColor = "Yellow"
        console.log("Cliocked")
        flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Again clieckedf")
        flag = 0
    } 

})