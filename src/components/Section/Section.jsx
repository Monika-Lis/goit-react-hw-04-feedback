import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.headerBox}>
      <h2 className={css.header}>{title}</h2> {children}
    </div>
  );
};
