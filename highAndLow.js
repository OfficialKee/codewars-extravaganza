
function highAndLow(num){
    num = num.split(' ')
    let high = Number(num[0]);
    let low = Number(num[0]);
    for(i=0; i<num.length; i++){
        if( Number(num[i]) > high){
            high = Number(num[i]);
        }
        if(Number(num[i]) < low){
            low = Number(num[i]);
        }
    }return `${high} ${low}`
}console.log(highAndLow('1 2 3 4 5'))