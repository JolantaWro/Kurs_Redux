// Tutaj zaimplementuj akcje do aplikacji bankApp
const WITHDRAW = 'WITHDRAW';
const DEPOSIT = 'DEPOSIT';

const depositMoney = (updateValue) => ({
    type: DEPOSIT,
    payload: updateValue
})

const withdrawMoney = (updateValue) => ({
    type: WITHDRAW,
    payload: updateValue
})


export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
