
import { useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export const App = () =>{
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const updateFeedback = e => {
        const { name } = e.target;
        switch (name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
        }
    };

//   updateCount = state => {
//     this.setState(prevState => ({ [state]: prevState[state] + 1 }));
//   };

    
    function totalFeedback() {
        return good + neutral + bad;
    }
    
//   countTotalFeedback = () => 
//     Object.values(this.state).reduce((acc, value) => acc + value, 0);
  
    
    const positivePercentage = () => {
        const total = totalFeedback();
        return total ? Math.round((good * 100) / total) : 0;
    }
    
//   countPositveFeedbackPercentage = () => {
//     return this.countTotalFeedback()
//       ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
//       : '0';
//   };
    
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            updateFeedback={updateFeedback}
          />
        </Section>
          
        {totalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback()}
              positivePercentage={positivePercentage()}
            />
          </Section>
        ) : (
          <Notification />
        )}
      </>
    );
  }
