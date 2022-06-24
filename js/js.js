function validar(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const cargo = document.getElementById("job").value
    const departamento = document.getElementById("departamento").value
    const telefone = document.getElementById("phone").value
    const senha = document.getElementById("pass").value

    
    
    if(email === "" || email === null ||
     name === "" || name=== null ||
      cargo === "" || cargo=== null 
      || departamento === "" 
    || departamento=== null ||
     telefone === "" || telefone=== null 
     || senha === "" || senha === null
    ){
        alert("Não pode haver espaços vazios")
    }

}

function validarcadastro(){ 
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const cargo = document.getElementById("cargo").value
    const departamento = document.getElementById("departamento").value
    const telefone = document.getElementById("phone").value
    const senha = document.getElementById("pass").value
    const confirmarsenha = document.getElementById("pass-confirm").value

 
    
    if(email === "" || email === null ||
     name === "" || name=== null ||
      cargo === "" || cargo=== null 
      || departamento === "" 
    || departamento=== null ||
     telefone === "" || telefone=== null 
     || senha === "" || senha === null
     || confirmarsenha === "" || confirmarsenha === null 
    ){
        alert("Não pode haver campos vazios")
    }

    if(senha !== confirmarsenha){
        alert("Senhas incompatíveis")

    }

}

function PreviewImage(){
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
}