function PalindromeNumber(value1,value2){
    value2 = value2.toString()
    sum = '';
    for(i=0;i<value2.length;i++){
        sum = value2[i]+sum;
    }
    if(parseInt(sum)==value1){
        console.log("Palindrome Number")
    }
    else{
        console.log("Not Palindrome Number")
    }
}
PalindromeNumber(153,351)