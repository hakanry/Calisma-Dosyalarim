const getBiggest = (digit)=>{
  let biggest = "";
  let i = 0;
  while(i<digit){
    biggest = biggest + "9";
    i++;
  }
  return biggest;
}
console.log(getBiggest(3));