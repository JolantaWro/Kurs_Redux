// Tutaj zaimplementuj akcje do aplikacji bankApp

const WITHDRAW = "WITHDRAW";
const DEPOSIT = "DEPOSIT";

const depositMoney = (value) => ({
    type: DEPOSIT,
    payload: value
})

const withdrawMoney = (value) => ({
    type: WITHDRAW,
    payload: value
})

export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
