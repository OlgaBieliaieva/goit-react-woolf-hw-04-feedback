import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const getBtnColor = title => {
    switch (title) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#e0a607';
      case 'bad':
        return 'red';
      default:
        return 'red';
    }
  };

  return (
    <ul className={css.btnList}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={css.button}
            type="button"
            title={option}
            style={{ backgroundColor: getBtnColor(option) }}
            onClick={() => onLeaveFeedback(option)}
          >
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
}
