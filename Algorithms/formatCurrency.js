function formatCurrency(N){
    let arrayN = N.toString().split(""),
        remains = arrayN.length % 3,
        i = 0;
    if(remains !== 0) arrayN.splice(remains, 0, ",");
    while (i < Math.floor(arrayN.length/3)){
        remains += 3;
        let commas = arrayN.length - N.toString().length;
        if(remains + commas >= arrayN.length) break;
        arrayN.splice(remains + commas, 0, "," );
        i++;
    }
    return arrayN.join("");
}

formatCurrency(98745760000000);