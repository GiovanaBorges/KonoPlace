
let place_01 = document.getElementById("#01");
let place_02 = document.getElementById("#02");
let place_03 = document.getElementById("#03");
let place_04 = document.getElementById("#04");
let place_05 = document.getElementById("#05");
let place_06 = document.getElementById("#06");
let place_07 = document.getElementById("#07");
let place_08 = document.getElementById("#08");
let place_09 = document.getElementById("#09");
let place_10 = document.getElementById("#10");
let place_11 = document.getElementById("#11");
let place_12 = document.getElementById("#12");
let place_13 = document.getElementById("#13");
let place_14 = document.getElementById("#14");
let place_15 = document.getElementById("#15");
let place_16 = document.getElementById("#16");
let place_17 = document.getElementById("#17");
let place_18 = document.getElementById("#18");
let place_19 = document.getElementById("#19");
let place_20 = document.getElementById("#20");
let place_21 = document.getElementById("#21");
let place_22 = document.getElementById("#22");
let place_23 = document.getElementById("#23");
let place_24 = document.getElementById("#24");
let place_25 = document.getElementById("#25");
let place_26 = document.getElementById("#26");
let place_27 = document.getElementById("#27");
let place_28 = document.getElementById("#28");
let place_29= document.getElementById("#29");
let place_30 = document.getElementById("#30");
let place_31 = document.getElementById("#31");
let place_32 = document.getElementById("#32");
let place_33 = document.getElementById("#33");
let modalInfo = document.getElementById("modalInfo");
let modalDescription = document.getElementById("place_info")
let modalDate = document.getElementById("place_data")
let inputDate = document.getElementById("date_reservation").value  
let btnDate = document.getElementById("btnDateSubmit")


place_01.addEventListener("click",(event)=>{
    getPlace(event)
})


place_02.addEventListener("click", ()=>{    
    let perife = ["Tomada", "papel"] 
    let name = "#02"
    infoWrite(perife,name)
    console.log("2")
})  

place_03.addEventListener("click", ()=>{    
    let perife = ["Tomada"] 
    let name = "#03"
    infoWrite(perife,name)
    console.log(`3, oljha a data ${inputDate}`)
    
})  

place_04.addEventListener("click", ()=>{    
    let perife = ["Tomada"] 
    let name = "#04"
    infoWrite(perife,name)
    console.log("4")
})  

place_05.addEventListener("click", ()=>{    
    let perife = ["Tomadas"] 
    let name = "#05"
    infoWrite(perife,name)
    console.log("5")
})  

place_06.addEventListener("click", ()=>{    
    let perife = ["Tomadas"] 
    let name = "#06"
    infoWrite(perife,name)
    console.log("6")
})  

place_07.addEventListener("click", ()=>{    
    let perife = ["Tomadas"] 
    let name = "#07"
    infoWrite(perife,name)
    console.log("7")
})  

place_08.addEventListener("click", ()=>{    
    let perife = ["Tomadas"] 
    let name = "#08"
    infoWrite(perife,name)
    console.log("8")
})  

place_08.addEventListener("click", ()=>{    
    let perife = ["Tomadas"] 
    let name = "#08"
    infoWrite(perife,name)
    console.log("8")
})  

btnDate.addEventListener("click", ()=>{
    const date = inputDate.value    
    
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('pt-br', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(d);
    console.log(`${(da)}/${mo}/${ye}`);
})

function getPlace(event){
    event.preventDefault()
    console.log("aaaaaaaa")
    const name = document.forms["formPlace"]["fname"].value;
    const perife = document.forms["formPlace"]["fperife"].value;
    const date = document.forms["formPlace"]["fdate_reservation"].value;

    infoWrite(perife,name,date)
}

function infoWrite(perifericos,name,date){
    modalInfo.innerText+=name+" ?";
    modalDescription.innerText+= " Periféricos: " + perifericos.join(" ").toString()
    modalDate.innerText = date
    
}

function cleanModal(){
    //modalInfo.innerText=" "
    //modalDescription.innerText=" "
    location.reload()
}
