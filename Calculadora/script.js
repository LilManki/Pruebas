let output = document.getElementById('output');
let valDec = true;
const numbers = (n) => {
    if(output.value.length<17)
    output.value = output.value + n;
}

const back = () => {
    let x = output.value;
    x = x.substr(0, x.length -1);
    output.value = x;
}

const ops = (x) => {
    if(output.value.substr(output.value.length -1) != '+' 
    && output.value.substr(output.value.length -1) != '-'
    && output.value.substr(output.value.length -1) != '*'
    && output.value.substr(output.value.length -1) != '/'
    && output.value != ''){
    output.value = output.value + x;
    valDec = true;
    }
}
const point = (x) => {
    if(output.value.substr(output.value.length -1) != x
    && valDec == true){
    output.value = output.value + x;
    valDec = false;
    }
}
const rta = () => {
    output.value= eval(output.value);
    if (output.value.indexOf('.',0 ) == -1){
        valDec = true;
    }
}