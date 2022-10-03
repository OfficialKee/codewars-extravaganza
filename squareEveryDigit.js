function squareDigits(num){
    num = String(num);
    let sum = 0
    let final = 0
   for (i=0; i<num.length; i++){
      number = Number(num[i]**2)
      sum  =  sum + String(number)
      final = Number(sum)
    } return final
      
    
  }console.log(squareDigits(9119))