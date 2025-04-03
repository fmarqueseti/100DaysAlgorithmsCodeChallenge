/*****************************************************************
* File name  : Day02                                             *
* Date       : 2025-04-02                                        *
* Author     : Fabio Marques (fmarques@fmarques.eti.br)          *
* Data Center: 100DaysOfCode (100daysofcode.io/learn/algorithms) *
* Purposes   : Check if one string is an anagram of another      *
*****************************************************************/
// Variable declaration
let s       = ""
let t       = ""
let checked = true

// Reading strings
s = prompt("What is 1st string?")
t = prompt("What is 2nd string?")

// Initial check for length
checked = s.length === t.length

// Proceed only if lengths match
if (checked) {
  // Convert strings to sorted arrays
  let sSorted = s.split("").sort().join("")
  let tSorted = t.split("").sort().join("")
  
  // Compare sorted arrays
  checked = sSorted === tSorted
}

// Display result
console.log(checked ? "They are anagrams." : "They aren't anagrams.")