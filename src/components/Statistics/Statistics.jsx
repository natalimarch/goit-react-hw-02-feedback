import styles from "./Statistics.module.css";
import Notification from "./Notification";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      {total ? (
        <ul className={styles.FeedbackList}>
          <li>
            Good:
            <span> {good}</span>
          </li>
          <li>
            Neutral:
            <span> {neutral}</span>
          </li>
          <li>
            Bad:
            <span> {bad}</span>
          </li>
          <li>
            Total:
            <span> {total}</span>
          </li>
          <li>
            Positive feedback:
            <span> {positive}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
