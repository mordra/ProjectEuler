// Question 1
function MultiplesOf3And5() {
    var sum = 0;
    for (var i=3; i<1000; i++)
        if (i%3===0 || i%5===0)
            sum+=i;
    return sum;
}

// Question 2
function SumOfEvenFibonacciTo4Million() {
    var sum = 0;
    return (function NextFib(i, iplus) {
        if (iplus >= 4000000) return sum;
        if (iplus % 2 === 0) sum += iplus;
        console.log("i:" + i + "  iplus:" + iplus + "    sum:" + sum);
        return NextFib(iplus, i + iplus);
    })(1, 2);
}

// Question 3
function PrimeFactor(num) {
    console.log("Finding a prime factor of " + num);
    if (num < 3) return [num];

    for (i=0; i<1000; i++) {
        var prime = primesFirst1000[i];
        if (num % prime === 0) {
            return [prime].concat(PrimeFactor(num/prime));
        }
    }

    for (i=7921; i<math.sqrt(num);i++) {
        if (num % i === 0) {
            return [i].concat(PrimeFactor(num/i));
        }
    }
}

AnswerMe = function (num) {
    var start = new Date().getTime();

    switch (num) {
        case 1:
            answer = MultiplesOf3And5();
            break;
        case 2:
            answer = SumOfEvenFibonacciTo4Million();
            break;
        case 3:
            console.log("Q3. Finding the largest prime factor of 600851475143");
            var primeFactors = PrimeFactor(600851475143);
            console.dir("Primes: " + primeFactors);
            answer = _.max(primeFactors);
            break;
        default:
            answer = 42;
    }
    var end = new Date().getTime();

    return answer + '  Pondered for: ' + (end-start) + ' milliseconds';
};
