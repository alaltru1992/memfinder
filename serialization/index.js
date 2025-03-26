function getEthalon(){
    const asciiCharacters = [];
    for (let i = 18; i < 128; i++) {
        if (i < 48 || i > 57) {
            asciiCharacters.push(String.fromCharCode(i));
        }
    }
    return asciiCharacters.join('');
}

export function encode(arr){
    const ethalon = getEthalon();
    let res = '';
    arr.forEach((elm) =>{
        if(elm < ethalon.length){
            res = res + ethalon[elm]
        }
        else{
            const integer = Math.floor(elm / 10);
            const reminder = elm % integer;
            res = res+ `${ethalon[integer]}${reminder}`;
        }
    })
    return res;
}

export function decode(str){
    const ethalon = getEthalon();
    const numbers = ['0','1','2','3','4','5','6','7','8','9']
    const res = [];
    let i = str.length - 1;
    do{
        if(numbers.includes(str[i])){
            const integer = ethalon.indexOf(str[i-1]);
            const reminder = Number(str[i]);
            res.unshift(Number(`${integer}${reminder}`))
            i-=2;
        }else{
            res.unshift(ethalon.indexOf(str[i]));
            i--;
        }
    }while (i>=0)
    return res;
}

export function calculateCompressionRatio(originalArray, compressedString) {
    if(!compressedString.length){
        return 0
    }
    let originalLength = originalArray.join(',').length;
    let compressedLength = compressedString.length;

    return Math.round(((originalLength - compressedLength) / originalLength) * 100);
}



