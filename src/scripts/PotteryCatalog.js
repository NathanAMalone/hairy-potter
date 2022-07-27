let sellPottery = []
let pott = []

export const toSellOrNotToSell = (potteryObject) => {

    if (potteryObject.cracked === false) {
        if (potteryObject.weight < 6) {
            potteryObject.price = 20
        } else {
            potteryObject.price = 40
            }
         sellPottery.push(potteryObject)
    } else {}
    return potteryObject
}

export const usePottery = () => {
    pott = [...sellPottery]
    return pott
}