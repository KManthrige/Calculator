$(document).ready(calculator)

let numbers = [];
let parameter;
let equal;

function calculator() {
    $('.number').click(function () {
        let value = $(this).text()
        numbers.push(value)
        console.log('numbers', numbers)

    }//end click function for nine
    )//end nine

    // $('#eight').click(function(){
    //     let value = $(this).attr('value')
    //     console.log(value)
    // }//end click function for nine
    // )//end nine

    // $('#seven').click(function(){
    //     let value = $(this).attr('value')
    //     console.log(value)
    // }//end click function for nine
    // )//end nine

    // $('#six').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('six')
    // }//end click function for nine
    // )//end nine

    // $('#five').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('five')
    // }//end click function for nine
    // )//end nine

    // $('#four').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('four')
    // }//end click function for nine
    // )//end nine

    // $('#three').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('three')
    // }//end click function for nine
    // )//end nine

    // $('#two').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('two')
    // }//end click function for nine
    // )//end nine

    // $('#one').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('one')
    // }//end click function for nine
    // )//end nine

    // $('#divide').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('divide')
    // }//end click function for nine
    // )//end nine

    // $('#multiply').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('multipy')
    // }//end click function for nine
    // )//end nine

    // $('#plus').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('plus')
    // }//end click function for nine
    // )//end nine

    // $('#minus').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('minus')
    // }//end click function for nine
    // )//end nine

    // $('#fraction').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('fraction')
    // }//end click function for nine
    // )//end nine

    // $('#equal').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('equal')
    // }//end click function for nine
    // )//end nine

    // $('#clear').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('clear')
    // }//end click function for nine
    // )//end nine

    // $('#zero').click(function(){
    //     let value = $(this).attr('class')
    //     console.log('zero')
    // }//end click function for nine
    // )//end nine

    display()
    calculations()
}


function calculations() {
    console.log('in calculations')
    $('.parameter').click(function () {
        let value = $(this).text()
        parameter = value
        console.log('parameter', parameter)
        if (parameter === "+") {
            for (i = 0; i < numbers.length; i++){
                let sum = 0
                sum += Number(numbers[i])
                console.log('sum', sum)
            }//end for
        }//end if +
    }//end value function
    )//end $
} //end calculations function

function display() {
    //    let el = $('#answer').val('')
    //    el.empty()
    //    el.append(answer)
}