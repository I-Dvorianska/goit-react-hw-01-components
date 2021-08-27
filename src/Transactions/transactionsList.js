import Transaction from "./transaction";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <Transaction
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
