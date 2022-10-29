function oddEvenConcat(str){

  let evenIndex="";
  let oddIndex="";
for(let i=0;i<=str.length-1;i++){
  if(i%2===0){
    evenIndex+=str[i];
  }
  else{
    oddIndex+=str[i];
    // console.log(oddIndex)
  }
}
  
  return (evenIndex.concat(oddIndex));
}                 
console.log(oddEvenConcat('abcdefg'))
