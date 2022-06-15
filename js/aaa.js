var a = document.getElementById("a");
var b = document.getElementById("b")


function changeColor(){
    localStorage.setItem('--bg-dark', 'aqua');
    const color = document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark')=="aqua" ? "aqua" : "pink"}`)
    

    document.querySelector(":root").style.setProperty('--bg-dark', `aqua`);
    
    console.log("aaaaaaaaa" + color)
}

function changeColorPink(){
    localStorage.setItem('--bg-dark',"pink")
    document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark')=="pink" ? "pink" : "aqua"}`);
    
}

function button(){
    const botao = document.getElementById("botao")

    funcao("giovana","gugu")
    
}

const funcao = (a,b)=>{
    alert(`socorro ${a} e ${b}`)
}



