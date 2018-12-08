// Code your solutions in this file
let emp = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(emp) {
  for (let i=0; i<emp.length; i++){
    console.log (`Welcome ${emp[i]}! You are employee #${i+1}.`)
  }
  return emp
}

function tailsNeverFails() {
  let flips = ''
  if (Math.random() >= 0.5){
    flips = 'Tails'
  }else{
    flips = false
  }
return flips
  }

let i = 0
    while (tailsNeverFails()){
        console.log(`You got ${i++}! tails in a row!`)
}
