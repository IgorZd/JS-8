'use strict'
let arr = ['2254', '5879', '5698', '3652', '4521', '7512', '2963'],
    filteredArr = arr.filter(function(element) {
        let result;
        if (element.charAt(0) == 2 || element.charAt(0) == 4) {
            result = element;
        }
        return result
    })
console.log(filteredArr);
nextPrime:
    for (var i = 2; i <= 100; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log(i);
    }