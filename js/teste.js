const button = document.getElementById("changeColor")
const button2 = document.getElementById("button2")


button2.addEventListener("click", algumaCoisa())

button.addEventListener("click", ()=>{
    
})

function changeColor(){
    document.querySelector(":root").style.setProperty("--bg-dark" , "red")
}


function algumaCoisa(){
    alert("asdasdasd")
}




