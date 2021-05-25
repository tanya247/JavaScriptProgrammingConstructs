function primeNumber(num){
    let count = 0;
    for(i =2;i<=num/2;i++){
        if (num%i==0){
            
            let count = 1;
            return "not prime Number"
            
        }
    }
    if(count != 1){
        return "prime Number"
    }
}
function PalindromeNumber(value2){
    m = value2.toString()
    sum = '';
    for(i=0;i<m.length;i++){
        sum = m[i]+sum;
    }
    if(parseInt(sum)==value2){
        return "Palindrome Number"
    }
    else{
        return "Not Palindrome Number"
    }
}
m = PalindromeNumber(12433421);
if(m == "Palindrome Number"){
    r = primeNumber(12433421);
    if(r == "prime Number"){
        console.log("Palindrome no. is also prime");
    }else{
        console.log("Number is palindrome but not prime");
    }
}else{
    console.log("Not Palindrome Number");
}


