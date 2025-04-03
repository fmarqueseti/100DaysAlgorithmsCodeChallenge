/*****************************************************************
* File name  : Day01                                             *
* Date       : 2025-04-02                                        *
* Author     : Fabio Marques (fmarques@fmarques.eti.br)          *
* Data Center: 100DaysOfCode (100daysofcode.io/learn/algorithms) *
* Purposes   : Find two numbers whose sum equals target          *
*****************************************************************/
// Variable declaration
let length  = 0
let nums    = []
let target  = 0
let idx1    = -1
let idx2    = -1

// Reading array length
length = parseInt(prompt("What is the array size?"))

for (let i = 0; i < length; i++) {
  nums[i] = parseInt(prompt("What is the array element of position " + (i+1) + "?"))
}

target = parseInt(prompt("What is the target value?"))

for (let i = 0; i < length -1; i++) {
  for (let j = i + 1; j < length; j++) {
    if (nums[i] + nums[j] == target) {
      idx1 = i+1
      idx2 = j+1
      break
    }
  }
}

if (idx1 >= 0 && idx2 >= 0) {
  console.log(`The target value of ${target} was reached with array elements at positions ${idx1} and ${idx2}`)
} else {
  console.log(`The target value of ${target} was not reached with array elements.`)
}
