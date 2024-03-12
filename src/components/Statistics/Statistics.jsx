import css from './Statistics.module.css';

export default function Statistics({ ...props }) {
  const fields = Object.keys(props);

  return (
    <ul className={css.statList}>
      {fields.map((field, index) => {
        return (
          <li key={index}>
            {field !== 'positivePercentage'
              ? `${field[0].toUpperCase() + field.slice(1)}: ${props[field]}`
              : `Positive feedback: ${props[field]}%`}
          </li>
        );
      })}
    </ul>
  );
}
