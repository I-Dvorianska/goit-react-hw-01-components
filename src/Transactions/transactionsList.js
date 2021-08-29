import Transaction from "./transaction";
import css from "Transactions/transactionsList.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <Transaction
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              id={transaction.id}
              key={transaction.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
