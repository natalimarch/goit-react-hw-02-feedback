import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { countFeedback } = onLeaveFeedback;
  const Button = options.map((name) => {
    return (
      <button
        key={name}
        type="button"
        name={name}
        className={styles.FeedbackBtn}
        onClick={() => countFeedback(name)}
      >
        {name}
      </button>
    );
  });
  return (
    <>
      <ul className={styles.FeedbackList}>
        <li className={styles.FeedbackItems}>{Button}</li>
      </ul>
    </>
  );
};

export default FeedbackOptions;
