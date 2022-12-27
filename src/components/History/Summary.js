import classes from './Summary.module.css';

const Summary = () => {
  return (
    <section className={classes.summary}>
      <h2>Check the SpaceX History</h2>
      <p>
       Here a brief list of spaceX history is listed with their title, details and eventdate.<br/>
       Have a look on it.
      </p>
    </section>
  );
};

export default Summary;