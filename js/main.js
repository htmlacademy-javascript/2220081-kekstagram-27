function getRandom (min , max) {

    if ((min <0 ) || (max < 0) || (min>max) || (min === max) || (typeof min !== 'number') || (typeof max !== 'number')){
    return NaN
    }
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
    
    console.log(getRandom ('Masdf' , 10));
    
function checkMaxLenght(str, maxlenght){
    return str.lenght <= maxlenght;
}
    console.log (checkMaxLenght('tumbajumba', 10));