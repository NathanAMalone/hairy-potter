export const firePottery = (potteryID, kilnTemp) => {
    const pottery = {
        id: potteryID.id,
        shape: potteryID.shape,
        weight: potteryID.weight,
        height: potteryID.height,
        temperature: kilnTemp,
        fired: true
        }
        pottery.cracked = kilnTemp >2200 ? true:false
    return pottery
}
