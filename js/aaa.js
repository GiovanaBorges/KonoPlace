var a = document.getElementById("a");
var b = document.getElementById("b")
<<<<<<< HEAD
let toggle = document.getElementById("toggle")
=======

>>>>>>> 1fc97c4593f49b6fa49dabaa031cefabef95cd8c

function changeColor(){
    localStorage.setItem('--bg-dark', 'aqua');
    const color = document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark')=="aqua" ? "aqua" : "pink"}`)
    

    document.querySelector(":root").style.setProperty('--bg-dark', `aqua`);
    
    console.log("aaaaaaaaa" + color)
}

function changeColorPink(){
    localStorage.setItem('--bg-dark',"pink")
    document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark')=="pink" ? "pink" : "aqua"}`);
<<<<<<< HEAD
    document.querySelector(":root").style.setProperty('--bg', `aqua`);
=======
>>>>>>> 1fc97c4593f49b6fa49dabaa031cefabef95cd8c
    
}

function button(){
    const botao = document.getElementById("botao")

    funcao("giovana","gugu")
    
}

<<<<<<< HEAD
toggle.addEventListener("click", ()=>{
    toggle.src="https://img.icons8.com/external-basicons-line-edtgraphics/50/000000/external-off-ui-basic-basicons-line-edtgraphics.png"
})

=======
>>>>>>> 1fc97c4593f49b6fa49dabaa031cefabef95cd8c
const funcao = (a,b)=>{
    alert(`socorro ${a} e ${b}`)
}



