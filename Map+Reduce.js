function getTotalBalance(transactions) {
  let total = transactions.map((i) => i.amount).reduce((a, b) => a + b);
  console.log(total);
}

// examples
const dayTransactions = [
  { id: 1001, amount: 60 },
  { id: 1002, amount: -160 },
  { id: 1003, amount: 2000 },
  { id: 1004, amount: -500 },
  { id: 1005, amount: 136 },
];

console.log(getTotalBalance(dayTransactions)); // ===> 1536
// explanation: 60 - 160 + 2000 - 500 + 136 = 1536
