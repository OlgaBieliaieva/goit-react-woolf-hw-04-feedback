import css from './Section.module.css';

export default function Section({ text, children }) {
  return (
    <section className={css.sectionContainer}>
      <h1>{text}</h1>
      {children}
    </section>
  );
}
