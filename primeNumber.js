function primeNumber(num){
    let count = 0;
    for(i =2;i<=num/2;i++){
        if (num%i==0){
            console.log(" not prime Number");
            let count = 1;
            break;
        }
    }
    if(count != 1){
        console.log("prime Number");
    }
}
primeNumber(5) 
