function mumbling(s){
    let str2 = ''
   
  for (i=0; i<s.length; i++){
    str2 += s[i].toUpperCase()

    for(n = 0;n < i ;n++){
        str2 += s[i].toLowerCase()
    }
    if(i != s.length -1){
        str2 += '-'
    }
    
  } 
  return str2
}console.log(mumbling('abcd'))