import { Component } from "react";
import styles from "./Feedback.module.css";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";


class Feedback extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.name);
    const currentState = e.currentTarget.name;
    this.setState(prevState => ({
      [currentState]: prevState.[currentState] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const {countTotalFeedback} = this;
    const total = countTotalFeedback();
    const positive = Math.round((good / total) * 100);
   return positive;
  }
  
  render() {
    const { countFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, neutral, bad} = this.state;
    const onLeaveFeedback = {countFeedback};
    const names = ["good", "neutral", "bad"];
    return (
      <div className={styles.FeedbackForm}>
        < Section title="Please leave feedback"/>
        < FeedbackOptions options={names} onLeaveFeedback={onLeaveFeedback}/>
        < Section title="Statistics"/>
        < Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positive={countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;

