let num=7;
let count=0;
for(let i=0;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){
console.log(num+"is a prime number")
}
else{
console.log("not a prime ")
}