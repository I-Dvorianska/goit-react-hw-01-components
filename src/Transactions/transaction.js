import PropTypes from "prop-types";
import css from "Transactions/transaction.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.row}>{type}</td>
      <td className={css.row}>{amount}</td>
      <td className={css.row}>{currency}</td>
    </>
  );
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default Transaction;
