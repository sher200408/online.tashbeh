function myThebtn1() {
    let dox1 = document.querySelector("#inp2");
    let dox = document.querySelector("#inp1");
    dox.value = parseInt(dox.value)+1
    dox1.value = parseInt(dox1.value)+1
    if(dox.value==34){
        dox.value=0
    }
}
function myBest(){
    let dox1 = document.querySelector("#inp1");
    let dox2 = document.querySelector("#inp2");
    dox1.value=0;
    dox2.value=0;
}

