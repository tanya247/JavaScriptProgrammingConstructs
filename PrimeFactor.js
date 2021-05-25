function getPrimeFactors(num) {
    for (i = 2; i <= num; i++) {
        while (num % i == 0) {
            console.log(i+" is a Prime Factor");
            num = num / i;
        }
    }
}
getPrimeFactors(24);