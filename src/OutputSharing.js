export default function OutputSharing(total, user) {
  const share = total / user.length;

  const balances = user.map((e) => {
    return {
      id: e.id,
      name: e.name,
      amount: e.amount - share,
    };
  });

  let debtors = balances.filter((b) => b.amount < 0);
  let creditors = balances.filter((b) => b.amount > 0);
  const transaction = [];

  const amountZero = balances.every((e) => e.amount === 0);

  if (amountZero) {
    transaction.push({ msg: "Amount spent equally no transaction required!" });
    return transaction;
  }

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const min = Math.min(-debtor.amount, creditor.amount);

    transaction.push({
      from: debtor.name,
      to: creditor.name,
      amount: +min,
    });

    debtor.amount += min;
    creditor.amount -= min;

    if (Math.abs(debtor.amount) < 0.01) i++;
    // if (Number(debtor.amount.toFixed(2)) == 0) i++;
    if (Math.abs(creditor.amount) < 0.01) j++;
    // if (Number(creditor.amount.toFixed(2)) == 0) i++;
  }

  return transaction;
}
