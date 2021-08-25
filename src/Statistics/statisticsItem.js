import PropTypes from "prop-types";

const StatItem = ({ label, percentage }) => {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatItem;
