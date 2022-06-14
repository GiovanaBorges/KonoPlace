function changeColor(){

    const a = document.getElementById("a");

    const color = document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark') ? "aqua" : "pink"}`);
    localStorage.setItem('--bg-dark', 'pink');
    console.log("aaaaaaaaa" + color)
    
    

}

function changeColorPink(){
    const b = document.getElementById("b")
    document.querySelector(":root").style.setProperty('--bg-dark', `${localStorage.getItem('--bg-dark')}`);
    localStorage.setItem('--bg-dark',"aqua")
}