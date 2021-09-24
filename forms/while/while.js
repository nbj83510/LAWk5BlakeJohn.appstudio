let loop = "Yes"
let i = 1
while (loop == "Yes") {
  loop = prompt("Do you want to continue the loop (Yes/No)?")
  console.log(`This loop iteration is ${i}`)
  i++
}
