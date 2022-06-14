var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,cache: 'default' };


function gato(){
    const result = "https:viacep.com.br/ws/01001000/json/?callback=meu_callback";
    
}

async function place(){
    const data = "./places.json"
    const result = data.map(resp=>console.log(resp))
    console.log(result)
}