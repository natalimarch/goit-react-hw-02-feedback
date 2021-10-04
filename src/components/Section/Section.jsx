import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title }) => {
  return (
    <>
      <h2 className={styles.Title}>{title}</h2>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
