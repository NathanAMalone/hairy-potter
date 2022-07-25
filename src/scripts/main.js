// Imports go first
import { makePottery } from './PotteryWheel.js'

import { firePottery } from './Kiln.js'

// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("mug", 5, 6,)
let pottery2 = makePottery("platter", 4, 4)
let pottery3 = makePottery("platter", 7, 8)
let pottery4 = makePottery("platter", 6, 8)
let pottery5 = makePottery("mug", 9, 10)

console.log(pottery5)


// Fire each piece of pottery in the kiln
let firedPottery1 = firePottery(pottery1.id, 2300)
let firedPottery2 = firePottery(pottery2.id, 2000)
let firedPottery3 = firePottery(pottery3.id, 2100)
let firedPottery4 = firePottery(pottery4.id, 2200)
let firedPottery5 = firePottery(pottery5.id, 2350)

console.log(firedPottery5)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



