// Imports go first
import { makePottery } from './PotteryWheel.js'

import { firePottery } from './Kiln.js'

import { toSellOrNotToSell } from './PotteryCatalog.js'

import { usePottery } from './PotteryCatalog.js'

import {PotteryList} from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("mug", 5, 6,)
let pottery2 = makePottery("dish", 4, 4)
let pottery3 = makePottery("mug", 7, 8)
let pottery4 = makePottery("platter", 6, 8)
let pottery5 = makePottery("mug", 9, 10)

console.log(pottery5)


// Fire each piece of pottery in the kiln
let firedPottery1 = firePottery(pottery1, 2300)
let firedPottery2 = firePottery(pottery2, 2000)
let firedPottery3 = firePottery(pottery3, 2100)
let firedPottery4 = firePottery(pottery4, 2200)
let firedPottery5 = firePottery(pottery5, 2350)

console.log(firedPottery5)
// Determine which ones should be sold, and their price
let sellPottery1 = toSellOrNotToSell(firedPottery1)
let sellPottery2 = toSellOrNotToSell(firedPottery2)
let sellPottery3 = toSellOrNotToSell(firedPottery3)
let sellPottery4 = toSellOrNotToSell(firedPottery4)
let sellPottery5 = toSellOrNotToSell(firedPottery5)

console.log(sellPottery1)
console.log(sellPottery2)
console.log(sellPottery3)
console.log(sellPottery4)
// console.log(sellPottery5)
console.log(usePottery)
// // Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector('.potteryList')
parentHTMLElement.innerHTML = PotteryList(usePottery)

