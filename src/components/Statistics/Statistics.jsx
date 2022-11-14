import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <ul>
            <li>
                Good: <span>{good}</span>
            </li>
            <li>
                Neutral: <span>{neutral}</span>
            </li>
            <li>
                Bad: <span>{bad}</span>
            </li>
            <li>
                Total: <span>{total}</span>
            </li>

            <li className={css.positivs}>
                Positive feedback: <span>{positivePercentage}%</span>
            </li>
        </ul>
    );
};

Statistics.prototype = {
    good: PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    positive: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
}