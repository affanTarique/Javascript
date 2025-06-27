var istatus = document.querySelector("h5")
var addFriend= document.querySelector("#add")
var removeFriend = document.querySelector("#remove")


addFreind.addEventListener("click", function () {
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"

})

removeFriend.addEventListener("click", function () {
    istatus.innerHTML = "Suggestion"
    istatus.style.color = "red"


})
