export const firePottery = (potteryID, kilnTemp) => {
    const pottery = {
        id: potteryID,
        temperature: kilnTemp,
        fired: true
        }
        pottery.cracked = kilnTemp >2200 ? true:false
    return pottery
}
