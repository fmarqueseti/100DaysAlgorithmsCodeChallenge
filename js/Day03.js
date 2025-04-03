/*****************************************************************
* File name  : Day03                                             *
* Date       : 2025-04-02                                        *
* Author     : Fabio Marques (fmarques@fmarques.eti.br)          *
* Data Center: 100DaysOfCode (100daysofcode.io/learn/algorithms) *
* Purposes   : Check if a string has  valid  parentheses  (using *
*              the stack approach)                               *
*****************************************************************/
// Variable declaration
let s       = ""
let stack   = []
let isValid = true

// Reading string
s = prompt("What is the string?")

// Using the stack approach
for (let i = 0; i < s.length; i++) {
  let c = s.charAt(i) // get a char
  let p = ""

  // If char is an openning char, push
  if (c == '(' || c == '[' || c == '{') {
    stack.push(c)
    continue
  }

  // If the stack is empty
  if (stack.length === 0) {
    isValid = false
    break
  }

  // Pop from stack
  p = stack.pop()

  // If char popped from stack is not a clossing one
  if (c == ")" && p != "(") { isValid = false }
  if (c == "]" && p != "[") { isValid = false }
  if (c == "}" && p != "{") { isValid = false }
}

// Valid condition: is valid and stack is empty
isValid = isValid && stack.length === 0

if (isValid) {
  console.log("Given a string 's' containing just the the allowed characters and has valid parentheses.")
} else {
  console.log("Given a string 's' do not containing just the the allowed characters or has invalid parentheses.")
}