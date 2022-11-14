import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export const Notification = () => {
    return<p className={css.p}>There is no feedback</p>;
};

Notification.propTypes = {
    message: PropTypes.string,
};