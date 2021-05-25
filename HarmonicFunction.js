function HarmonicFunction(n){
    let num = 0
    for (var i = 1; i <= n; i++) {
        num += (1/i);
    }
    console.log(n+ "th Harmonic function sum = " + num);
}

HarmonicFunction(3);