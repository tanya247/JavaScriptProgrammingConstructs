function AirthmeticFunction(a,b,c){
    let m = a+b*c;
    let n = c+a/b;
    let p = a%b+c;
    let t = a*b+c;
    if(m > n && m > p && m > t){
        console.log("Max: a+b*c= "+m);
    }else if(n> m && n > p && n > t){
        console.log("Max: a%b+c= "+n);
    }else if(p > m && p > n && p > t){
        console.log("Max: c+a/b= "+p);
    }else {
        console.log("Max: a*b+c= "+t);
    }

    if(m < n && m < p && m < t){
        console.log("Min: "+"a+b*c= "+m);
    }else if(n < m && n < p && n < t){
        console.log("Min: a%b+c= "+n);
    }else if(p < m && p < n && p < t){
        console.log("Min: c+a/b= "+p);
    }else {
        console.log("Min: a*b+c= "+t);
    }
}
AirthmeticFunction(2,3,9)