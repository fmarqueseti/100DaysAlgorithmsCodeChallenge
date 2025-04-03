/*****************************************************************
* File name  : Day04                                             *
* Date       : 2025-04-02                                        *
* Author     : Fabio Marques (fmarques@fmarques.eti.br)          *
* Data Center: 100DaysOfCode (100daysofcode.io/learn/algorithms) *
* Purposes   : Increment an int represented in array of digits   *
*****************************************************************/
// Variable declaration
let s        = ""
let digits   = []
let finished = false

// Reading string
s = prompt("What is the string?")
digits = s.split("") // Convert string to array

for (let i = digits.length -1; i >= 0; i--) {
  if (digits[i] < 9) {
    // Digit less than 9 just plus 1
    digits[i]++
    finished = true
    break
  }

  // Digit greater than 9, turns zero and continue
  digits[i] = 0
}

// If not finished, means that all digitis were 9.
if (! finished) { digits.unshift(1) }

// Display digits "plus one"
console.log(digits)