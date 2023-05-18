$(document).ready(function () {

    let numbers = [];
    let operator;
    let result = "";
    let num = "";

    // Function to push parameter to the numbers array and display the number and operator selections
    $('.parameter').click(function () {
        let value = $(this).text()
        console.log(value)
        if (isNaN(value)) {
            numbers.push(num)
            num = ""
            operator = value
            let el = $('#display')
            el.append(operator)
        } else {
            num = num + value
            let el = $('#display')
            el.append(num)
        }
    })

    // calculations for 2 numbers only. Display result after clicking the = sign
    $('.equal').click(function () {
        numbers.push(num)
        console.log('numbers', numbers)
        console.log('operator', operator)
        if (operator === '+') {
            result = Number(numbers[0]) + Number(numbers[1])
        }
        if (operator === '-') {
            result = Number(numbers[0]) - Number(numbers[1])
        }
        if (operator === '*') {
            result = Number(numbers[0]) * Number(numbers[1])
        }
        if (operator === '/') {
            result = Number(numbers[0]) / Number(numbers[1])
        }
        console.log('result', result)

        let el = $('#display')
        el.empty()
        el.append(result)

        numbers = []
        operator = ""
        num = ""
    })

    //clear all the global vairables. 
    $('.clear').click(function () {
        numbers = []
        operator = ""
        result = ""
        num = ""
        let el = $('#display')
        el.empty()
    })

})//end 

// let numbers = [];
// let parameter;
// let equal;
// let displayValue = 0

// function calculator() {
//     $('.number').click(function () {
//         let value = $(this).text()
//         numbers.push(value)
//         console.log('numbers', numbers)
//     }//end function 
//     )//end click    
//     calculatorDisplay()
//     calculations()
// }

// function calculations() {
//     console.log('in calculations')
//         $('.parameter').click(function () {
//         let value = $(this).text()
//         parameter = value
//         console.log('parameter', parameter)
//         if (parameter === "+") {
//             let sum = 0
//             for (i = 0; i < numbers.length; i++) {
//                 sum += Number(numbers[i])
//                 console.log('sum', sum)
//             }//end for
//         }//end if +
//         if (parameter === "-") {
//             let subt = 0
//             for (i = 0; i < numbers.length; i++) {
//                 subt = Number(numbers[0] - numbers[i])
//                 console.log('subtraction', subt)
//             }//end for
//         }//end if -
//         if (parameter === "*") {
//             let mult = 0
//             for (i = 0; i < numbers.length; i++) {
//                 mult = Number(numbers[0] * numbers[1])
//                 console.log('multiplication', mult)
//             }//end for
//         }//end if *
//         if (parameter === "/") {
//             let div = 0
//             for (i = 0; i < numbers.length; i++) {
//                 div = Number(numbers[0] / numbers[1])
//                 console.log('subtraction', div)
//             }//end for
//         }//end if -
//     }//end value function
//     )//end $
// } //end calculations function

// function calculatorDisplay() {
//     let el = document.getElementById('.display')
//     el.append(displayValue)
//     return
// }