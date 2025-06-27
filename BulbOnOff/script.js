var bulb= document.querySelector("#bulb")
var btn = document.querySelector("#button")

btn.addEventListener("click", function() {
    bulb.computedStyleMap.backgroundColor = "Yellow"
})