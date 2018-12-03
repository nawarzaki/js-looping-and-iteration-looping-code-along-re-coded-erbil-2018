// Code your solutions in this file
let emp = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(emp) {
  for (let i=0; i<emp.length; i++){
    console.log (`Welcome ${emp[i]}! You are employee #${i+1}.`)
  }
  return emp
}
