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
    return ( function NextFib(i, iplus) {
        if (iplus >= 4000000) return sum;
        if (iplus%2===0) sum+=iplus;
        console.log("i:"+i+"  iplus:"+iplus + "    sum:"+sum);
        return NextFib(iplus, i+iplus);
    })(1, 2);
}

AnswerMe = function (num) {
    switch (num) {
        case 1:
            return MultiplesOf3And5();
            break;
        case 2:
            return SumOfEvenFibonacciTo4Million();
            break;
        default:
            return 42;
    }
};
